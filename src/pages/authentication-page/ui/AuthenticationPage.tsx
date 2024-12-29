import Link from 'next/link';
import React, { forwardRef } from 'react';
import { AuthMode } from '@/entites/session';
import { Authentication } from '@/widgets/authentication';
import { ROUTES } from '@/shared/consts/routes';
import { cn, gv } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';

interface AuthenticationPageProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: AuthMode;
}

/**
 * Reusable AuthenticationPage Component with forwarded ref
 * @param {AuthenticationPageProps} props - The props for the AuthenticationPage component
 * @returns JSX.Element
 */
export const AuthenticationPage = forwardRef<HTMLDivElement, AuthenticationPageProps>(
  ({ children, className, mode = AuthMode.SignIn, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('grid grid-cols-2 h-screen', className)} {...props}>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and helped me deliver stunning designs to my
                clients faster than ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="container relative h-[800px] flex-col items-center justify-center lg:max-w-none lg:px-0">
          <Button asChild variant="ghost" className={cn('absolute right-4 top-4 md:right-8 md:top-8')}>
            {gv(mode, {
              [AuthMode.SignIn]: <Link href={ROUTES.signUp}>Sign Up</Link>,
              [AuthMode.SignUp]: <Link href={ROUTES.signIn}>Sign In</Link>,
            })}
          </Button>
          <div className="lg:p-8 flex flex-col justify-center items-center h-screen">
            <Authentication mode={mode} />
          </div>
        </div>
      </div>
    );
  }
);

AuthenticationPage.displayName = 'AuthenticationPage';
