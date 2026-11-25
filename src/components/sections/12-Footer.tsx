"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Highlighter } from "@/components/ui/Highlighter";
import { RedPenCircle } from "@/components/ui/RedPenCircle";
import { MarginNote } from "@/components/ui/MarginNote";
import { buildWhatsAppUrl } from "@/lib/utils";
import { MapPin, Phone, MessageSquare, Clock, Mail, Navigation, ArrowUpRight } from "lucide-react";

export function Footer() {
  const { contact, footer } = siteContent;

  const demoWhatsAppUrl = buildWhatsAppUrl(
    contact.whatsappNumber,
    "Namaste Lakshya Academy. I would like to visit the Kakadeo campus and book a free demo class for Class [Enter Class]."
  );

  return (
    <footer className="relative w-full bg-[#101820] text-surface border-t-2 border-ink pt-16 sm:pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Big Punchline Header: "Pehla class free hai." */}
        <div className="rounded-[10px] border-2 border-surface bg-surface text-ink p-8 sm:p-12 shadow-paper-lg text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-ink bg-highlighter text-xs font-mono font-bold tracking-tight text-ink uppercase">
            <span>Kakadeo Open Invitation</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
            &ldquo;
            <RedPenCircle variant="underline">
              Pehla class free hai.
            </RedPenCircle>
            &rdquo;
          </h2>

          <p className="font-body text-base sm:text-lg text-ink/85 max-w-2xl mx-auto leading-relaxed">
            Kakadeo campus aayiye, Alok Sir aur core faculty ka padhane ka standard dekhiye. Khud bench par baithiye, phir decide kijiye.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href={demoWhatsAppUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                <span>Book Free Demo on WhatsApp</span>
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </a>

            <a href={`tel:${contact.phoneRaw}`}>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-1 text-redpen" />
                <span>Call {contact.phoneDisplay}</span>
              </Button>
            </a>
          </div>

          <div className="pt-2">
            <MarginNote color="redpen" rotate="-rotate-1">
              ✎ Sunday ko bhi reception aur admission desk 8:30 AM se open rehta hai.
            </MarginNote>
          </div>
        </div>

        {/* 2. Main Footer Grid: Address, Timings, Map Placeholder, Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-surface">
          {/* Brand & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-[8px] bg-surface overflow-hidden flex items-center justify-center border-2 border-surface shadow-paper-sm">
                <Image
                  src="/logo.png"
                  alt="Lakshya Academy Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-surface">
                LAKSHYA <span className="text-redpen">ACADEMY</span>
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-surface/80 leading-relaxed">
              {contact.tagline}
            </p>

            <div className="space-y-2 text-xs font-mono text-surface/90 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-highlighter shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">{contact.location}</div>
                  <div className="text-surface/70">{contact.address}</div>
                  <div className="text-surface/70">Landmark: {contact.landmark}</div>
                  <div className="text-surface/70">{contact.city} — {contact.pin}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-highlighter shrink-0" />
                <span className="text-surface/80">{contact.operatingHours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-highlighter shrink-0" />
                <span className="text-surface/80">{contact.email}</span>
              </div>
            </div>
          </div>

          {/* Map Wireframe Placeholder (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold text-surface uppercase tracking-wider flex items-center gap-2">
              <Navigation className="w-3.5 h-3.5 text-highlighter" />
              <span>Campus Map Location</span>
            </div>

            <div className="rounded-[10px] border-2 border-surface/30 bg-surface/5 p-4 space-y-3">
              <div className="h-32 rounded-[6px] border border-dashed border-surface/30 bg-surface/10 flex flex-col items-center justify-center text-center p-3">
                <MapPin className="w-6 h-6 text-redpen mb-1" />
                <span className="font-heading font-bold text-xs text-surface">
                  Lakshya Academy Main Campus
                </span>
                <span className="text-[11px] font-mono text-surface/70">
                  Opp. Geeta Nagar Crossing, Kakadeo, Kanpur
                </span>
              </div>

              <div className="text-[11px] font-mono text-surface/70 flex items-center justify-between">
                <span>Coordinates: 26.4728° N, 80.2986° E</span>
                <span className="text-highlighter underline">Open in Maps →</span>
              </div>
            </div>
          </div>

          {/* Navigation & Batches Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold text-surface uppercase tracking-wider">
              Quick Directory
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 font-heading font-semibold text-sm">
              {footer.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-surface/80 hover:text-highlighter hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span>→</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Bottom Legal & Disclaimers */}
        <div className="border-t-2 border-surface/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-surface/60">
          <div>
            © {new Date().getFullYear()} Lakshya Academy, Kanpur. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            {footer.legalDisclaimer}
          </div>
        </div>

        {/* 4. Portfolio & Showcase Disclaimer + Arivra Design Labs Attribution */}
        <div className="border-t border-surface/15 pt-6 text-center space-y-3">
          <p className="text-[11px] font-body text-surface/70 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-highlighter">Notice &amp; Disclaimer:</strong> This website is an interactive concept application engineered solely for portfolio demonstration and showcase purposes. Lakshya Academy is a fictional entity. All contact details, telephone numbers, faculty profiles, student ranks, and fee schedules are simulated dummy data. Please do not contact these numbers for real coaching admissions or scholarship tests.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-[6px] bg-surface/5 border border-highlighter/35 text-xs text-surface">
            <span className="font-mono font-bold tracking-wider uppercase text-[10px] text-highlighter">
              ARIVRA Demo
            </span>
            <span className="text-surface/40">•</span>
            <span className="text-surface/85">
              A product by{" "}
              <a
                href="https://arivra.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-surface hover:text-highlighter underline underline-offset-4 transition-colors"
              >
                Arivra Design Labs
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
