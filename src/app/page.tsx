import React from "react";
import { Navbar } from "@/components/sections/01-Navbar";
import { Hero } from "@/components/sections/02-Hero";
import { ResultsBoard } from "@/components/sections/03-ResultsBoard";
import { Courses } from "@/components/sections/04-Courses";
import { Method } from "@/components/sections/05-Method";
import { Faculty } from "@/components/sections/06-Faculty";
import { WeeklyAnalytics } from "@/components/sections/07-WeeklyAnalytics";
import { ScholarshipTest } from "@/components/sections/08-ScholarshipTest";
import { FeesTable } from "@/components/sections/09-FeesTable";
import { Testimonials } from "@/components/sections/10-Testimonials";
import { Faq } from "@/components/sections/11-Faq";
import { Footer } from "@/components/sections/12-Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink selection:bg-highlighter selection:text-ink">
      {/* 01. Navbar with Announcement & Countdown */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col">
        {/* 02. Hero with Headline, CTAs, Scorecard */}
        <Hero />

        {/* 03. Results Board with Varied Topper Tiles */}
        <ResultsBoard />

        {/* 04. Filterable Courses Rows (Not cards) */}
        <Courses />

        {/* 05. Teaching Method (4-Step Notebook Cycle) */}
        <Method />

        {/* 06. Core Faculty Horizontal Deck */}
        <Faculty />

        {/* 07. Weekly Analytics & Progress Diagnostic System */}
        <WeeklyAnalytics />

        {/* 08. Scholarship Aptitude Test & WhatsApp Registration */}
        <ScholarshipTest />

        {/* 09. Transparent Fees & EMI Installments Table */}
        <FeesTable />

        {/* 10. Parent & Student Voices (5 Handwritten Slips) */}
        <Testimonials />

        {/* 11. FAQ Accordion (7 Real Questions) */}
        <Faq />
      </main>

      {/* 12. Footer with Kanpur Campus Details & Big Punchline */}
      <Footer />
    </div>
  );
}
