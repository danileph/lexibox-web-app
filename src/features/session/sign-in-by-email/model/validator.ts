import { z } from 'zod';

export const signInByEmailFormSchema = z.object({
  email: z.string().email('Invalid email address').nonempty().max(100, 'Email must be 100 characters or less'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Password must be 50 characters or less'),
});
