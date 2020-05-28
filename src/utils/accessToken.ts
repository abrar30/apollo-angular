let AccessToken = '';

export const setAccessToken = (s: string) => {
  AccessToken = s;
};

export const getAccessToken = () => {
  return AccessToken;
};
