import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '../../lib/utils';

const Drawer = DialogPrimitive.Root;
const DrawerTrigger = DialogPrimitive.Trigger;
const DrawerPortal = DialogPrimitive.Portal;
const DrawerClose = DialogPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={cn('fixed inset-0 z-50 bg-black/50', className)} {...props} />
));
DrawerOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DrawerSide = 'left' | 'right';

type DrawerContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  side?: DrawerSide;
};

const DrawerContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DrawerContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <DrawerPortal>
      <DrawerOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed top-0 z-50 h-full w-full max-w-md border-outline-variant bg-surface-container-lowest p-6 shadow-xl',
          side === 'right' ? 'right-0 border-l' : 'left-0 border-r',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DrawerPortal>
  ),
);
DrawerContent.displayName = 'DrawerContent';

function DrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-4 flex flex-col space-y-1.5 text-left', className)} {...props} />;
}

function DrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)} {...props} />;
}

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
));
DrawerTitle.displayName = DialogPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-on-surface-variant', className)} {...props} />
));
DrawerDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};

export default Drawer;
