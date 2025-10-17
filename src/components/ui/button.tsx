import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active shadow-sm hover:shadow-md transition-all duration-200",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive-hover shadow-sm hover:shadow-md transition-all duration-200",
        outline: "border-2 border-primary bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm hover:shadow-md transition-all duration-200",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active shadow-sm hover:shadow-md transition-all duration-200",
        ghost: "text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 border border-transparent hover:border-primary/20",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-hover transition-colors duration-200",
        hero: "bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 active:scale-95 transition-all duration-300 font-semibold shadow-card hover:shadow-elevated",
        "hero-outline": "border-2 border-primary bg-background/90 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm hover:shadow-glow transition-all duration-300 font-semibold",
        "brand-teal": "bg-brand-teal text-white hover:bg-brand-teal-light active:bg-brand-teal-dark shadow-sm hover:shadow-glow transition-all duration-200",
        "brand-cyan": "bg-brand-cyan text-white hover:bg-brand-cyan-light active:bg-brand-cyan-dark shadow-sm hover:shadow-glow transition-all duration-200",
        "gradient-accent": "bg-gradient-accent text-white hover:scale-105 active:scale-95 shadow-card hover:shadow-elevated transition-all duration-300 font-semibold",
        "brand-light": "bg-brand-light text-brand-dark hover:bg-brand-light-dim active:bg-brand-gray-light shadow-sm hover:shadow-md transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10 rounded-lg",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
