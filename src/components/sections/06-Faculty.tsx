"use client";

import React, { useRef } from "react";
import { siteContent, FacultyTeacher } from "@/content/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MarginNote } from "@/components/ui/MarginNote";
import { GraduationCap, ArrowRight, ArrowLeft, Star, Briefcase } from "lucide-react";

export function Faculty() {
  const { faculty } = siteContent;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="faculty"
      className="relative w-full py-16 sm:py-24 border-b-2 border-ink bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left/Right Scroll Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-ink bg-surface shadow-paper-sm text-xs font-mono font-bold tracking-tight text-ink uppercase mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-redpen" />
              <span>Permanent Core Faculty • No Guest Lecturers</span>
            </div>
            <h2 className="font-heading font-extrabold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.12] tracking-tight text-ink">
              Teachers Who Write on the Board Daily.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <MarginNote color="redpen" rotate="-rotate-1" className="hidden sm:inline-block text-base mr-2">
              Hamare faculties batch ke aakhri din tak sath padhaate hain.
            </MarginNote>
            <button
              type="button"
              onClick={() => scroll("left")}
              className="p-2.5 rounded-[8px] border-2 border-ink bg-surface hover:bg-highlighter text-ink shadow-paper-sm transition-all cursor-pointer"
              aria-label="Scroll faculty left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="p-2.5 rounded-[8px] border-2 border-ink bg-surface hover:bg-highlighter text-ink shadow-paper-sm transition-all cursor-pointer"
              aria-label="Scroll faculty right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Deck */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: "thin" }}
        >
          {faculty.map((teacher: FacultyTeacher) => (
            <div
              key={teacher.id}
              className="min-w-[320px] sm:min-w-[360px] md:min-w-[400px] max-w-[400px] shrink-0 snap-start rounded-[10px] border-2 border-ink bg-surface p-6 shadow-paper-lg flex flex-col justify-between"
            >
              <div>
                {/* Photo Placeholder Wireframe with Brief */}
                <div className="mb-5">
                  <ImagePlaceholder
                    aspectRatio="aspect-[4/3]"
                    stamp="CORE FACULTY PROFILE"
                    brief={teacher.imageBrief}
                    caption={`${teacher.name} (${teacher.subject})`}
                  />
                </div>

                {/* Subject & Experience Tag */}
                <div className="flex items-center justify-between border-b-2 border-ink/20 pb-3 mb-3">
                  <span className="bg-highlighter text-ink px-2.5 py-0.5 rounded-[4px] text-xs font-mono font-bold border border-ink">
                    {teacher.subject}
                  </span>
                  <span className="text-xs font-mono font-bold text-redpen flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    {teacher.experienceYears}+ Years Exp
                  </span>
                </div>

                {/* Name & Academic Credentials */}
                <h3 className="font-heading font-extrabold text-2xl text-ink">
                  {teacher.name}
                </h3>
                <div className="text-xs font-mono font-bold text-ink mt-1 flex items-center gap-1">
                  <span>🎓 {teacher.background}</span>
                </div>
                <div className="text-xs font-mono text-muted mt-0.5">
                  {teacher.formerInstitute}
                </div>

                {/* Philosophy Statement */}
                <p className="mt-4 pt-4 border-t border-dashed border-ink/30 font-body text-xs sm:text-sm text-ink/85 italic leading-relaxed">
                  &ldquo;{teacher.philosophy}&rdquo;
                </p>
              </div>

              {/* Specialty Chapters Tag */}
              <div className="mt-6 pt-3 border-t border-ink/20">
                <span className="text-[11px] font-mono text-muted uppercase font-bold block mb-1.5">
                  Key Command Areas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {teacher.specialtyChapters.map((chap, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono bg-bg text-ink px-2 py-0.5 rounded-[3px] border border-ink/30"
                    >
                      {chap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
