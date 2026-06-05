import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type PaginationProps = HTMLAttributes<HTMLElement>;

export default function Pagination({ className, children, ...props }: PaginationProps) {
  return (
    <nav className={cn('flex items-center justify-center gap-2', className)} aria-label='Pagination' {...props}>
      {children ?? null}
    </nav>
  );
}
