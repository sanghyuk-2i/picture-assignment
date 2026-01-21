import { cn, Grid } from '@repo/ui';
import { ReactNode } from 'react';

const InfoCardItem = (props: { label: string; value: string; link?: boolean }) => {
  const { label, value, link = false } = props;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <p className="text-gray-500">
        {link ? (
          <a href={value} className="underline" target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          value
        )}
      </p>
    </div>
  );
};

const InfoCard = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <Grid className={cn('w-full grid-cols-1 gap-2 rounded-2xl bg-white p-5', className)}>{children}</Grid>;
};

export { InfoCard, InfoCardItem };
