import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // TeaHub custom variants
        gold: "border border-gold/50 bg-transparent text-gold hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_30px_hsla(42,50%,57%,0.3)] duration-300",
        goldSolid: "bg-gold text-background border-none hover:bg-gold/90 hover:shadow-[0_0_30px_hsla(42,50%,57%,0.4)] hover:-translate-y-0.5 duration-300",
        hero: "border border-gold/60 bg-gold/10 text-gold hover:bg-gold/20 hover:border-gold hover:shadow-[0_0_40px_hsla(42,50%,57%,0.4)] duration-500 backdrop-blur-sm",
        heroSolid: "bg-gold text-background font-medium hover:bg-gold-light hover:shadow-[0_0_50px_hsla(42,50%,57%,0.5)] hover:-translate-y-1 duration-500",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#20BA5A] hover:shadow-[0_0_30px_hsla(142,70%,45%,0.4)] duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
