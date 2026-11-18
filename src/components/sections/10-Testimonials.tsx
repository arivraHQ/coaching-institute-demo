"use client";

import React from "react";
import { siteContent, TestimonialVoice } from "@/content/site";
import { MarginNote } from "@/components/ui/MarginNote";
import { RedPenCircle } from "@/components/ui/RedPenCircle";
import { MessageSquareQuote, CheckCheck, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section
      id="testimonials"
      className="relative w-full py-16 sm:py-24 border-b-2 border-ink bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-ink bg-surface shadow-paper-sm text-xs font-mono font-bold tracking-tight text-ink uppercase mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5 text-redpen" />
              <span>Real Experiences • Verified Kanpur Admissions</span>
            </div>
            <h2 className="font-heading font-extrabold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.12] tracking-tight text-ink">
              Parent & Student{" "}
              <RedPenCircle variant="underline">
                Voices
              </RedPenCircle>
            </h2>
          </div>

          <div className="md:max-w-sm">
            <MarginNote color="redpen" rotate="-rotate-1">
              Bina PR agency ke, asli Kanpur ke parents aur students ke handwritten notes.
            </MarginNote>
          </div>
        </div>

        {/* 5 Handwritten-Style Paper Slips (Asymmetric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {testimonials.map((t: TestimonialVoice, idx: number) => {
            const isFeatured = idx === 0;

            return (
              <div
                key={t.id}
                className={cn(
                  "relative rounded-[10px] border-2 border-ink bg-surface p-6 shadow-paper transition-transform duration-200 hover:rotate-0 flex flex-col justify-between",
                  t.tilt,
                  isFeatured ? "md:col-span-2 lg:col-span-2 bg-[#FFFDF5]" : "col-span-1"
                )}
              >
                {/* Top Badge: Role + Date Stamp */}
                <div className="flex items-center justify-between border-b-2 border-ink pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded-[4px] text-xs font-mono font-bold ${
                        t.authorRole === "Parent"
                          ? "bg-redpen text-surface"
                          : "bg-ink text-surface"
                      }`}
                    >
                      {t.authorRole === "Parent" ? "👨‍👩‍👦 Parent Voice" : "🎓 Student Voice"}
                    </span>
                    <span className="text-[11px] font-mono text-muted">{t.dateStamp}</span>
                  </div>

                  <span className="text-[11px] font-mono text-muted flex items-center gap-1">
                    <CheckCheck className="w-3.5 h-3.5 text-green-700" />
                    Verified
                  </span>
                </div>

                {/* Body Quote */}
                <div className="space-y-4">
                  <p
                    className={cn(
                      "font-body leading-relaxed text-ink/90 italic",
                      isFeatured ? "text-base sm:text-[17px]" : "text-xs sm:text-sm"
                    )}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info & Handwritten Note Stamp */}
                <div className="mt-6 pt-4 border-t border-dashed border-ink/30 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-ink">
                      {t.authorName}
                    </h4>
                    <p className="font-body text-xs text-redpen font-semibold">
                      {t.studentBatch}
                    </p>
                    <p className="font-mono text-[11px] text-muted">
                      {t.schoolOrCollege}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span className="font-margin text-sm sm:text-base text-ink font-bold block bg-[#EDECE5] px-2 py-0.5 rounded-[4px] border border-ink/40">
                      ✎ {t.handwrittenNote}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
