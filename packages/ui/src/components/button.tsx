import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '../utils';
import { CircularIndicator } from './circular-indicator';

const buttonVariants = cva(
  `
    flex cursor-pointer items-center gap-2 rounded-xl p-3 transition-all duration-200 ease-in-out select-none 
    hover:bg-gray-600 active:scale-95 [&:disabled]:pointer-events-none [&:disabled]:cursor-not-allowed [&:disabled]:opacity-50 [&>img]:size-6 [&>svg]:size-6
  `,
  {
    variants: {
      variant: {
        primary: 'bg-gray-900 text-white',
        secondary: 'bg-gray-500 text-white',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      fullWidth: false,
    },
  },
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  loading?: boolean;
  fullWidth?: boolean;
  loadingText?: string;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  loading = false,
  fullWidth = false,
  loadingText,
  leftDecorator,
  rightDecorator,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = loading || disabled;

  return (
    <button {...props} className={cn(buttonVariants({ variant, fullWidth }), className)} disabled={isDisabled}>
      {loading ? (
        <LoadingSpinner text={loadingText} />
      ) : (
        <>
          {leftDecorator}
          <div className="flex-1">{children}</div>
          {rightDecorator}
        </>
      )}
    </button>
  );
}

function LoadingSpinner({ text = '로딩중' }: { text?: string }) {
  return (
    <div className="flex flex-1 items-center justify-center gap-1">
      <CircularIndicator size={24} startColor="#ffffff" endColor="#f2f2f2" />
      {text && <span>{text}</span>}
    </div>
  );
}
