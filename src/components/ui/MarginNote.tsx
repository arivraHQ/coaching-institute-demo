import React from "react";
import { cn } from "@/lib/utils";

interface MarginNoteProps {
  children: React.ReactNode;
  className?: string;
  color?: "redpen" | "ink" | "muted";
  rotate?: string;
}

export function MarginNote({
  children,
  className,
  color = "redpen",
  rotate = "-rotate-2",
}: MarginNoteProps) {
  const colorMap = {
    redpen: "text-redpen",
    ink: "text-ink",
    muted: "text-muted",
  };

  return (
    <span
      className={cn(
        "font-margin text-lg sm:text-xl leading-snug tracking-wide inline-flex items-center gap-1 select-none",
        colorMap[color],
        rotate,
        className
      )}
    >
      <span className="text-sm opacity-80" aria-hidden="true">✎</span>
      <span>{children}</span>
    </span>
  );
}
