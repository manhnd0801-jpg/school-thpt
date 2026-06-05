import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type ChartProps = HTMLAttributes<HTMLDivElement>;

export default function Chart({ className, children, ...props }: ChartProps) {
  return (
    <div className={cn('w-full rounded-xl border border-outline-variant bg-surface-container-lowest p-4', className)} {...props}>
      {children ?? null}
    </div>
  );
}
