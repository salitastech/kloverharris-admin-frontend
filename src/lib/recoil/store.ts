import { atom } from 'recoil';
import type { IAuthState } from '../../interfaces';

export const authState = atom<IAuthState>({
  key: 'auth-state',
  default: { isLoggedIn: false, user: null },
});
