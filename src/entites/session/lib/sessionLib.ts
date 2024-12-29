import { NextResponse } from 'next/server';
import { auth } from '@/entites/session';
import { ROUTES } from '@/shared/consts/routes';

export async function protectRoute() {
  const session = await auth();

  if (!session) {
    NextResponse.redirect(new URL(ROUTES.signIn));
  }
}
