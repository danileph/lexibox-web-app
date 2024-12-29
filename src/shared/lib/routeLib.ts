import { NextResponse } from 'next/server';
import { ROUTES } from '@/shared/consts/routes';

export function redirectToSignInWithReturnUrl(req: any, returnPath: string) {
  const signInUrl = new URL(ROUTES.signIn, req.url);
  signInUrl.searchParams.set('from', returnPath);
  return NextResponse.redirect(signInUrl);
}

export function getRoutesWithWildcard(routes: (typeof ROUTES)[keyof typeof ROUTES][]) {
  return routes.map((route) => `${route}/:path*`);
}
