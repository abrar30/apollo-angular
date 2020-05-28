import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, Observable } from 'apollo-link';
import { getAccessToken, setAccessToken } from 'src/utils/accessToken';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';
import { onError } from 'apollo-link-error';

const uri = 'http://localhost:5020/hrx'; // <-- add the URL of the GraphQL server here
const authMiddleware = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any;
      Promise.resolve(operation)
        .then((operation) => {
          const accessToken = getAccessToken();
          if (accessToken) {
            operation.setContext({
              headers: {
                authorization: `bearer ${accessToken}`,
              },
            });
          } //accessToken is defined
        }) //then operation ends here
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          }); //handle ends here
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

export function createApollo(httpLink: HttpLink) {
  return {
    //link: httpLink.create({ uri }),
    link: ApolloLink.from([
      new TokenRefreshLink({
        accessTokenField: 'AccessToken',
        isTokenValidOrUndefined: () => {
          const token = getAccessToken();
          if (!token) {
            return true;
          }

          try {
            const { exp } = jwtDecode(token);
            if (Date.now() >= exp * 1000) {
              return false;
            } else {
              return true;
            }
          } catch (err) {
            console.log(err);
            return false;
          }
        },
        fetchAccessToken: () => {
          return fetch('http://localhost:5020/refresh_token', {
            method: 'POST',
            credentials: 'include',
          });
        },
        handleFetch: (accessToken) => {
          setAccessToken(accessToken);
        },
        handleError: (err) => {
          console.warn('Your refresh token is invalid. Try to relogin');
          console.error(err);
        },
      }),
      onError(() => {}),
      authMiddleware,
      httpLink.create({
        uri: 'http://localhost:5020/hrx',
        withCredentials: true,
      }),
    ]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
