import React from 'react';
import {
  ShieldCheck,
  BadgePercent,
  UserCheck,
  Headphones,
  Sliders,
  Sparkles,
  MapPin,
  Clock,
  Compass
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const leftFeatures = [
    {
      icon: ShieldCheck,
      title: 'Professional Service',
      desc: 'Formally registered, licensed tour operator with established track record in Trichy since 2014.'
    },
    {
      icon: BadgePercent,
      title: 'Transparent Pricing',
      desc: 'Clear per-km rates with driver bata, tolls, and permit breakdowns. Zero hidden surge fees.'
    },
    {
      icon: UserCheck,
      title: 'Experienced Verified Drivers',
      desc: 'Uniformed, non-smoking, background-verified highway chauffeurs fluent in Tamil and English.'
    },
    {
      icon: Headphones,
      title: '24/7 Road & Trip Support',
      desc: 'Dedicated journey coordinator constantly reachable for updates, flight adjustments, and assistance.'
    }
  ];

  const rightFeatures = [
    {
      icon: Sliders,
      title: '100% Customized Trips',
      desc: 'Flexible itineraries adapted to your family pace, senior citizen comfort, and preferred hotel tiers.'
    },
    {
      icon: Sparkles,
      title: 'Clean & Sanitized Fleet',
      desc: 'Daily sanitized sedans, Innova Crystas, and tempo travellers with functional climate control.'
    },
    {
      icon: Clock,
      title: 'On-Time Doorstep Guarantee',
      desc: 'Vehicle arrives 15 minutes before scheduled departure for hassle-free baggage loading.'
    },
    {
      icon: MapPin,
      title: 'Deep Tamil Nadu Expertise',
      desc: 'Intimate knowledge of temple darshan timings, scenic hill bypasses, and authentic South Indian cuisine stops.'
    }
  ];

  return (
    <section className="py-24 bg-[#08131F] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A853] mb-2">
            <Compass className="w-4 h-4" />
            <span>The Shivam Advantage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Discerning Travellers Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            We don't just provide cars; we engineer seamless, dependable travel experiences rooted in Trichy's warm hospitality.
          </p>
        </div>

        {/* Central Visual with Surrounding Features (Anti-boring 4-card layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Feature Column */}
          <div className="lg:col-span-4 space-y-6">
            {leftFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#071A2B] border border-slate-800/90 hover:border-[#D4A853]/40 transition-all duration-200 text-left group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#1B314B]/70 border border-[#D4A853]/25 flex items-center justify-center text-[#D4A853] group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-[#D4A853] transition-colors">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-12">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Central Visual Emblem */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-4">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-[#D4A853]/40 flex items-center justify-center p-6 bg-[#071A2B]/80 shadow-2xl glow-gold">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#08131F] via-[#1B314B]/50 to-[#071A2B] border border-[#D4A853]/30 flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-2xl bg-[#08131F] border border-[#D4A853]/50 flex items-center justify-center p-2 mb-3 shadow-inner">
                  <img
                    src={siteConfig.logoUrl}
                    alt="Shivam Travels"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-display text-lg font-bold text-white">
                  {siteConfig.brandName}
                </div>
                <div className="text-[11px] text-[#D4A853] uppercase tracking-widest mt-1">
                  Trichy · Tamil Nadu
                </div>
                <div className="text-[11px] text-slate-400 mt-2">
                  "Your Journey. Our Expertise."
                </div>
              </div>

              {/* Orbiting indicator points */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4A853] shadow-md shadow-[#D4A853]/50" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4A853] shadow-md shadow-[#D4A853]/50" />
            </div>
          </div>

          {/* Right Feature Column */}
          <div className="lg:col-span-4 space-y-6">
            {rightFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#071A2B] border border-slate-800/90 hover:border-[#D4A853]/40 transition-all duration-200 text-left group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#1B314B]/70 border border-[#D4A853]/25 flex items-center justify-center text-[#D4A853] group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-[#D4A853] transition-colors">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-12">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
