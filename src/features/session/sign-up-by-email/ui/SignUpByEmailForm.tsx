'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterApi } from '@/features/session/sign-up-by-email/api/register/hooks';
import { SignUpByEmailFormData } from '@/features/session/sign-up-by-email/model/types';
import { signUpByEmailFormSchema } from '@/features/session/sign-up-by-email/model/validator';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

interface SignInFormProps extends React.HTMLAttributes<HTMLFormElement> {}

/**
 * Reusable SignUpByEmailForm Component with forwarded ref
 * @param {SignInFormProps} props - The props for the SignUpByEmailForm component
 * @returns JSX.Element
 */
export const SignUpByEmailForm = forwardRef<HTMLFormElement, SignInFormProps>(
  ({ children, className, ...props }, ref) => {
    const form = useForm<SignUpByEmailFormData>({
      resolver: zodResolver(signUpByEmailFormSchema),
      defaultValues: {
        email: '',
        password: '',
        passwordConfirmation: '',
      },
    });

    const { registerAction, isError, errors, isLoading } = useRegisterApi();

    const handleOnSubmit = async (data: SignUpByEmailFormData) => {
      await registerAction(data);
    };

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)} ref={ref} className={cn('space-y-2', className)} {...props}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type={'password'} placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type={'password'} placeholder="Confirm password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            Sign Up with email
          </Button>
        </form>
      </Form>
    );
  }
);

SignUpByEmailForm.displayName = 'SignUpByEmailForm';
