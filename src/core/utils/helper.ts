import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const signIn = (access_token: string, refresh_token: string) => {
  Cookies.set('access_token', access_token);
  Cookies.set('refresh_token', refresh_token);
};

export const signOut = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
};

export const getJWTPayload = (access_token: string) => {
  return access_token ? jwtDecode(access_token) : null;
};
