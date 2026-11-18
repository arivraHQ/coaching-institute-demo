"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RedPenCircleProps {
  children: React.ReactNode;
  className?: string;
  variant?: "circle" | "underline" | "tick";
}

export function RedPenCircle({ children, className, variant = "circle" }: RedPenCircleProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{children}</span>

      {variant === "circle" && (
        <svg
          className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none -z-0 overflow-visible"
          viewBox="0 0 120 50"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M 12,26 C 10,10 40,4 78,6 C 108,8 116,22 110,34 C 104,46 64,48 30,44 C 14,41 6,32 18,22 C 28,14 62,10 94,14"
            stroke="#E5383B"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
          />
        </svg>
      )}

      {variant === "underline" && (
        <svg
          className="absolute -bottom-2 inset-x-0 w-full h-3 pointer-events-none -z-0 overflow-visible"
          viewBox="0 0 100 12"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M 2,7 Q 35,11 65,6 T 98,8"
            stroke="#E5383B"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.25,
            }}
          />
        </svg>
      )}
    </span>
  );
}
