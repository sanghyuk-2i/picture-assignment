import { cn } from '@repo/ui';

interface HeaderProps {
  title: string;
  titleClassName?: string;
}

const Header = ({ title, titleClassName }: HeaderProps) => {
  return (
    <header className="bg-transparent px-5 py-[15.5px] text-center">
      <h1 className={cn('text-[0.933rem] font-medium', titleClassName)}>{title}</h1>
    </header>
  );
};

export default Header;
