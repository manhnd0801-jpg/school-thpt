import * as React from 'react';
import { cn } from '../../lib/utils';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, children, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'min-h-24 w-full rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm',
        'placeholder:text-on-surface-variant/70',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-deep/30',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children ?? null}
    </textarea>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
