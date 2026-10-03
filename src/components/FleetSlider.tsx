import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Briefcase, Wind, Check, Car, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { vehiclesData, Vehicle } from '../data/travelData';

interface FleetSliderProps {
  onBookVehicle: (vehicle: Vehicle) => void;
}

export const FleetSlider: React.FC<FleetSliderProps> = ({ onBookVehicle }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const total = vehiclesData.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const currentVehicle = vehiclesData[currentIndex];

  return (
    <section id="car-showcase" className="py-24 bg-[#071A2B] scroll-mt-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A853] mb-2">
              <Car className="w-4 h-4" />
              <span>Real Fleet Gallery</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Our Travel Vehicles Showcase
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Explore our sanitized, commercial yellow-board vehicles operated directly from Trichy.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <span className="text-xs font-bold text-slate-400 tabular-nums">
              <strong className="text-[#D4A853] text-base">{currentIndex + 1}</strong> / {total}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-[#08131F] border border-slate-700 hover:border-[#D4A853] hover:text-[#D4A853] text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
                aria-label="Previous car"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-[#08131F] border border-slate-700 hover:border-[#D4A853] hover:text-[#D4A853] text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
                aria-label="Next car"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Carousel Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="rounded-3xl bg-[#08131F] border-2 border-[#D4A853]/40 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300"
        >
          {/* Car Image Stage */}
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#1B314B]">
            <img
              src={currentVehicle.image}
              alt={currentVehicle.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#08131F] via-transparent to-transparent opacity-85" />

            {/* Category & Verified Fleet Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-xl bg-[#071A2B]/90 backdrop-blur-md border border-white/10 text-white font-bold text-xs">
                {currentVehicle.categoryLabel}
              </span>
              {currentVehicle.realPhotoLabel && (
                <span className="px-3 py-1 rounded-xl bg-[#D4A853] text-[#071A2B] font-black text-xs uppercase tracking-wider shadow-md">
                  {currentVehicle.realPhotoLabel}
                </span>
              )}
            </div>
          </div>

          {/* Car Specifications & Booking Action */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-bold text-[#D4A853] uppercase tracking-widest block mb-1">
                Vehicle Spotlight · Shivam Travels
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                {currentVehicle.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {currentVehicle.tagline}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#D4A853]" />
                  <span className="font-bold">{currentVehicle.passengers} Passengers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#D4A853]" />
                  <span className="font-bold">{currentVehicle.luggage} Bags</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wind className="w-4 h-4 text-[#D4A853]" />
                  <span className="font-semibold">{currentVehicle.ac ? 'Chilled AC' : 'Non-AC'}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Key Features & Amenities:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentVehicle.features.slice(0, 4).map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D4A853] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal Route */}
              <div className="mt-4 p-3 rounded-xl bg-[#071A2B] border border-slate-800 text-xs text-slate-300">
                <strong className="text-white block mb-0.5">Recommended For:</strong>
                <span>{currentVehicle.recommendedFor}</span>
              </div>
            </div>

            {/* Slide Action Button */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <button
                onClick={() => onBookVehicle(currentVehicle)}
                className="flex-1 py-3.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] text-xs font-black uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Car className="w-4 h-4" />
                <span>Book This {currentVehicle.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnails Navigator Bar */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-6">
          {vehiclesData.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setCurrentIndex(i)}
              className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                currentIndex === i
                  ? 'bg-[#1B314B] border-[#D4A853] shadow-lg shadow-[#D4A853]/20 scale-102'
                  : 'bg-[#08131F] border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="text-[10px] font-bold text-[#D4A853] uppercase truncate">
                {v.categoryLabel.split(' ')[0]}
              </div>
              <div className="text-xs font-bold text-white truncate mt-0.5">
                {v.name.split('(')[0]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
