export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  email: string;
  username: string;
  password: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface ITokens {
  accessToken: string;
}

export interface IAuthResponse {
  tokens: ITokens;
  user: IUser;
}
