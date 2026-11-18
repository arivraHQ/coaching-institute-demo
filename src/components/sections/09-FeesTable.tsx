"use client";

import React from "react";
import { siteContent, FeeRow } from "@/content/site";
import { MarginNote } from "@/components/ui/MarginNote";
import { Receipt, Check, ShieldCheck, AlertCircle } from "lucide-react";

export function FeesTable() {
  const { fees } = siteContent;

  return (
    <section
      id="fees"
      className="relative w-full py-16 sm:py-24 border-b-2 border-ink bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border-2 border-ink bg-surface shadow-paper-sm text-xs font-mono font-bold tracking-tight text-ink uppercase mb-3">
              <Receipt className="w-3.5 h-3.5 text-redpen" />
              <span>100% Fee Transparency</span>
            </div>
            <h2 className="font-heading font-extrabold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.12] tracking-tight text-ink">
              {fees.headline}
            </h2>
          </div>

          <div className="md:max-w-sm">
            <MarginNote color="redpen" rotate="-rotate-1">
              Admission ke baad test series ya notes ke naam par ek rupya bhi extra nahi maanga jaata.
            </MarginNote>
          </div>
        </div>

        {/* Tabular Fee Matrix */}
        <div className="rounded-[10px] border-2 border-ink bg-surface shadow-paper-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-ink text-surface border-b-2 border-ink font-heading text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-6 font-extrabold">Batch / Course</th>
                  <th className="py-4 px-6 font-extrabold">Annual Tuition Fee</th>
                  <th className="py-4 px-6 font-extrabold">Installment Schedule</th>
                  <th className="py-4 px-4 font-extrabold text-center">Study Material</th>
                  <th className="py-4 px-4 font-extrabold text-center">OMR Tests</th>
                  <th className="py-4 px-4 font-extrabold text-center">App Backups</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-ink/10 font-body text-xs sm:text-sm text-ink">
                {fees.table.map((row: FeeRow, idx: number) => (
                  <tr
                    key={idx}
                    className="hover:bg-bg/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-heading font-bold text-base text-ink">
                      <div>{row.courseName}</div>
                      <span className="text-xs font-mono text-muted">{row.classGrade}</span>
                    </td>

                    <td className="py-4 px-6 font-heading font-extrabold text-xl text-ink">
                      {row.annualFee}
                    </td>

                    <td className="py-4 px-6 font-mono text-xs text-muted">
                      {row.installments}
                    </td>

                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-900 border border-green-800/30 text-xs font-bold">
                        ✓
                      </span>
                    </td>

                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-900 border border-green-800/30 text-xs font-bold">
                        ✓
                      </span>
                    </td>

                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-900 border border-green-800/30 text-xs font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Verification Stripe */}
          <div className="bg-[#FAF9F5] p-5 border-t-2 border-ink flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-redpen shrink-0" />
              <span>No surprise charges: 18% GST invoices provided with all fee receipts.</span>
            </div>
            <div className="text-muted">
              PDC & Online Net Banking accepted • Kakadeo Accounts Office
            </div>
          </div>
        </div>

        {/* 4-Item "No Hidden Charges Pledge" Card */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fees.noHiddenChargesPledge.map((pledge, i) => (
            <div
              key={i}
              className="p-4 rounded-[8px] border-2 border-ink bg-surface shadow-paper-sm flex items-start gap-2.5"
            >
              <Check className="w-4 h-4 text-redpen shrink-0 mt-0.5" />
              <p className="font-body text-xs leading-relaxed text-ink/90 font-medium">
                {pledge}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
