import { ImgHTMLAttributes, SyntheticEvent, useState } from 'react';

import { cn } from '../utils';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
  containerClassName?: string;
}

export function Image({ src, alt, className, aspectRatio, containerClassName, onLoad, ...props }: ImageProps) {
  const [loading, setLoading] = useState(true);

  const handleLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setLoading(false);
    onLoad?.(event);
  };

  if (!src) {
    return (
      <div className={cn('relative w-full', className)} style={aspectRatio ? { aspectRatio } : undefined}>
        <div className="absolute inset-0 animate-pulse rounded-lg bg-gray-200" />
      </div>
    );
  }

  return (
    <div className={cn('relative w-full', containerClassName)} style={aspectRatio ? { aspectRatio } : undefined}>
      {loading && <div className="absolute inset-0 animate-pulse rounded-lg bg-gray-200" />}
      <img
        src={src}
        alt={alt}
        className={cn('h-full w-full object-cover', loading && 'opacity-0', className)}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
}
