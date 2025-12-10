import type { TUsername, TPassword, TEmail } from "./context";

// _auth
export interface ISignInFormTypes {
  username: TUsername;
  password: TPassword;
}

export interface ISignUpFormTypes {
  username: TUsername;
  email: TEmail;
  password: TPassword;
  confirmPassword: TPassword;
}
