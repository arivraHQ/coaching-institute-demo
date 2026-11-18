"use client";

import React, { useState, useEffect } from "react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Highlighter } from "@/components/ui/Highlighter";
import { RedPenCircle } from "@/components/ui/RedPenCircle";
import { MarginNote } from "@/components/ui/MarginNote";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { buildWhatsAppUrl } from "@/lib/utils";
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const { hero, contact } = siteContent;
  const prefersReduced = useReducedMotion();

  // Animated counter simulation for 94% and 38
  const [metric94, setMetric94] = useState(prefersReduced ? 94 : 0);
  const [metric38, setMetric38] = useState(prefersReduced ? 38 : 0);

  useEffect(() => {
    if (prefersReduced) return;
    const duration = 1200;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setMetric94(Math.min(94, Math.round(ease * 94)));
      setMetric38(Math.min(38, Math.round(ease * 38)));

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [prefersReduced]);

  const demoWhatsAppUrl = buildWhatsAppUrl(
    contact.whatsappNumber,
    hero.primaryCta.whatsappMessage
  );

  return (
    <section id="demo" className="relative w-full pt-8 pb-16 sm:pt-14 sm:pb-24 border-b-2 border-ink overflow-hidden">
      {/* Background notebook margin line on left (desktop) */}
      <div
        className="hidden xl:block absolute left-12 top-0 bottom-0 w-[2px] bg-redpen/20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Notebook Margin Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-ink bg-surface shadow-paper-sm text-xs sm:text-[13px] font-mono font-bold tracking-tight text-ink">
            <span className="w-2.5 h-2.5 rounded-full bg-redpen animate-pulse" />
            <span>{hero.badge}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-muted">
            <MapPin className="w-3.5 h-3.5 text-redpen" />
            <span>Kakadeo Coaching Belt, Kanpur (Opp. Geeta Nagar)</span>
          </div>
        </div>

        {/* Main 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Headline, Subheadline, CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
            {/* The signature 84px desktop / 44px mobile Headline */}
            <h1 className="font-heading font-extrabold text-[44px] leading-[1.06] tracking-tight sm:text-[64px] lg:text-[80px] xl:text-[84px] text-ink">
              <span>{hero.headlinePrefix}</span>{" "}
              <Highlighter delay={0.25}>{hero.headlineHighlight}</Highlighter>{" "}
              <span>{hero.headlineSuffix}</span>
            </h1>

            {/* Subheadline (17px Body, Public Sans, English-Hindi mix) */}
            <p className="font-body text-[17px] sm:text-[19px] leading-[1.6] text-ink/85 max-w-2xl font-normal">
              {hero.subheadline}
            </p>

            {/* CTAs & Margin Note */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={demoWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                  <span>{hero.primaryCta.label}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <a href={hero.secondaryCta.anchorTarget} className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <span>{hero.secondaryCta.label}</span>
                </Button>
              </a>
            </div>

            {/* Teacher marginalia note */}
            <div className="flex items-center gap-3 pt-1">
              <MarginNote color="redpen" rotate="-rotate-1">
                Pehla class free hai • Koi hidden registration fee nahi
              </MarginNote>
              <div className="h-4 w-[1px] bg-ink/20 hidden sm:block" />
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-ink" />
                Kakadeo Verified Center
              </span>
            </div>

            {/* Visual Classroom Proof Block */}
            <div className="pt-4 max-w-xl">
              {/*
                IMAGE BRIEF:
                Subject: Candid Indian classroom in Kakadeo, Kanpur.
                Scene: Senior Physics educator at the chalkboard drawing a free-body vector diagram; students taking handwritten notes in spiral registers.
                Lighting: Warm natural morning daylight pouring from large windows.
                Atmosphere: Deep concentration, authentic, non-corporate, zero thumbs-up stock smiles.
              */}
              <ImagePlaceholder
                aspectRatio="aspect-[16/9]"
                stamp="CAMPUS REALITY • KAKADEO"
                brief="Senior IIT alumnus faculty solving a 3-block friction problem on blackboard. 38 focused students writing in registers, natural classroom daylight."
                caption="Batch PCM-11 in session (Kakadeo Hall 2, morning batch)"
              />
            </div>
          </div>

          {/* Right Column: Report-Card-Style Stats Block (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* The Report Card Scorecard Container */}
            <div className="relative rounded-[10px] border-2 border-ink bg-surface p-6 sm:p-8 shadow-paper-lg rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Paper Clip / Stamp Top Header */}
              <div className="flex items-center justify-between border-b-2 border-ink pb-4 mb-6">
                <div>
                  <div className="text-[11px] font-mono tracking-widest text-muted uppercase font-bold">
                    OFFICIAL EVALUATION
                  </div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-ink tracking-tight">
                    {hero.statsBlock.title}
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded-[4px] bg-[#EDECE5] border border-ink text-[11px] font-mono font-bold text-ink uppercase">
                  {hero.statsBlock.termBadge}
                </div>
              </div>

              {/* 3 Metrics Styled as Graded Scorecard Entries */}
              <div className="space-y-6">
                {/* Metric 1 */}
                <div className="p-4 rounded-[8px] bg-bg border-2 border-ink/80 relative">
                  <div className="flex items-baseline justify-between">
                    <div className="font-heading font-extrabold text-4xl sm:text-5xl text-ink tracking-tight">
                      <span>{metric94}</span>
                      <span className="text-redpen">{hero.statsBlock.metrics[0].suffix}</span>
                    </div>
                    <span className="font-margin text-lg text-redpen font-bold">
                      {hero.statsBlock.metrics[0].teacherMark}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-ink mt-1">
                    {hero.statsBlock.metrics[0].label}
                  </h4>
                  <p className="font-body text-xs sm:text-[13px] text-muted mt-0.5 leading-snug">
                    {hero.statsBlock.metrics[0].subtext}
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-[8px] bg-bg border-2 border-ink/80 relative">
                  <div className="flex items-baseline justify-between">
                    <div className="font-heading font-extrabold text-4xl sm:text-5xl text-ink tracking-tight">
                      <RedPenCircle variant="circle">
                        <span>{metric38}</span>
                      </RedPenCircle>
                      <span className="text-xs font-mono ml-2 uppercase text-muted font-bold">
                        Students
                      </span>
                    </div>
                    <span className="font-margin text-base text-ink font-bold">
                      {hero.statsBlock.metrics[1].teacherMark}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-ink mt-2">
                    {hero.statsBlock.metrics[1].label}
                  </h4>
                  <p className="font-body text-xs sm:text-[13px] text-muted mt-0.5 leading-snug">
                    {hero.statsBlock.metrics[1].subtext}
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="p-4 rounded-[8px] bg-bg border-2 border-ink/80 relative">
                  <div className="flex items-baseline justify-between">
                    <div className="font-heading font-extrabold text-4xl sm:text-5xl text-ink tracking-tight">
                      <span>40</span>
                      <span className="text-xl sm:text-2xl font-mono text-muted font-bold">
                        {" "}
                        max
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-ink bg-highlighter px-2 py-0.5 rounded-[4px] border border-ink">
                      Strict Cap
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-ink mt-1">
                    {hero.statsBlock.metrics[2].label}
                  </h4>
                  <p className="font-body text-xs sm:text-[13px] text-muted mt-0.5 leading-snug">
                    {hero.statsBlock.metrics[2].subtext}
                  </p>
                </div>
              </div>

              {/* Bottom Teacher Margin Signature */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-ink/30 flex items-center justify-between">
                <MarginNote color="redpen" rotate="-rotate-1" className="text-base sm:text-lg">
                  {hero.statsBlock.teacherMarginNote}
                </MarginNote>
                <div className="text-[11px] font-mono text-muted">Signed: Dir. Academics</div>
              </div>
            </div>

            {/* Quick Batch Diagnostic Callout */}
            <div className="rounded-[10px] border-2 border-ink bg-highlighter p-4 shadow-paper-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-ink leading-relaxed">
                  <span className="font-heading font-extrabold block text-sm">
                    Kakadeo Offline Classroom Batch Rule:
                  </span>
                  No admission without 1-on-1 parent counseling and student diagnostic test.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
