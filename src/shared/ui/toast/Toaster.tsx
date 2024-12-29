'use client';

import { ToastProvider } from '@radix-ui/react-toast';
import { useToast } from '@/shared/hooks/use-toast';
import { cn } from '@/shared/lib/utils';
import { Toast, ToastClose, ToastDescription, ToastTitle, ToastViewport } from '@/shared/ui/toast/Toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, className, ...props }) => {
        return (
          <Toast key={id} className={cn('mt-2', className)} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
