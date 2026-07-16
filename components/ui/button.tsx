import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground hover:brightness-110 active:scale-[0.98]",
        secondary:
          "border border-border bg-surface text-foreground hover:bg-surface-hover active:scale-[0.98]",
        ghost: "text-foreground hover:bg-surface-hover active:scale-[0.98]",
        outline:
          "border border-accent/50 text-accent hover:bg-accent/10 active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClick, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      ripple.className =
        "absolute rounded-full bg-white/30 animate-ripple pointer-events-none";
      target.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
      onClick?.(e);
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={asChild ? onClick : handleClick}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
