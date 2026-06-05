import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type CardProps = HTMLAttributes<HTMLDivElement>;

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />;
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}

export function CardFooter({ className, ...props }: CardProps) {
  return <div className={cn('flex items-center p-6 pt-0', className)} {...props} />;
}

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm', className)}
      {...props}
    />
  );
}
