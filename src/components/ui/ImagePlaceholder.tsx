import React from "react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  aspectRatio?: string; // e.g. "aspect-[16/9]"
  caption?: string;
  brief: string;
  className?: string;
  stamp?: string;
}

export function ImagePlaceholder({
  aspectRatio = "aspect-auto sm:aspect-[16/9]",
  caption,
  brief,
  className,
  stamp = "LAKSHYA ARCHIVE PHOTO",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative rounded-[10px] border-2 border-ink bg-[#EDECE5] overflow-hidden flex flex-col justify-between p-4 group select-none shadow-paper min-h-[220px]",
        aspectRatio,
        className
      )}
      role="img"
      aria-label={caption || brief}
    >
      {/* Top bar with stamp */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono font-bold tracking-wider text-muted mb-3">
        <span className="inline-flex items-center gap-1.5 bg-surface px-2 py-0.5 rounded-[4px] border border-ink/40 text-[11px] text-ink uppercase">
          📷 {stamp}
        </span>
        <span className="text-[11px] opacity-75">35mm Candid</span>
      </div>

      {/* Middle photographic brief block */}
      <div className="relative z-10 my-auto p-3.5 rounded-[6px] bg-surface border border-dashed border-ink/50 shadow-paper-sm">
        <p className="text-[11px] font-mono text-muted uppercase tracking-wider mb-1 font-bold">
          [Photo Brief • Anti-Stock Mandate]
        </p>
        <p className="text-xs sm:text-[13px] font-body text-ink leading-relaxed italic">
          &ldquo;{brief}&rdquo;
        </p>
      </div>

      {/* Bottom label */}
      {caption && (
        <div className="relative z-10 mt-3 pt-2 border-t border-ink/20 text-xs font-heading font-bold text-ink">
          {caption}
        </div>
      )}
    </div>
  );
}
