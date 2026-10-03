import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ThumbsUp, ExternalLink, Sparkles } from 'lucide-react';
import { testimonialsData, Testimonial } from '../data/travelData';
import { siteConfig } from '../config/siteConfig';

export const ReviewsAndTrust: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  return (
    <section className="py-24 bg-[#08131F] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Reviews Style Scoreboard Strip */}
        <div className="rounded-3xl bg-[#071A2B] border border-[#D4A853]/25 p-8 sm:p-10 mb-14 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Google Rating Overview */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-center gap-2 mb-2">
                {/* Google "G" themed multi-color inspired icon */}
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-slate-900 text-xs shadow-sm">
                  G
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Google Verified Rating
                </span>
              </div>

              <div className="flex items-baseline gap-3 my-1">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tabular-nums">
                  {siteConfig.stats.googleRating}
                </span>
                <span className="text-slate-400 text-sm font-medium">/ 5.0</span>
              </div>

              <div className="flex items-center gap-1 my-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs text-slate-400 mt-2">
                Based on <span className="font-semibold text-slate-200 tabular-nums">{siteConfig.stats.totalReviews}</span> verified traveller reviews across Trichy & diaspora
              </p>
            </div>

            {/* Satisfaction Metrics */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#08131F] border border-slate-800">
                <div className="text-2xl font-bold text-[#D4A853] tabular-nums">99.4%</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">On-Time Arrivals</div>
                <div className="text-[11px] text-slate-400 mt-1">Doorstep & airport gate</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#08131F] border border-slate-800">
                <div className="text-2xl font-bold text-[#D4A853] tabular-nums">100%</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">Transparent Fares</div>
                <div className="text-[11px] text-slate-400 mt-1">Zero hidden surge bills</div>
              </div>
            </div>

            {/* Google Reviews Action */}
            <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center">
              <a
                href={siteConfig.social.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1B314B] hover:bg-[#1B314B]/80 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <span>Read Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] text-slate-400 mt-2 text-center md:text-right">
                Authentic, unedited traveler experiences
              </span>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A853] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Traveller Voices</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Loved by Families, NRIs & Pilgrims
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Read real accounts from passengers who trusted us with their family holidays, airport pickups, and pilgrimage yatras.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testi) => (
            <div
              key={testi.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#071A2B] border border-slate-800 hover:border-[#D4A853]/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Header with Avatar and Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1B314B] border border-[#D4A853]/40 flex items-center justify-center font-bold text-xs text-[#D4A853]">
                      {testi.avatarText}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-white leading-tight">
                        {testi.customerName}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {testi.location} · {testi.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{testi.review}"
                </p>
              </div>

              {/* Footer with Route Taken */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-[#D4A853] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{testi.tripType}</span>
                </span>
                <span className="text-slate-400 hidden sm:block truncate max-w-[220px]">
                  {testi.routeTaken}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
