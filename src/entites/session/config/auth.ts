import NextAuth from 'next-auth';
import { ROUTES } from '@/shared/consts/routes';

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    error: '/',
    signIn: ROUTES.signIn,
    signOut: ROUTES.home,
  },
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth;

      return isAuthenticated;
    },
  },
  providers: [],
});
