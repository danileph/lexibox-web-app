import { NextRequest, NextResponse } from 'next/server';
import { routeConfig } from '@/shared/config/routeConfig';
import { arrayOfRoutes, ROUTES } from '@/shared/consts/routes';
import { redirectToSignInWithReturnUrl } from '@/shared/lib/routeLib';

// export { auth as middleware } from '@/entites/session';

export default function middleware(req: any) {
  const { pathname } = req.nextUrl;
  console.log(req.url);

  if (!!req.auth) {
    for (const route of [ROUTES.signUp, ROUTES.signIn]) {
      if (pathname === route) return NextResponse.redirect(new URL(ROUTES.home, req.url));
    }

    return NextResponse.next();
  }

  for (const route of arrayOfRoutes) {
    if (!routeConfig[route].protected) continue;

    if (routeConfig[route].applyRuleForAllChildPaths && pathname.startsWith(route))
      return redirectToSignInWithReturnUrl(req, pathname);

    if (pathname === route) return redirectToSignInWithReturnUrl(req, pathname);
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
