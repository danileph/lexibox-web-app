import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';

const textVariants = cva('', {
  variants: {
    variant: {
      default: 'leading-7 [&:not(:first-child)]:mt-6',
      muted: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {}

/**
 * Reusable Text Component with forwarded ref
 * @param {TextProps} props - The props for the Text component
 * @returns JSX.Element
 */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(({ className, variant, ...props }, ref) => {
  return <p ref={ref} className={cn(textVariants({ variant, className }))} {...props} />;
});

Text.displayName = 'Text';
