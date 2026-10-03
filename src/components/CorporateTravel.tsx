import React, { useState } from 'react';
import { Briefcase, Building2, Receipt, FileText, CheckCircle2, PhoneCall, Send, ShieldCheck } from 'lucide-react';
import { corporateServices } from '../data/travelData';
import { siteConfig } from '../config/siteConfig';

interface CorporateTravelProps {
  onCorporateEnquiry: () => void;
}

export const CorporateTravel: React.FC<CorporateTravelProps> = ({ onCorporateEnquiry }) => {
  return (
    <section id="corporate" className="py-24 bg-[#071A2B] border-t border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#08131F] border border-[#D4A853]/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A853]">
                <Building2 className="w-4 h-4" />
                <span>B2B & Enterprise Mobility</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Travel Solutions for Business
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Elevate your executive mobility in Trichy and across Tamil Nadu. We partner with industrial enterprises, educational institutions, IT firms, and medical conferences to provide reliable chauffeur transportation with GST compliance and monthly account billing.
              </p>

              {/* B2B Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Receipt className="w-4 h-4 text-[#D4A853] shrink-0" />
                  <span>GST Invoicing & Itemized Trips</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#D4A853] shrink-0" />
                  <span>Executive Uniformed Chauffeurs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Briefcase className="w-4 h-4 text-[#D4A853] shrink-0" />
                  <span>Monthly Corporate Accounts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <FileText className="w-4 h-4 text-[#D4A853] shrink-0" />
                  <span>Dedicated Account Manager</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onCorporateEnquiry}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Talk to Our Corporate Team
                </button>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1B314B]/60 hover:bg-[#1B314B] border border-slate-700 text-slate-200 text-xs font-semibold transition-colors text-center"
                >
                  Email Rate Card Request
                </a>
              </div>
            </div>

            {/* Right: Corporate Services Bento */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corporateServices.map((service, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#071A2B] border border-slate-800/90 hover:border-[#D4A853]/40 transition-colors space-y-2"
                >
                  <h4 className="font-display text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
                    <span>{service.title}</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
