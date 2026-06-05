import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type ToastProps = HTMLAttributes<HTMLDivElement>;

export default function Toast({ className, children, ...props }: ToastProps) {
  return (
    <div
      role='status'
      className={cn('w-full rounded-md border border-outline-variant bg-surface-container-lowest px-4 py-3 text-sm shadow', className)}
      {...props}
    >
      {children ?? null}
    </div>
  );
}
