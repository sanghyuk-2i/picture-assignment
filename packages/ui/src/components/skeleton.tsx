import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../utils';

const skeletonVariants = cva(
  `
    animate-pulse rounded-md bg-gray-200
  `,
  {
    variants: {
      variant: {
        default: 'h-12 min-w-28 rounded-lg bg-gray-200',
        circle: 'size-12 rounded-full bg-gray-200',
        square: 'h-12 w-12 rounded-lg bg-gray-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  className?: string;
}
export function Skeleton({ variant = 'default', className }: SkeletonProps) {
  return <div className={cn(skeletonVariants({ variant }), className)} />;
}
