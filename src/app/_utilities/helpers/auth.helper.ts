import { authUser } from '@app/_components/popovers/AuthUserPopover/data';
import JS_COOKIE from 'js-cookie';
import type { IUser } from '../../../interfaces';
import { ACCESS_TOKEN_KEY } from '../constants';

export const isValidEmail = (emailAddress: string) => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  return pattern.test(emailAddress);
};

export const setCookie = (name: string, val: string) => {
  JS_COOKIE.set(name, val, { expires: 86400 });
};

export const getAuthToken = () => {
  const token = JS_COOKIE.get(ACCESS_TOKEN_KEY);
  return token ? token : null;
};

export const signIn = async (
  payload: { email: string; password: string },
  next?: (user: IUser) => void
) => {
  // Todo: api integration
  const user = { ...authUser, email: payload.email };
  if (next) return next(user);
  return user;
};

export const signOut = async (next?: () => void) => {
  JS_COOKIE.remove(ACCESS_TOKEN_KEY);
  if (next) next();
};

export const getErrorMessage = (error: any) => {
  console.dir(error, { depth: Infinity });
  return (
    error?.response?.data?.message ||
    error?.response?.message ||
    error?.data?.message ||
    error?.message ||
    'Something went wrong'
  );
};
