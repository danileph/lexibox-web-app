export const ROUTES = {
  home: '/',
  signIn: '/auth/sign-in',
  signUp: '/auth/sign-up',
  search: '/search',
} as const;

export const arrayOfRoutes = Object.values(ROUTES);
