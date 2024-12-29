import { z } from 'zod';

export const signUpByEmailFormSchema = z
  .object({
    email: z
      .string()
      .email('Invalid email address')
      .nonempty('Email is required')
      .max(100, 'Email must be 100 characters or less'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(50, 'Password must be 50 characters or less'),
    passwordConfirmation: z
      .string()
      .min(8, 'Password confirmation must be at least 8 characters long')
      .max(50, 'Password confirmation must be 50 characters or less'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'], // Error will be assigned to this field
  });
