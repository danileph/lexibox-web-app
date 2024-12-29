'use server';

import { mapToRegisterRequestBody } from '@/features/session/sign-up-by-email/api/register/mappings';
import { register } from '@/features/session/sign-up-by-email/api/register/services';
import { SignUpByEmailFormData } from '@/features/session/sign-up-by-email/model/types';
import { HttpQueryError, ServerActionState } from '@/shared/types/httpQueryTypes';

export const registerAction = async (
  prevState: ServerActionState,
  data: SignUpByEmailFormData
): Promise<ServerActionState> => {
  const state: ServerActionState = {
    isError: false,
  };
  const mappedData = mapToRegisterRequestBody(data);

  try {
    await register(mappedData);
  } catch (error) {
    if (error instanceof HttpQueryError) {
      state.isError = true;
      state.errors = [error.data.errors];
      console.error(error.data);
    }
  }

  return state;
};
