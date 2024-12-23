'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { SignInByEmailFormData } from '@/features/session/sign-in-by-email/model/types';
import { signInByEmailFormSchema } from '@/features/session/sign-in-by-email/model/validator';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

interface SignInFormProps extends React.HTMLAttributes<HTMLFormElement> {}

/**
 * Reusable SignInByEmailForm Component with forwarded ref
 * @param {SignInFormProps} props - The props for the SignInByEmailForm component
 * @returns JSX.Element
 */
export const SignInByEmailForm = forwardRef<HTMLFormElement, SignInFormProps>(
  ({ children, className, ...props }, ref) => {
    const form = useForm<SignInByEmailFormData>({
      resolver: zodResolver(signInByEmailFormSchema),
      defaultValues: {
        email: '',
        password: '',
      },
    });

    const handleOnSubmit = (data: SignInByEmailFormData) => {
      console.log(data);
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
          <Button type="submit" className="w-full">
            Sign in with email
          </Button>
        </form>
      </Form>
    );
  }
);

SignInByEmailForm.displayName = 'SignInByEmailForm';
