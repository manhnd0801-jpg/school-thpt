import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export default function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-outline-variant px-2.5 py-0.5 text-xs font-semibold',
        className,
      )}
      {...props}
    >
      {children ?? null}
    </span>
  );
}
