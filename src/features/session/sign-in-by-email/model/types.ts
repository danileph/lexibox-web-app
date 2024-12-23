import { z } from 'zod';
import { signInByEmailFormSchema } from '@/features/session/sign-in-by-email/model/validator';

export type SignInByEmailFormData = z.infer<typeof signInByEmailFormSchema>;
