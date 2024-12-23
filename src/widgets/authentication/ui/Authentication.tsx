import Link from 'next/link';
import React, { forwardRef } from 'react';

import { SignInByEmailForm } from '@/features/session/sign-in-by-email';
import { cn, gv } from '@/shared/lib/utils';
import { AuthMode } from '../model/types';

interface AuthenticationProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: AuthMode;
}

/**
 * Reusable Authentication Component with forwarded ref
 * @param {AuthenticationProps} props - The props for the Authentication component
 * @returns JSX.Element
 */
export const Authentication = forwardRef<HTMLDivElement, AuthenticationProps>(
  ({ children, className, mode = AuthMode.SignIn, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]', className)}
        {...props}
      >
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {gv(mode, { [AuthMode.SignIn]: 'Sign In', [AuthMode.SignUp]: 'Create an account' })}
          </h1>
          <p className="text-sm text-muted-foreground">
            {gv(mode, {
              [AuthMode.SignIn]: 'Enter your email below to login',
              [AuthMode.SignUp]: 'Enter your email below to create your account',
            })}
          </p>
        </div>
        {<SignInByEmailForm />}
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{' '}
          <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    );
  }
);

Authentication.displayName = 'Authentication';
