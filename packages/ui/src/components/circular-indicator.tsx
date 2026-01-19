import { cn } from '../utils';

interface CircularIndicatorProps {
  size?: number;
  className?: string;
  startColor?: string;
  endColor?: string;
}

export function CircularIndicator({
  size = 48,
  className,
  startColor = '#3b82f6',
  endColor = '#93c5fd',
}: CircularIndicatorProps) {
  const radius = size / 4;
  const center = size / 2;
  const strokeWidth = size / 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference * 0.25;

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
      >
        <defs>
          <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="url(#spinner-gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  );
}
