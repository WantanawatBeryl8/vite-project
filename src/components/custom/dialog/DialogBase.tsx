import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const contentVariants = cva('overflow-auto', {
  variants: {
    variant: {
      default: 'w-auto h-auto',
      sm: 'w-[670px] h-auto',
      md: 'w-[8000px] h-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface DialogVariantsProps
  extends VariantProps<typeof contentVariants> {}

interface DialogBaseProps extends DialogVariantsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  onInteractOutside?: boolean;
  showCloseButton?: boolean;
}

export const DialogBase = ({
  open,
  onOpenChange,
  header,
  footer,
  children,
  className,
  contentClassName,
  onInteractOutside,
  showCloseButton,
  // Content variants
  variant,
}: DialogBaseProps) => {
  return (
    <Dialog open={open}>
      <DialogContent
        className={cn('w-auto min-w-[200px] max-w-[90vw]', className)}
        onInteractOutside={() => {
          onOpenChange(!onInteractOutside);
        }}
      >
        {showCloseButton && (
          <DialogClose
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        )}
        {header && (
          <DialogHeader>
            <DialogTitle asChild={typeof header !== 'string'}>
              {header}
            </DialogTitle>
            <VisuallyHidden.Root>
              <DialogDescription />
            </VisuallyHidden.Root>
          </DialogHeader>
        )}
        <div className={cn(contentVariants({ variant }), contentClassName)}>
          {children}
        </div>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};
