import React, { useState } from 'react';
import { Users, Briefcase, Wind, Check, ArrowRight, Car, ShieldCheck, Heart, Compass } from 'lucide-react';
import { vehiclesData, Vehicle } from '../data/travelData';

interface FleetSectionProps {
  onBookVehicle: (vehicle: Vehicle) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onBookVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Fleet Cars' },
    { id: 'sedan', label: 'Swift Dzire (Sedan)' },
    { id: 'suv', label: 'Ertiga (With Carrier)' },
    { id: 'thar', label: 'Mahindra Thar 4x4' },
    { id: 'wedding', label: 'Wedding Decorated Cars' },
    { id: 'premium', label: 'Innova Crysta' },
    { id: 'tempo', label: 'Tempo Traveller' },
  ];

  const filteredFleet = activeCategory === 'all'
    ? vehiclesData
    : vehiclesData.filter((v) => v.category === activeCategory);

  return (
    <section id="fleet" className="py-24 bg-[#08131F] border-t border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A853] mb-2">
              <Car className="w-4 h-4" />
              <span>Shivam Travels Verified Fleet</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Our Travel Fleet & Chauffeur Cars
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Real fleet vehicles operated directly from Trichy: Commercial yellow board Swift Dzires, family Ertigas with roof carriers, Mahindra Thar 4x4 for mountain climbs, flower-decorated wedding cars, and luxury Innova Crystas.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5 p-1 bg-[#071A2B] border border-slate-800 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#D4A853] text-[#071A2B] shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-[#1B314B]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((veh) => (
            <div
              key={veh.id}
              className="rounded-3xl bg-[#071A2B] border border-slate-800 hover:border-[#D4A853]/60 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between group hover:-translate-y-1.5"
            >
              {/* Vehicle Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1B314B]">
                <img
                  src={veh.image}
                  alt={veh.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-[#071A2B]/90 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-white">{veh.categoryLabel}</span>
                </div>

                {/* Registration / Real photo tag if available */}
                {veh.realPhotoLabel && (
                  <div className="absolute bottom-3 left-4 z-10">
                    <span className="text-[10px] font-bold text-[#071A2B] bg-[#D4A853] px-2.5 py-0.5 rounded-md shadow-md uppercase tracking-wider">
                      {veh.realPhotoLabel}
                    </span>
                  </div>
                )}
              </div>

              {/* Vehicle Specs & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#D4A853] transition-colors leading-snug">
                    {veh.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {veh.tagline}
                  </p>

                  {/* Quick specs grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 my-3 border-y border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D4A853]" />
                      <span className="font-bold">{veh.passengers} Pax</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#D4A853]" />
                      <span className="font-bold">{veh.luggage} Bags</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-[#D4A853]" />
                      <span className="font-semibold">{veh.ac ? 'Chilled AC' : 'Non-AC'}</span>
                    </div>
                  </div>

                  {/* Highlights / Features */}
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {veh.features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D4A853] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended For */}
                <div className="p-3 rounded-xl bg-[#08131F] border border-slate-800 text-[11px] text-slate-400">
                  <span className="font-bold text-slate-200">Recommended for: </span>
                  <span>{veh.recommendedFor}</span>
                </div>

                {/* Book Vehicle Action */}
                <button
                  onClick={() => onBookVehicle(veh)}
                  className="w-full py-3.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] text-xs font-black uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Car className="w-4 h-4" />
                  <span>Book This Car Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
