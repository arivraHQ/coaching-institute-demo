"use client";

import React, { useState } from "react";
import { siteContent, FaqEntry } from "@/content/site";
import { MarginNote } from "@/components/ui/MarginNote";
import { HelpCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq() {
  const { faqs } = siteContent;
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-16 sm:py-24 border-b-2 border-ink bg-bg overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-ink bg-surface shadow-paper-sm text-xs font-mono font-bold tracking-tight text-ink uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-redpen" />
              <span>Straightforward Answers • No Corporate Jargon</span>
            </div>
            <h2 className="font-heading font-extrabold text-[34px] sm:text-[46px] leading-[1.12] tracking-tight text-ink">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="md:max-w-xs">
            <MarginNote color="redpen" rotate="-rotate-1">
              Admission lene se pehle har choti baat clear honi chahiye.
            </MarginNote>
          </div>
        </div>

        {/* 7 Questions Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq: FaqEntry) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-[10px] border-2 border-ink bg-surface transition-all duration-200 overflow-hidden",
                  isOpen ? "shadow-paper-lg" : "shadow-paper-sm hover:border-redpen"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                >
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 px-2 py-0.5 rounded-[4px] bg-bg border border-ink text-xs font-mono font-bold text-ink mt-0.5">
                      {faq.tag}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-ink leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      "shrink-0 p-1 rounded-full border border-ink/40 transition-transform duration-200",
                      isOpen ? "rotate-180 bg-highlighter" : "bg-bg"
                    )}
                  >
                    <ChevronDown className="w-4 h-4 text-ink" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-dashed border-ink/20 font-body text-sm sm:text-[15px] leading-relaxed text-ink/85">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
