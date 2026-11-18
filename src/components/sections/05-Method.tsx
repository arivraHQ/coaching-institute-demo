"use client";

import React from "react";
import { siteContent, TeachingStep } from "@/content/site";
import { MarginNote } from "@/components/ui/MarginNote";
import { RedPenCircle } from "@/components/ui/RedPenCircle";
import { Highlighter } from "@/components/ui/Highlighter";
import { Bookmark, CheckCircle2 } from "lucide-react";

export function Method() {
  const { teachingMethod } = siteContent;

  return (
    <section
      id="method"
      className="relative w-full py-16 sm:py-24 border-b-2 border-ink bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-ink bg-surface shadow-paper-sm text-xs font-mono font-bold tracking-tight text-ink uppercase mb-3">
              <Bookmark className="w-3.5 h-3.5 text-redpen" />
              <span>Teaching Methodology • 4-Step Academic Cycle</span>
            </div>
            <h2 className="font-heading font-extrabold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.12] tracking-tight text-ink">
              How We Teach:{" "}
              <Highlighter delay={0.2}>Notebook Method</Highlighter>
            </h2>
          </div>

          <div className="md:max-w-sm">
            <MarginNote color="redpen" rotate="-rotate-1">
              Shortcuts exam me bhool jaate hain. Derivations aur error diary hamesha yaad rehte hain.
            </MarginNote>
          </div>
        </div>

        {/* 4 Notebook Page Cards Grid (2x2 Asymmetric Stagger) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {teachingMethod.map((step: TeachingStep, index: number) => {
            const rotations = ["-rotate-1", "rotate-1", "rotate-0", "-rotate-1"];
            const currentRotation = rotations[index % rotations.length];

            return (
              <div
                key={step.number}
                className={`relative rounded-[10px] border-2 border-ink bg-surface p-6 sm:p-8 shadow-paper-lg transition-transform duration-200 hover:rotate-0 flex flex-col justify-between ${currentRotation}`}
              >
                {/* Notebook Page Header with page line and red stamp */}
                <div className="flex items-center justify-between border-b-2 border-ink pb-3 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-ink text-surface flex items-center justify-center font-heading font-extrabold text-sm border border-ink">
                      {step.number}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-muted uppercase font-bold block">
                        STAGE {step.number}
                      </span>
                      <span className="text-xs font-mono font-bold text-redpen">
                        [{step.hindiLabel}]
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-muted bg-bg px-2 py-0.5 rounded-[4px] border border-ink/30">
                    {step.pageLineNumber}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
                      {step.title}
                    </h3>
                    <p className="font-heading font-bold text-sm sm:text-base text-redpen mt-1">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="font-body text-sm sm:text-[15px] leading-relaxed text-ink/85">
                    {step.description}
                  </p>

                  {/* Bullet deliverables */}
                  <div className="space-y-2 pt-2">
                    {step.keyPoints.map((point: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] font-body text-ink">
                        <CheckCircle2 className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hand-written Teacher Note at Bottom Margin */}
                <div className="mt-6 pt-4 border-t-2 border-dashed border-ink/30">
                  <div className="flex items-start gap-2 bg-[#FFFDEB] p-3 rounded-[6px] border border-ink/40">
                    <MarginNote color="redpen" rotate="-rotate-1" className="text-sm sm:text-base leading-snug">
                      {step.teacherMarginNote}
                    </MarginNote>
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
