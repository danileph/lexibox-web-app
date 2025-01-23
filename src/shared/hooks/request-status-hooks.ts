import { useEffect } from 'react';
import { useToast } from '@/shared/hooks/toast-hook';

export const useErrorToast = (errors?: string[]) => {
  const { toast } = useToast();

  useEffect(() => {
    if (errors && errors.length > 0) {
      errors?.forEach((e) => {
        toast({
          title: 'Error',
          description: e,
          variant: 'destructive',
        });
      });
    }
  }, [errors]);
};
