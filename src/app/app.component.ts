import { Component } from '@angular/core';
import {
  GetSubscriptionAccGQL,
  AddSubscriptionAccGQL,
  LoginGQL,
} from 'src/generated/graphql';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor(
    private getSubscriptionGQL: GetSubscriptionAccGQL,
    private addSubscription: AddSubscriptionAccGQL,
    private login: LoginGQL
  ) {}
  ngOnInit() {
    let Login = this.login.mutate({
      LoginId: 'abrar',
      Password: 'abc123',
    });

    Login.subscribe((res) => {
      console.log(res, 'Result');
    });

    /// query

    let sub = this.getSubscriptionGQL
      .watch()
      .valueChanges.pipe(map((x) => x.data.SubscriptionAccListing));

    sub.subscribe((x) => {
      console.log(x, 'Subscription');
    });
  }
}
