"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Clock } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 22, seconds: 40 });

  // Live countdown calculation
  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(siteContent.announcement.eventDate).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const demoWhatsAppUrl = buildWhatsAppUrl(
    siteContent.contact.whatsappNumber,
    siteContent.hero.primaryCta.whatsappMessage
  );

  const testWhatsAppUrl = buildWhatsAppUrl(
    siteContent.contact.whatsappNumber,
    siteContent.announcement.whatsappMessage
  );

  const navLinks = [
    { label: "Results", href: "#results" },
    { label: "Courses", href: "#courses" },
    { label: "Method", href: "#method" },
    { label: "Faculty", href: "#faculty" },
    { label: "Analytics", href: "#analytics" },
    { label: "Fees & EMI", href: "#fees" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-bg/95 backdrop-blur-none transition-all">
      {/* 1. Slim Announcement Bar */}
      <div className="w-full bg-[#101820] text-surface border-b-2 border-ink py-1.5 px-3 text-xs sm:text-[13px]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono">
            <span className="bg-highlighter text-ink font-bold px-1.5 py-0.5 rounded-[3px] text-[10px] tracking-wider uppercase">
              {siteContent.announcement.tag}
            </span>
            <span className="font-medium hidden sm:inline text-surface/90">
              {siteContent.announcement.text}:
            </span>
            <span className="font-bold text-highlighter">
              {siteContent.announcement.highlightText}
            </span>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3 font-mono text-[11px] sm:text-xs">
            <div className="flex items-center gap-1 text-surface/80 bg-surface/10 px-2 py-0.5 rounded-[4px]">
              <Clock className="w-3 h-3 text-highlighter" />
              <span>
                {timeLeft.days}d : {String(timeLeft.hours).padStart(2, "0")}h :{" "}
                {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
                {String(timeLeft.seconds).padStart(2, "0")}s
              </span>
            </div>
            <a
              href={testWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-highlighter hover:underline font-bold text-xs"
            >
              <span>Register</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full border-b-2 border-ink bg-surface shadow-paper-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          {/* Brand Wordmark Left */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] bg-ink text-surface flex items-center justify-center font-heading font-extrabold text-xl group-hover:bg-highlighter group-hover:text-ink transition-colors border-2 border-ink shadow-paper-sm">
              L
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-ink leading-tight">
                LAKSHYA <span className="text-redpen">ACADEMY</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-muted uppercase">
                Kakadeo • Kanpur
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-heading font-semibold text-ink">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-redpen hover:underline underline-offset-4 decoration-2 decoration-highlighter transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a href={demoWhatsAppUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                Book Free Demo
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[6px] border-2 border-ink bg-surface text-ink hover:bg-highlighter transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b-2 border-ink bg-surface p-5 space-y-4 shadow-paper">
          <nav className="flex flex-col gap-3 font-heading font-bold text-base">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-ink/10 hover:text-redpen hover:pl-1 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={demoWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="primary" size="lg" className="w-full">
                Book Free Demo Class
              </Button>
            </a>
            <p className="text-center font-margin text-sm text-redpen">
              ✎ Pehla class free hai • Kakadeo offline centre
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
