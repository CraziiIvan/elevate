import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center border-content justify-center rounded-full ring-offset-gray-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ease-out duration-200 transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-gray-12 text-gray-1 text-base font-medium shadow-sm shadow-gray-12/15 hover:text-gray-1 hover:bg-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: " border border-gray-3 bg-gray-2 text-gray-12 hover:bg-gray-3",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-9 px-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
