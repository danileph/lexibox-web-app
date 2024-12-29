import { RegisterRequestBody } from '@/features/session/sign-up-by-email/api/register/types';
import { API_ENDPOINTS } from '@/shared/consts/api';
import { httpQuery } from '@/shared/lib/httpQueryLib';

export const register = async (data: RegisterRequestBody) => {
  await httpQuery(API_ENDPOINTS.register(), { method: 'POST', body: data });
};
