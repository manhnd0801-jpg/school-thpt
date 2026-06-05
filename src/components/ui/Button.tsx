import * as React from 'react';
import { cn } from '../../lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-deep/40',
          'disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
