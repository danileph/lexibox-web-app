```tsx
import React, { forwardRef } from 'react';
import { cn } from '@/shared/lib/tailwindUtils';

interface ComponentNameProps extends React.HTMLAttributes<HTMLElement> {}

/**
 * Reusable ComponentName Component with forwarded ref
 * @param {ComponentNameProps} props - The props for the ComponentName component
 * @returns JSX.Element
 */
export const ComponentName = forwardRef<HTMLElement, ComponentNameProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';
```
### Life Template for WebStorm
*Life template name*: `rafc`
```tsx
import React, { forwardRef } from 'react';
import { cn } from '@/shared/lib/tailwindUtils';

interface $TM_FILENAME_BASE$Props extends React.HTMLAttributes<HTMLElement> {}

/**
 * Reusable $TM_FILENAME_BASE$ Component with forwarded ref
 * @param {$TM_FILENAME_BASE$Props} props - The props for the $TM_FILENAME_BASE$ component
 * @returns JSX.Element
 */
export const $TM_FILENAME_BASE$ = forwardRef<HTMLElement, $TM_FILENAME_BASE$Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("", className)}
        {...props}
      >
        $END$
      </div>
    );
  }
);

$TM_FILENAME_BASE$.displayName = '$TM_FILENAME_BASE$';
```