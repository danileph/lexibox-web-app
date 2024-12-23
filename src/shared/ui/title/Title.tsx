import { cva, type VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';

const titleVariants = cva('', {
  variants: {
    level: {
      1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    },
  },
  defaultVariants: {
    level: 1,
  },
});

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof titleVariants> {}

/**
 * Reusable Title Component with forwarded ref
 * @param {TitleProps} props - The props for the Title component
 * @returns JSX.Element
 */
export const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ children, className, level = 1, ...props }, ref) => {
  const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';

  return (
    <HeadingTag ref={ref} className={cn(titleVariants({ level, className }))} {...props}>
      {children}
    </HeadingTag>
  );
});

Title.displayName = 'Title';
