import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "highlighter" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-heading font-bold rounded-[10px] border-2 border-ink transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2";

    const variantStyles = {
      primary:
        "bg-ink text-surface shadow-paper hover:bg-highlighter hover:text-ink hover:border-ink hover:shadow-paper-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
      secondary:
        "bg-surface text-ink shadow-paper hover:bg-highlighter hover:shadow-paper-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
      highlighter:
        "bg-highlighter text-ink shadow-paper hover:bg-surface hover:shadow-paper-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
      outline:
        "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-surface active:translate-x-[1px] active:translate-y-[1px]",
    };

    const sizeStyles = {
      sm: "text-sm px-3.5 py-1.5 gap-1.5",
      md: "text-[15px] sm:text-[16px] px-5 py-2.5 gap-2",
      lg: "text-[16px] sm:text-[18px] px-6 py-3.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
