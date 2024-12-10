import { IUser } from './user';

export interface IAuthState {
  isLoggedIn: boolean;
  user: IUser | null;
}
