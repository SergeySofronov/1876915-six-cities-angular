export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface LoggedUser extends User {
  email: string;
  token: string;
}