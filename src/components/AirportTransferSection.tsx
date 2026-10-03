import React from 'react';
import { Plane, Compass, Clock, CheckCircle2, Shield, ArrowRight, UserCheck, MapPin } from 'lucide-react';
import { airportTransferFeatures } from '../data/travelData';
import { siteConfig } from '../config/siteConfig';

interface AirportTransferSectionProps {
  onBookAirportTransfer: () => void;
}

export const AirportTransferSection: React.FC<AirportTransferSectionProps> = ({
  onBookAirportTransfer,
}) => {
  return (
    <section id="airport" className="py-24 bg-[#071A2B] relative overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Route Animation & Terminal Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A853]">
              <Plane className="w-4 h-4 text-[#D4A853]" />
              <span>Official Airport Transfer Desk</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Trichy International Airport (TRZ) Transfers 24/7
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Arriving from Singapore, Malaysia, UAE, or Sri Lanka? Our courteous chauffeurs wait at the arrival terminal with a personalized name board, assist with your luggage, and provide direct, hassle-free transfers to Srirangam, Thanjavur, Madurai, or your Trichy residence.
            </p>

            {/* Visual Route Animation Card: AIRPORT → HOTEL → DESTINATION */}
            <div className="p-6 rounded-2xl bg-[#08131F] border border-[#D4A853]/30 shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                <span className="text-[#D4A853]">Seamless Transit Sequence</span>
                <span className="text-[11px] text-slate-400">Fixed Transparent Rates</span>
              </div>

              {/* Animated SVG Path for Airport Transit */}
              <div className="relative py-2">
                <div className="grid grid-cols-3 gap-2 text-center relative z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#D4A853] text-[#071A2B] flex items-center justify-center font-bold shadow-md">
                      <Plane className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-white mt-2">TRZ AIRPORT</span>
                    <span className="text-[10px] text-slate-400">Arrival Gate / Meet</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#1B314B] text-[#D4A853] border border-[#D4A853]/40 flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-white mt-2">HOTEL / CITY</span>
                    <span className="text-[10px] text-slate-400">Trichy / Srirangam</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#071A2B] text-slate-300 border border-slate-700 flex items-center justify-center font-bold">
                      <Compass className="w-5 h-5 text-[#D4A853]" />
                    </div>
                    <span className="text-xs font-bold text-white mt-2">OUTSTATION</span>
                    <span className="text-[10px] text-slate-400">Thanjavur · Madurai</span>
                  </div>
                </div>

                {/* Animated connecting dashed line */}
                <div className="absolute top-7 left-12 right-12 h-[2px] bg-slate-800 -z-0">
                  <div className="h-full bg-gradient-to-r from-[#D4A853] via-[#E8C580] to-[#D4A853] animate-pulse" />
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-300 flex items-center gap-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero wait time guarantee. Free 60-minute wait window for delayed flights.</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onBookAirportTransfer}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Airport Transfer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1B314B]/60 hover:bg-[#1B314B] border border-slate-700 text-slate-200 text-xs font-semibold transition-colors text-center"
              >
                Call Airport Desk ({siteConfig.contact.phone})
              </a>
            </div>
          </div>

          {/* Right Column: Key Service Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {airportTransferFeatures.map((feat, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#08131F] border border-slate-800 hover:border-[#D4A853]/40 transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1B314B]/70 border border-[#D4A853]/30 flex items-center justify-center text-[#D4A853] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-white mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
