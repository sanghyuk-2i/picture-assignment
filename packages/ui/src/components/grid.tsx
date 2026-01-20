import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import { cn } from '../utils';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
  rows?: number;
  children?: ReactNode;
}

export function Grid({ children, className, columns, rows, style, ...props }: GridProps) {
  const gridStyle: CSSProperties = {
    ...style,
    // columns prop이 있을 때만 인라인 스타일 적용 (없으면 Tailwind 클래스 사용)
    ...(columns !== undefined && { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }),
    ...(rows && { gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }),
  };

  const rowClasses = rows ? `grid-flow-col` : undefined;

  return (
    <div className={cn('grid', rowClasses, className)} style={gridStyle} {...props}>
      {children}
    </div>
  );
}
