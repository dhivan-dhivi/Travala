import React, { useState, useEffect } from 'react';
import { Car, ShieldCheck, Clock, Star, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onExploreClick: () => void;
  onPlanClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onPlanClick }) => {
  const animatedHeadlines = [
    'Outstation Cabs from Trichy',
    'Trichy to Anywhere in Tamil Nadu',
    '24/7 TRZ Airport Pickup & Drop',
    'Wedding & Marriage Decorated Cars',
    'Mahindra Thar 4x4 Mountain Rides',
    'Swift Dzire, Ertiga & Innova Fleet'
  ];

  const [currentTextIdx, setCurrentTextIdx] = useState<number>(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setCurrentTextIdx((prev) => (prev + 1) % animatedHeadlines.length);
        setFadeState('in');
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[82vh] lg:min-h-[86vh] flex flex-col justify-center items-center text-center pt-28 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Highway & Fleet Visual with Scrim Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          alt="Trichy scenic highways and travel roads"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Multi-layer measured gradient scrim for 4.5:1+ contrast compliance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A2B]/90 via-[#071A2B]/80 to-[#071A2B]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,26,43,0.85)_100%)]" />
      </div>

      {/* Floating subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4A853]/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
        {/* Dynamic Animated Rotating Headline */}
        <div className="h-32 sm:h-40 md:h-44 flex items-center justify-center mb-6">
          <h1
            className={`font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.12] [text-wrap:balance] transition-all duration-300 transform ${
              fadeState === 'in'
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-2 scale-98'
            }`}
          >
            <span className="block text-slate-300 text-lg sm:text-2xl font-bold mb-2 uppercase tracking-widest text-[#D4A853]">
              Your Trusted Highway Chauffeur
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5F1E8] to-[#D4A853] text-glow">
              {animatedHeadlines[currentTextIdx]}
            </span>
          </h1>
        </div>

        {/* Primary & Secondary Action Pair */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={onPlanClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] font-black text-xs sm:text-sm tracking-wider uppercase shadow-2xl hover:shadow-[#D4A853]/30 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <Car className="w-4 h-4" />
            <span>Fast Booking Desk</span>
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#08131F]/90 hover:bg-[#1B314B] border border-slate-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <span>View All Fleet Vehicles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Real Proof Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 bg-[#08131F]/70 px-3.5 py-2 rounded-xl border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Commercial Yellow Board Tourist Taxis</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#08131F]/70 px-3.5 py-2 rounded-xl border border-slate-800">
            <Clock className="w-4 h-4 text-[#D4A853]" />
            <span>15-Mins Doorstep Pickup in Trichy</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#08131F]/70 px-3.5 py-2 rounded-xl border border-slate-800">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>4.9 / 5.0 Google Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};
