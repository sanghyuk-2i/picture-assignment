import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '../utils';

const flexVariants = cva(
  `
    flex
  `,
  {
    variants: {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
        rowReverse: 'flex-row-reverse',
        columnReverse: 'flex-col-reverse',
      },
      alignItems: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      },
      justifyContent: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        spaceBetween: 'justify-between',
        spaceAround: 'justify-around',
        spaceEvenly: 'justify-evenly',
      },
    },
    defaultVariants: {
      direction: 'row',
      alignItems: 'start',
      justifyContent: 'start',
    },
  },
);

export function Flex({
  children,
  className,
  direction,
  alignItems,
  justifyContent,
  as,
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof flexVariants> & { as?: React.ElementType }) {
  const Comp = as ?? 'div';

  return (
    <Comp {...props} className={cn(flexVariants({ direction, alignItems, justifyContent }), className)}>
      {children}
    </Comp>
  );
}
