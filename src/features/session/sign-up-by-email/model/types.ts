import { z } from 'zod';
import { signUpByEmailFormSchema } from '@/features/session/sign-up-by-email/model/validator';

export type SignUpByEmailFormData = z.infer<typeof signUpByEmailFormSchema>;
