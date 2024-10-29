import { createContext, PropsWithChildren } from 'react';

enum UserType {
  USER,
  ADMIN,
}

interface User {
  id: number;
  name: string;
  role: UserType;
}

const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

export { UserType, AuthContext };
export type { AuthProviderProps, User };
