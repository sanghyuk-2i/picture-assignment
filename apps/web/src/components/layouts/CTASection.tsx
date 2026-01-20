import { cn } from '@repo/ui';
import { ReactNode } from 'react';

interface CTASectionProps {
  children: ReactNode;
  className?: string;
}

const CTASection = (props: CTASectionProps) => {
  const { children, className } = props;

  return <div className={cn('flex items-center gap-2 px-5 py-10', className)}>{children}</div>;
};

export default CTASection;
