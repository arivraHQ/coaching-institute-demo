"use client";

import React, { useState } from "react";
import { siteContent, CourseBatchItem } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MarginNote } from "@/components/ui/MarginNote";
import { buildWhatsAppUrl } from "@/lib/utils";
import { Clock, Calendar, Users, AlertCircle, ArrowUpRight, BookOpen } from "lucide-react";

export function Courses() {
  const { courses, contact } = siteContent;
  const [selectedClass, setSelectedClass] = useState<string>("All");
  const [selectedExam, setSelectedExam] = useState<string>("All");

  const classFilters = ["All", "Class 9", "Class 10", "Class 11", "Class 12", "Dropper"];
  const examFilters = ["All", "JEE Main & Adv", "NEET UG", "Foundation & Olympiads"];

  const filteredCourses = courses.filter((batch) => {
    const classMatch = selectedClass === "All" || batch.classGrade === selectedClass;
    const examMatch = selectedExam === "All" || batch.targetExam === selectedExam;
    return classMatch && examMatch;
  });

  return (
    <section
      id="courses"
      className="relative w-full py-16 sm:py-24 border-b-2 border-ink bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-ink bg-surface shadow-paper-sm text-xs font-mono font-bold tracking-tight text-ink uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5 text-ink" />
              <span>Offline Classroom Batches • 2026–27</span>
            </div>
            <h2 className="font-heading font-extrabold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.12] tracking-tight text-ink">
              Structured Batches. Strict 40-Seat Limit.
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <MarginNote color="redpen" rotate="-rotate-1">
              Seat limit cross nahi hoti. Yahan benches par double seating allow nahi hai.
            </MarginNote>
          </div>
        </div>

        {/* Filter Controls (Class + Exam) */}
        <div className="mb-8 p-4 sm:p-5 rounded-[10px] border-2 border-ink bg-surface shadow-paper-sm space-y-4">
          {/* Class Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-muted sm:w-24">
              Filter Class:
            </span>
            <div className="flex flex-wrap gap-2">
              {classFilters.map((cls) => (
                <button
                  key={cls}
                  type="button"
                  onClick={() => setSelectedClass(cls)}
                  className={`px-3 py-1.5 rounded-[6px] text-xs sm:text-sm font-heading font-bold border-2 border-ink transition-all cursor-pointer ${
                    selectedClass === cls
                      ? "bg-ink text-surface shadow-paper-sm"
                      : "bg-bg text-ink hover:bg-highlighter"
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          {/* Exam Target Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 border-t border-ink/10">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-muted sm:w-24">
              Filter Target:
            </span>
            <div className="flex flex-wrap gap-2">
              {examFilters.map((exm) => (
                <button
                  key={exm}
                  type="button"
                  onClick={() => setSelectedExam(exm)}
                  className={`px-3 py-1.5 rounded-[6px] text-xs sm:text-sm font-heading font-bold border-2 border-ink transition-all cursor-pointer ${
                    selectedExam === exm
                      ? "bg-redpen text-surface shadow-paper-sm"
                      : "bg-bg text-ink hover:bg-highlighter"
                  }`}
                >
                  {exm}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabular Batch Rows (NOT cards) */}
        <div className="space-y-4">
          {filteredCourses.length === 0 ? (
            <div className="p-8 text-center bg-surface border-2 border-ink rounded-[10px]">
              <p className="font-heading font-bold text-lg text-ink">
                No batches match this filter combination.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedClass("All");
                  setSelectedExam("All");
                }}
                className="mt-3 text-xs font-mono text-redpen underline font-bold"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredCourses.map((batch: CourseBatchItem) => {
              const seatsLeft = batch.batchSizeLimit - batch.seatsFilled;
              const enquireWhatsAppUrl = buildWhatsAppUrl(
                contact.whatsappNumber,
                `Hello Lakshya Academy, I want to enquire about batch seats and schedule for ${batch.name} (${batch.classGrade}, ${batch.targetExam}) at Kakadeo center.`
              );

              return (
                <div
                  key={batch.id}
                  className="rounded-[10px] border-2 border-ink bg-surface p-5 sm:p-6 shadow-paper transition-all hover:border-redpen group"
                >
                  {/* Top Meta Line: Exam Badge, Class, Seats */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink/20 pb-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-ink text-surface px-2.5 py-0.5 rounded-[4px] text-xs font-mono font-bold">
                        {batch.classGrade}
                      </span>
                      <span className="bg-highlighter text-ink px-2.5 py-0.5 rounded-[4px] text-xs font-mono font-bold border border-ink">
                        {batch.targetExam}
                      </span>
                      <span className="text-xs font-mono text-muted">{batch.duration}</span>
                    </div>

                    {/* Seat Scarcity Tag */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#EDECE5] border border-ink text-xs font-mono font-bold">
                      <Users className="w-3.5 h-3.5 text-ink" />
                      <span>
                        {batch.seatsFilled}/{batch.batchSizeLimit} Enrolled
                      </span>
                      {seatsLeft <= 5 && (
                        <span className="text-redpen font-extrabold flex items-center gap-0.5">
                          <AlertCircle className="w-3 h-3" />
                          Only {seatsLeft} left!
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Batch Body Grid (Name, Timings, Features, Fee, CTA) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Batch Name & Syllabus Highlights (5 cols) */}
                    <div className="lg:col-span-5">
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink group-hover:text-redpen transition-colors">
                        {batch.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {batch.features.map((feat, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-body text-ink/80 bg-bg px-2 py-0.5 rounded-[4px] border border-ink/30"
                          >
                            ✓ {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Schedule & Timing (3 cols) */}
                    <div className="lg:col-span-3 space-y-1.5 text-xs sm:text-sm font-mono text-ink">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-redpen shrink-0" />
                        <span>{batch.timings}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-ink shrink-0" />
                        <span className="text-muted">{batch.days}</span>
                      </div>
                      <div className="text-[11px] text-muted italic">
                        Mode: {batch.mode}
                      </div>
                    </div>

                    {/* Fee & Enquire Action (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-end justify-between gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-ink/20">
                      <div>
                        <div className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
                          {batch.feeAnnual}
                        </div>
                        <div className="text-[11px] font-mono text-muted">
                          {batch.installmentOption}
                        </div>
                      </div>

                      <a
                        href={enquireWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <Button variant="primary" size="md" className="w-full sm:w-auto">
                          <span>Enquire Batch</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
