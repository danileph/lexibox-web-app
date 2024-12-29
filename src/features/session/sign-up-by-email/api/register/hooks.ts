'use client';

import { useActionState } from 'react';
import { registerAction } from '@/features/session/sign-up-by-email/api/register/serverActions';
import { withoutPrevStateServerAction } from '@/shared/lib/httpQueryLib';
import { ApiHookState } from '@/shared/types/httpQueryTypes';

const initialState = {
  isError: false,
};

export const useRegisterApi = (): ApiHookState<typeof registerAction> => {
  const [state, formAction, pending] = useActionState(registerAction, initialState);

  return { registerAction: withoutPrevStateServerAction(registerAction, state), ...state, isLoading: pending };
};
