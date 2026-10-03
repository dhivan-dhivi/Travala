import React from 'react';
import { Heart, Compass, CheckCircle2, ArrowRight, ShieldCheck, Car, Sparkles, MapPin } from 'lucide-react';

interface WeddingCarsSectionProps {
  onBookWedding: (carName: string) => void;
}

export const WeddingCarsSection: React.FC<WeddingCarsSectionProps> = ({ onBookWedding }) => {
  return (
    <section id="wedding-cars" className="py-24 bg-[#08131F] border-t border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Wedding Car Showcase */}
          <div className="rounded-3xl bg-[#071A2B] border-2 border-rose-500/30 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-rose-400" />
                <span>Marriage & Muhurtham Special</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                Flower Decorated Wedding Cars in Trichy
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Make your special day grand and unforgettable. We provide spotless white tourist sedans (Swift Dzire) and luxury Innova Crystas decorated with fresh real flower bouquets, satin ribbons, and door garlands for groom arrival, bridal pickup, and wedding hall entry.
              </p>

              <div className="space-y-2 py-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0" />
                  <span>Fresh real rose & lily bouquet arrangements on bonnet & doors</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0" />
                  <span>Uniformed, courteous chauffeur in spotless attire</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A853] shrink-0" />
                  <span>On-time arrival at your marriage hall or residence in Trichy</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-400">
                <span>Available across Trichy, Thanjavur & Pudukkottai</span>
              </div>
              <button
                onClick={() => onBookWedding('Wedding & Marriage Decorated Car')}
                className="px-6 py-3 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Book Wedding Car</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mahindra Thar 4x4 Mountain Ride Showcase */}
          <div id="thar-mountain" className="rounded-3xl bg-[#071A2B] border-2 border-[#D4A853]/40 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between scroll-mt-24">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#D4A853] text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Mountain & Ghat Road Special</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                Mahindra Thar 4x4 Mountain Explorer
              </h3>

              <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#08131F] border border-slate-700 text-[11px] font-bold text-[#D4A853]">
                Fleet Vehicle: Black Mahindra Thar 4x4
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Take on the 70 hairpin bends of Kolli Hills or cruise the scenic misty valleys of Kodaikanal and Yercaud. Our rugged black 4x4 Mahindra Thar provides an unbeatable open panoramic road trip experience with an expert ghat-road driver.
              </p>

              <div className="space-y-2 py-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>High ground clearance & heavy-duty all-terrain 4x4 drive</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Chilled air conditioning with hardtop all-weather cabin</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mastery over steep ghat roads & offbeat photo viewpoints</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-400">
                <span>Ideal for Kolli Hills, Kodai, Ooty & Valparai</span>
              </div>
              <button
                onClick={() => onBookWedding('Mahindra Thar 4x4 Adventure')}
                className="px-6 py-3 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Book Thar 4x4 Ride</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
