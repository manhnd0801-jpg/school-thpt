import * as React from 'react';
import { cn } from '../../lib/utils';

type CalendarProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

const Calendar = React.forwardRef<HTMLInputElement, CalendarProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type='date'
      className={cn(
        'h-10 rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-deep/30',
        className,
      )}
      {...props}
    />
  );
});

Calendar.displayName = 'Calendar';

export default Calendar;
