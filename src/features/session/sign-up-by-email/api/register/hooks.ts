'use client';

import { useActionState, useEffect, useState } from 'react';
import { registerAction } from '@/features/session/sign-up-by-email/api/register/serverActions';
import { useErrorToast } from '@/shared/hooks/request-status-hooks';
import { withoutPrevStateServerAction } from '@/shared/lib/httpQueryLib';
import { ApiHookState, ServerActionState } from '@/shared/types/httpQueryTypes';

const initialState: ServerActionState = {
  isError: false,
};

export const useRegisterApi = (): ApiHookState<typeof registerAction> => {
  // const [state, formAction, pending] = useActionState(registerAction, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [serverActionState, setServerActionState] = useState<ServerActionState>(initialState);

  const trigger = async (data?: Parameters<typeof registerAction>[0]): Promise<ServerActionState> => {
    if (!data) return initialState;
    debugger;
    setIsLoading(true);
    console.log({ data });
    const res = await registerAction(data);
    setIsLoading(false);
    setServerActionState(res);
    return res;
  };

  useErrorToast(serverActionState.errors);

  return { registerAction: trigger, ...serverActionState, isLoading };
};
