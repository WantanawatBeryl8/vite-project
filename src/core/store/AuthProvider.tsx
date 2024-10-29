import Cookies from 'js-cookie';
import { getJWTPayload } from '../utils';
import { AuthProviderProps, AuthContext, User } from './user';
import { useMemo } from 'react';

function AuthProvider({ children }: AuthProviderProps) {
  // Uses `isSignedIn` prop to determine whether or not to render a user
  const user = useMemo(() => {
    const cookie = Cookies.get('access_token');
    return cookie ? (getJWTPayload(cookie) as User) : null;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
