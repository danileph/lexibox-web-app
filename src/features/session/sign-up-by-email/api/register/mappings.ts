import { RegisterRequestBody } from '@/features/session/sign-up-by-email/api/register/types';
import { SignUpByEmailFormData } from '@/features/session/sign-up-by-email/model/types';

export const mapToRegisterRequestBody = (data: SignUpByEmailFormData): RegisterRequestBody => ({
  email: data.email,
  password: data.password,
  passwordConfirmation: data.passwordConfirmation,
});
