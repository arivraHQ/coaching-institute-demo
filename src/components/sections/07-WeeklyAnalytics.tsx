"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { MarginNote } from "@/components/ui/MarginNote";
import { RedPenCircle } from "@/components/ui/RedPenCircle";
import { BarChart3, TrendingUp, Bell, Smartphone, CheckSquare } from "lucide-react";

export function WeeklyAnalytics() {
  const { analytics } = siteContent;

  // SVG dimensions for Score Trend
  // Weeks: W1: 142, W3: 168, W5: 185, W7: 215, W9: 242 (max 300)
  // Batch Avg: W1: 120, W3: 135, W5: 142, W7: 154, W9: 162
  const svgWidth = 500;
  const svgHeight = 220;
  const paddingX = 40;
  const paddingY = 30;

  // Map values to coordinates
  const pointsStudent = [
    { x: paddingX + 0 * 105, y: svgHeight - paddingY - (142 / 300) * 160 },
    { x: paddingX + 1 * 105, y: svgHeight - paddingY - (168 / 300) * 160 },
    { x: paddingX + 2 * 105, y: svgHeight - paddingY - (185 / 300) * 160 },
    { x: paddingX + 3 * 105, y: svgHeight - paddingY - (215 / 300) * 160 },
    { x: paddingX + 4 * 105, y: svgHeight - paddingY - (242 / 300) * 160 },
  ];

  const pointsAvg = [
    { x: paddingX + 0 * 105, y: svgHeight - paddingY - (120 / 300) * 160 },
    { x: paddingX + 1 * 105, y: svgHeight - paddingY - (135 / 300) * 160 },
    { x: paddingX + 2 * 105, y: svgHeight - paddingY - (142 / 300) * 160 },
    { x: paddingX + 3 * 105, y: svgHeight - paddingY - (154 / 300) * 160 },
    { x: paddingX + 4 * 105, y: svgHeight - paddingY - (162 / 300) * 160 },
  ];

  const pathDStudent = `M ${pointsStudent.map((p) => `${p.x},${p.y}`).join(" L ")}`;
  const pathDAvg = `M ${pointsAvg.map((p) => `${p.x},${p.y}`).join(" L ")}`;

  return (
    <section
      id="analytics"
      className="relative w-full py-16 sm:py-24 border-b-2 border-ink bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-ink bg-surface shadow-paper-sm text-xs font-mono font-bold tracking-tight text-ink uppercase mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-redpen" />
              <span>Diagnostic System • Transparent Parent Portal</span>
            </div>
            <h2 className="font-heading font-extrabold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.12] tracking-tight text-ink">
              Weekly Test & Progress Analytics.
            </h2>
          </div>

          <div className="md:max-w-sm">
            <MarginNote color="redpen" rotate="-rotate-1">
              Sunday test ka result Sunday shaam ko hi parents ke phone par. No delays.
            </MarginNote>
          </div>
        </div>

        {/* Dashboard Grid: Left Dashboard (7 cols) + Right Parent Benefits (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Mock Analytics Terminal (7 cols) */}
          <div className="lg:col-span-7 rounded-[10px] border-2 border-ink bg-surface p-6 sm:p-8 shadow-paper-lg space-y-8">
            {/* Sample Student Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-4">
              <div>
                <span className="text-[11px] font-mono text-muted uppercase font-bold block">
                  LIVE STUDENT REPORT PREVIEW
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink">
                  {analytics.studentNameSample}
                </h3>
              </div>
              <div className="text-right">
                <span className="inline-block bg-highlighter text-ink font-mono text-xs font-bold px-2.5 py-0.5 rounded-[4px] border border-ink">
                  {analytics.examTargetSample}
                </span>
                <div className="text-[11px] font-mono text-muted mt-1">Roll No: 2026-PCM-019</div>
              </div>
            </div>

            {/* 1. Score Progression SVG Chart */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-heading font-bold text-base text-ink flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-redpen" />
                  Sunday Mock Score Progression (Out of 300)
                </h4>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-ink font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-ink" /> Aryan&apos;s Score
                  </span>
                  <span className="flex items-center gap-1.5 text-muted">
                    <span className="w-2.5 h-2.5 rounded-full bg-muted/50" /> Batch Avg
                  </span>
                </div>
              </div>

              {/* Vector SVG Chart Canvas */}
              <div className="w-full overflow-x-auto bg-bg rounded-[8px] border-2 border-ink/40 p-2">
                <svg
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                  className="w-full min-w-[420px] h-auto overflow-visible select-none"
                >
                  {/* Horizontal grid lines */}
                  {[0, 100, 200, 300].map((val) => {
                    const y = svgHeight - paddingY - (val / 300) * 160;
                    return (
                      <g key={val}>
                        <line
                          x1={paddingX}
                          y1={y}
                          x2={svgWidth - 20}
                          y2={y}
                          stroke="#101820"
                          strokeOpacity="0.1"
                          strokeDasharray="4 4"
                        />
                        <text
                          x={paddingX - 8}
                          y={y + 4}
                          textAnchor="end"
                          fontSize="10"
                          fill="#6B7280"
                          fontFamily="monospace"
                        >
                          {val}
                        </text>
                      </g>
                    );
                  })}

                  {/* Batch Average Line */}
                  <path
                    d={pathDAvg}
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* Student Score Line (Solid Ink) */}
                  <path
                    d={pathDStudent}
                    fill="none"
                    stroke="#101820"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data Points with Scores */}
                  {pointsStudent.map((p, i) => (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r="5" fill="#FFE14D" stroke="#101820" strokeWidth="2.5" />
                      <text
                        x={p.x}
                        y={p.y - 10}
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight="bold"
                        fill="#101820"
                        fontFamily="monospace"
                      >
                        {analytics.testWeeks[i].score}
                      </text>
                      <text
                        x={p.x}
                        y={svgHeight - 10}
                        textAnchor="middle"
                        fontSize="11"
                        fill="#101820"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {analytics.testWeeks[i].week}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* 2. Chapter-wise Strength Bars */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-heading font-bold text-base text-ink">
                  Chapter-Wise Concept Mastery Log
                </h4>
                <span className="text-[11px] font-mono text-muted">Weekly OMR Audit</span>
              </div>

              <div className="space-y-3">
                {analytics.chapterStrengths.map((ch, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-ink truncate max-w-[240px] sm:max-w-none">
                        [{ch.subject}] {ch.chapter}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`px-1.5 py-0.5 rounded-[3px] text-[10px] font-bold ${
                            ch.status === "Mastered"
                              ? "bg-green-100 text-green-900 border border-green-700/30"
                              : ch.status === "Re-test Due"
                              ? "bg-red-100 text-redpen border border-redpen/30"
                              : "bg-yellow-100 text-yellow-900 border border-yellow-700/30"
                          }`}
                        >
                          {ch.status}
                        </span>
                        <span className="font-extrabold text-ink w-8 text-right">
                          {ch.mastery}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-2.5 rounded-full bg-bg border border-ink/40 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          ch.mastery >= 85
                            ? "bg-ink"
                            : ch.mastery >= 70
                            ? "bg-highlighter border-r border-ink"
                            : "bg-redpen"
                        }`}
                        style={{ width: `${ch.mastery}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: How Parents Stay Informed (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[10px] border-2 border-ink bg-surface p-6 sm:p-8 shadow-paper-lg space-y-6">
              <div className="border-b-2 border-ink pb-4">
                <span className="text-[11px] font-mono text-muted uppercase font-bold block">
                  PARENT TRANSPARENCY COMMITMENT
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-ink">
                  No Surprises on Exam Day.
                </h3>
                <p className="font-body text-xs sm:text-sm text-ink/80 mt-1">
                  We don&apos;t wait for parent-teacher meetings once in 6 months. Weekly diagnostics mean weak chapters get fixed the very next week.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="space-y-4">
                {analytics.parentAppHighlights.map((feat, i) => (
                  <div key={i} className="p-4 rounded-[8px] bg-bg border-2 border-ink/50 space-y-1">
                    <h5 className="font-heading font-bold text-sm sm:text-base text-ink flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-ink text-surface flex items-center justify-center text-xs font-mono font-bold">
                        {i + 1}
                      </span>
                      {feat.title}
                    </h5>
                    <p className="font-body text-xs sm:text-[13px] text-muted leading-relaxed pl-7">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Red Pen Callout */}
              <div className="pt-2">
                <MarginNote color="redpen" rotate="-rotate-1" className="text-sm sm:text-base leading-snug">
                  ✎ Rotational Dynamics me marks kam aaye? Tuesday ko teacher ke sath mandatory 1-on-1 revision slot book hota hai.
                </MarginNote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
