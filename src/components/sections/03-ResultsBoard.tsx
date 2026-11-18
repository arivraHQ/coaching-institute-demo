"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { MarginNote } from "@/components/ui/MarginNote";
import { RedPenCircle } from "@/components/ui/RedPenCircle";
import { Trophy, Award, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResultsBoard() {
  const { results } = siteContent;

  return (
    <section
      id="results"
      className="relative w-full py-16 sm:py-24 border-b-2 border-ink bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-ink bg-surface shadow-paper-sm text-xs font-mono font-bold tracking-tight text-ink uppercase mb-4">
              <Trophy className="w-3.5 h-3.5 text-redpen" />
              <span>Proven Classroom Results</span>
            </div>
            <h2 className="font-heading font-extrabold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.12] tracking-tight text-ink">
              Rank poster khareed kar nahi,{" "}
              <RedPenCircle variant="underline">
                mehnat se aati hai.
              </RedPenCircle>
            </h2>
          </div>

          <div className="md:max-w-sm">
            <MarginNote color="redpen" rotate="-rotate-1" className="text-base sm:text-lg">
              Ye sabhi bache Kakadeo ke offline classroom me daily bench par baithe hain.
            </MarginNote>
          </div>
        </div>

        {/* Varied Non-Uniform Topper Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {/* Tile 1: Featured Large (AIR 142) - 7 cols */}
          <div
            className={cn(
              "lg:col-span-7 rounded-[10px] border-2 border-ink bg-surface p-6 sm:p-8 shadow-paper-lg transition-transform duration-200 hover:rotate-0",
              results[0].rotation
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-[4px] bg-highlighter border border-ink text-xs font-mono font-bold text-ink">
                  {results[0].exam}
                </span>
                <span className="text-xs font-mono text-muted">{results[0].batch}</span>
              </div>
              <span className="text-xs font-mono font-bold text-redpen bg-redpen/10 px-2 py-0.5 rounded-[4px]">
                {results[0].year} Topper
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
                {results[0].name}
              </h3>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-redpen tracking-tight">
                {results[0].rankOrScore}
              </div>
            </div>

            <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-mono font-bold text-ink bg-bg px-3 py-1 rounded-[6px] border border-ink">
              <Award className="w-4 h-4 text-redpen" />
              <span>{results[0].achievementBadge}</span>
            </div>

            {results[0].quote && (
              <p className="mt-4 pt-4 border-t border-dashed border-ink/30 font-body text-sm sm:text-base text-ink/80 italic leading-relaxed">
                &ldquo;{results[0].quote}&rdquo;
              </p>
            )}
          </div>

          {/* Tile 2: Medium (NEET 705/720) - 5 cols */}
          <div
            className={cn(
              "lg:col-span-5 rounded-[10px] border-2 border-ink bg-surface p-6 shadow-paper transition-transform duration-200 hover:rotate-0",
              results[1].rotation
            )}
          >
            <div className="flex items-center justify-between border-b-2 border-ink pb-3 mb-3">
              <span className="px-2 py-0.5 rounded-[4px] bg-redpen text-surface text-xs font-mono font-bold">
                {results[1].exam}
              </span>
              <span className="text-xs font-mono text-muted">{results[1].year}</span>
            </div>

            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
              {results[1].rankOrScore}
            </div>
            <h3 className="font-heading font-bold text-xl text-ink mt-1">{results[1].name}</h3>
            <div className="text-xs font-mono text-muted">{results[1].batch}</div>

            <div className="mt-3 text-xs font-bold font-mono text-redpen">
              ★ {results[1].achievementBadge}
            </div>

            {results[1].quote && (
              <p className="mt-3 pt-3 border-t border-dashed border-ink/30 font-body text-xs sm:text-sm text-ink/80 italic">
                &ldquo;{results[1].quote}&rdquo;
              </p>
            )}
          </div>

          {/* Tile 3: Compact (Utkarsh 99.88 %ile) - 4 cols */}
          <div
            className={cn(
              "lg:col-span-4 rounded-[10px] border-2 border-ink bg-[#FAF9F5] p-5 shadow-paper-sm transition-transform duration-200 hover:rotate-0",
              results[2].rotation
            )}
          >
            <div className="text-[11px] font-mono text-muted uppercase">{results[2].exam}</div>
            <div className="font-heading font-extrabold text-3xl text-ink mt-1">
              {results[2].rankOrScore}
            </div>
            <div className="font-heading font-bold text-lg text-ink mt-0.5">{results[2].name}</div>
            <div className="text-xs font-mono text-redpen mt-1 font-bold">
              {results[2].achievementBadge}
            </div>
          </div>

          {/* Tile 4: Compact Foundation (Rhea 98.4%) - 4 cols */}
          <div
            className={cn(
              "lg:col-span-4 rounded-[10px] border-2 border-ink bg-surface p-5 shadow-paper-sm transition-transform duration-200 hover:rotate-0",
              results[3].rotation
            )}
          >
            <div className="flex items-center justify-between text-[11px] font-mono text-muted uppercase">
              <span>{results[3].exam}</span>
              <span className="font-bold text-redpen">Class 10</span>
            </div>
            <div className="font-heading font-extrabold text-3xl text-redpen mt-1">
              {results[3].rankOrScore}
            </div>
            <div className="font-heading font-bold text-lg text-ink mt-0.5">{results[3].name}</div>
            <div className="text-xs font-mono text-muted mt-1">{results[3].achievementBadge}</div>
            {results[3].quote && (
              <p className="mt-2 text-xs italic text-ink/80">&ldquo;{results[3].quote}&rdquo;</p>
            )}
          </div>

          {/* Tile 5 & 6 Stacked - 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div
              className={cn(
                "rounded-[10px] border-2 border-ink bg-surface p-4 shadow-paper-sm transition-transform duration-200",
                results[4].rotation
              )}
            >
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span>{results[4].exam}</span>
                <span className="font-bold text-ink">{results[4].rankOrScore}</span>
              </div>
              <div className="font-heading font-bold text-base text-ink mt-1">
                {results[4].name}
              </div>
              <div className="text-[11px] font-mono text-redpen font-bold">
                {results[4].achievementBadge}
              </div>
            </div>

            <div
              className={cn(
                "rounded-[10px] border-2 border-ink bg-highlighter/30 p-4 shadow-paper-sm transition-transform duration-200",
                results[5].rotation
              )}
            >
              <div className="flex items-center justify-between text-xs font-mono text-ink">
                <span className="font-bold">{results[5].exam}</span>
                <span className="font-extrabold text-redpen">{results[5].rankOrScore}</span>
              </div>
              <div className="font-heading font-bold text-base text-ink mt-1">
                {results[5].name}
              </div>
              <div className="text-[11px] font-mono text-ink font-bold">
                {results[5].achievementBadge}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-4 rounded-[10px] border-2 border-ink bg-surface flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-mono font-bold text-ink">
            <Sparkles className="w-4 h-4 text-redpen" />
            <span>Complete verified roll number ledger available at Kakadeo reception desk.</span>
          </div>
          <a
            href="#courses"
            className="text-xs font-heading font-extrabold text-ink hover:text-redpen underline uppercase tracking-wider"
          >
            Explore 2026 Batches →
          </a>
        </div>
      </div>
    </section>
  );
}
