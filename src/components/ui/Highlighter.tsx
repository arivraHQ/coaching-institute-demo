"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlighterProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Highlighter({ children, className, delay = 0.2 }: HighlighterProps) {
  return (
    <span className={cn("relative inline-block px-2 isolate whitespace-nowrap", className)}>
      {/* Background yellow marker swipe */}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ originX: 0 }}
        className="absolute inset-x-0 bottom-1 sm:bottom-2 h-[65%] bg-highlighter -rotate-1 rounded-[3px] z-0 pointer-events-none opacity-95"
        aria-hidden="true"
      />
      <span className="relative z-10 text-ink">{children}</span>
    </span>
  );
}
