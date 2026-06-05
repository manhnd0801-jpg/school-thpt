import type { TableHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type TableProps = TableHTMLAttributes<HTMLTableElement>;

export default function Table({ className, children, ...props }: TableProps) {
  return (
    <table className={cn('w-full caption-bottom text-sm', className)} {...props}>
      {children ?? null}
    </table>
  );
}
