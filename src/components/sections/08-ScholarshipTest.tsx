"use client";

import React, { useState } from "react";
import { siteContent, ScholarshipSlab } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MarginNote } from "@/components/ui/MarginNote";
import { buildWhatsAppUrl } from "@/lib/utils";
import { Calendar, Clock, MapPin, Award, CheckCircle2, ArrowRight } from "lucide-react";

export function ScholarshipTest() {
  const { scholarship, contact } = siteContent;

  const [studentName, setStudentName] = useState("");
  const [selectedClass, setSelectedClass] = useState(scholarship.formFields.classOptions[1]);
  const [schoolName, setSchoolName] = useState("");
  const [parentPhone, setParentPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Namaste Lakshya Academy Kanpur. I want to register my ward for the Sunday Scholarship Test (LSAT-2026).\n\n• Student Name: ${studentName || "Not provided"}\n• Class: ${selectedClass}\n• School: ${schoolName || "Not provided"}\n• Parent Phone: ${parentPhone || "Not provided"}\n\nPlease confirm test slot and admit card details.`;
    const url = buildWhatsAppUrl(contact.whatsappNumber, message);
    window.open(url, "_blank");
  };

  return (
    <section
      id="scholarship"
      className="relative w-full py-16 sm:py-24 border-b-2 border-ink bg-ink text-surface overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-surface bg-surface text-ink text-xs font-mono font-bold tracking-tight uppercase mb-3 shadow-paper-sm">
              <Award className="w-3.5 h-3.5 text-redpen" />
              <span>{scholarship.badge}</span>
            </div>
            <h2 className="font-heading font-extrabold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.12] tracking-tight text-surface">
              Earn Up to <span className="text-highlighter underline decoration-redpen decoration-4">100% Scholarship</span> on Merit.
            </h2>
          </div>

          <div className="md:max-w-sm text-surface/85 font-body text-sm sm:text-base">
            Kanpur ke kisi bhi mehanti bache ki padhai paise ki kami se nahi rukni chahiye. 90-minute offline aptitude test.
          </div>
        </div>

        {/* 2-Column Grid: Left Slabs & Logistics (7 cols) + Right Form (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Slabs Table & Venue Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Key Logistics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-[10px] bg-surface/10 border-2 border-surface/20 text-surface">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-highlighter shrink-0" />
                <div className="text-xs font-mono leading-tight">
                  <span className="text-surface/70 block">Date</span>
                  <span className="font-bold">{scholarship.testDateDisplay}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-highlighter shrink-0" />
                <div className="text-xs font-mono leading-tight">
                  <span className="text-surface/70 block">Reporting</span>
                  <span className="font-bold">{scholarship.testTimings}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-highlighter shrink-0" />
                <div className="text-xs font-mono leading-tight">
                  <span className="text-surface/70 block">Venue</span>
                  <span className="font-bold">Kakadeo Campus</span>
                </div>
              </div>
            </div>

            {/* Scholarship Slabs Matrix */}
            <div className="rounded-[10px] border-2 border-surface/20 bg-surface/5 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-surface/20 pb-3">
                <h4 className="font-heading font-extrabold text-lg text-surface">
                  Merit Scholarship Slabs
                </h4>
                <span className="text-xs font-mono text-highlighter font-bold">
                  Session 2026-27 Intake
                </span>
              </div>

              <div className="space-y-3">
                {scholarship.slabs.map((slab: ScholarshipSlab, idx: number) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-[8px] bg-surface/10 border border-surface/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-base text-surface">
                          {slab.rankRange}
                        </span>
                        <span className="text-xs font-mono text-surface/70">
                          ({slab.criteria})
                        </span>
                      </div>
                      <p className="text-xs font-body text-surface/80 mt-0.5">{slab.note}</p>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="inline-block bg-highlighter text-ink font-heading font-extrabold text-lg px-3 py-1 rounded-[6px] border border-ink">
                        {slab.discountPercentage}% OFF
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-[8px] bg-surface text-ink border-2 border-ink flex items-center justify-between">
              <span className="font-mono text-xs font-bold">
                Test Registration Fee: <span className="text-redpen">₹0 (Completely Free)</span>
              </span>
              <span className="font-mono text-xs text-muted">OMR sheet & question paper provided</span>
            </div>
          </div>

          {/* Right Column: Registration Form (5 cols) */}
          <div className="lg:col-span-5 rounded-[10px] border-2 border-surface bg-surface text-ink p-6 sm:p-8 shadow-paper-lg">
            <div className="border-b-2 border-ink pb-4 mb-6">
              <span className="text-[11px] font-mono text-muted uppercase font-bold block">
                DIRECT REGISTRATION
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-ink">
                Book Test Slot on WhatsApp
              </h3>
              <p className="text-xs font-body text-muted mt-1">
                Fill details below. Tapping submit opens your WhatsApp with prefilled admit card request.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-ink mb-1.5">
                  Student Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder={scholarship.formFields.studentNamePlaceholder}
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border-2 border-ink bg-bg font-body text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-ink mb-1.5">
                  Target Class / Batch *
                </label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border-2 border-ink bg-bg font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink cursor-pointer"
                >
                  {scholarship.formFields.classOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-ink mb-1.5">
                  School Name (Kanpur) *
                </label>
                <input
                  type="text"
                  required
                  placeholder={scholarship.formFields.schoolPlaceholder}
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border-2 border-ink bg-bg font-body text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-ink mb-1.5">
                  Parent WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder={scholarship.formFields.parentPhonePlaceholder}
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border-2 border-ink bg-bg font-body text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="lg" className="w-full group">
                  <span>Register via WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-center font-margin text-sm text-redpen pt-1">
                ✎ Free admit card instant WhatsApp confirmation
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
