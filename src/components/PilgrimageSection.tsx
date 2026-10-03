import React from 'react';
import { Compass, Sparkles, MapPin, CheckCircle, ShieldCheck, ArrowRight, HeartHandshake } from 'lucide-react';
import { pilgrimageDestinations } from '../data/travelData';

interface PilgrimageSectionProps {
  onBookPilgrimage: (templeName: string) => void;
}

export const PilgrimageSection: React.FC<PilgrimageSectionProps> = ({ onBookPilgrimage }) => {
  return (
    <section id="pilgrimage" className="py-24 bg-[#08131F] border-t border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A853] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Sacred Tamil Nadu & South India</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Divine Temple & Pilgrimage Circuits
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Rooted in the spiritual soil of Trichy and Cauvery delta, we provide respectful, senior-friendly temple darshan tours with drivers trained in temple customs and schedules.
            </p>
          </div>

          <div className="mt-6 md:mt-0 p-4 rounded-2xl bg-[#071A2B] border border-[#D4A853]/30 max-w-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4A853] mb-1">
              <HeartHandshake className="w-4 h-4" />
              <span>Senior Citizen Priority Care</span>
            </div>
            <p className="text-xs text-slate-300 leading-snug">
              Specialized assistance for elderly parents: doorstep boarding, battery-car coordination, and paced darshans.
            </p>
          </div>
        </div>

        {/* Pilgrimage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pilgrimageDestinations.map((temple, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#071A2B] border border-slate-800/90 hover:border-[#D4A853]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#D4A853] font-semibold mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{temple.city}</span>
                  </span>
                  <span className="text-slate-400 text-[11px]">{temple.distance}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#D4A853] transition-colors mb-2">
                  {temple.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {temple.significance}
                </p>

                {/* Darshan Tip Callout */}
                <div className="p-3 rounded-xl bg-[#08131F] border border-slate-800/80 text-[11px] text-slate-300 space-y-1">
                  <div className="font-bold text-[#D4A853] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Darshan Tip:</span>
                  </div>
                  <p className="text-slate-400 leading-snug">{temple.darshanTip}</p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs text-slate-400">Sedan / Innova / Tempo</span>
                <button
                  onClick={() => onBookPilgrimage(temple.name)}
                  className="px-4 py-2 rounded-lg bg-[#D4A853]/15 hover:bg-[#D4A853] text-[#D4A853] hover:text-[#071A2B] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Plan Darshan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
