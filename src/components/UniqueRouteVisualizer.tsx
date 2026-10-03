import React, { useState } from 'react';
import { MapPin, Navigation2, Compass, ArrowRight, Car, ShieldCheck } from 'lucide-react';

interface RouteStop {
  id: string;
  name: string;
  title: string;
  car: string;
  distance: string;
  duration: string;
  snippet: string;
}

const stops: RouteStop[] = [
  {
    id: 'trichy',
    name: 'TRICHY HUB',
    title: 'Trichy (Cantonment & Central Base)',
    car: 'All Fleet Available',
    distance: '0 km',
    duration: 'Origin Hub',
    snippet: 'Central base in Cantonment near Central Bus Stand. Swift Dzires, Ertigas, Innovas & Thar 4x4 ready for departure within 15 minutes.'
  },
  {
    id: 'chennai',
    name: 'CHENNAI',
    title: 'Trichy to Chennai Highway (NH 45)',
    car: 'Swift Dzire / Innova Crysta',
    distance: '330 km',
    duration: '5.5 Hours',
    snippet: 'Direct 4-lane expressway drive to Chennai Airport, Central, OMR IT corridor, or any doorstep in Chennai with zero toll stress.'
  },
  {
    id: 'madurai',
    name: 'MADURAI',
    title: 'Trichy to Madurai Temple Corridor',
    car: 'Maruti Ertiga / Dzire',
    distance: '135 km',
    duration: '2.5 Hours',
    snippet: 'Fast outstation ride for Meenakshi Amman darshan, hospital visits, or transit connecting Southern Tamil Nadu.'
  },
  {
    id: 'kodaikanal',
    name: 'KODAIKANAL',
    title: 'Trichy to Kodaikanal Ghat Ride',
    car: 'Ertiga with Carrier / Thar 4x4',
    distance: '198 km',
    duration: '4.5 Hours',
    snippet: 'Scenic ghat ascent via Batlagundu. Expert mountain drivers trained on hairpins with luggage safely secured on top carrier.'
  },
  {
    id: 'rameswaram',
    name: 'RAMESWARAM',
    title: 'Trichy to Rameswaram Sea Bridge',
    car: 'Innova Crysta / Swift Dzire',
    distance: '228 km',
    duration: '4.5 Hours',
    snippet: 'Drive across the iconic Pamban sea bridge, sacred Agni Theertham, and the edge of India at Dhanushkodi with senior citizen care.'
  },
  {
    id: 'bangalore',
    name: 'BANGALORE',
    title: 'Trichy to Bangalore (Bengaluru)',
    car: 'Toyota Innova Crysta VIP',
    distance: '345 km',
    duration: '6.5 Hours',
    snippet: 'Interstate comfortable highway cruiser connecting Electronic City, Whitefield, Kempegowda Airport, or downtown Bangalore.'
  }
];

interface UniqueRouteVisualizerProps {
  onSelectRoute: (stopId: string) => void;
}

export const UniqueRouteVisualizer: React.FC<UniqueRouteVisualizerProps> = ({ onSelectRoute }) => {
  const [activeStop, setActiveStop] = useState<number>(0);

  const current = stops[activeStop];

  return (
    <section className="py-16 bg-[#071A2B] border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#D4A853] uppercase tracking-[0.2em] mb-2">
            <Car className="w-4 h-4" />
            <span>Highway Travel Corridors</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
            Direct Highway Cabs from Trichy
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Click any highway corridor to inspect travel duration, distance, and recommended vehicle.
          </p>
        </div>

        {/* Interactive SVG Route Tracker Bar */}
        <div className="relative py-4">
          <div className="relative hidden md:block w-full">
            <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 30">
              <line
                x1="40"
                y1="15"
                x2="960"
                y2="15"
                stroke="#1B314B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="40"
                y1="15"
                x2={`${40 + (activeStop / (stops.length - 1)) * 920}`}
                y2="15"
                stroke="#D4A853"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-route"
              />
            </svg>
          </div>

          {/* Interactive Route Stop Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
            {stops.map((stop, idx) => {
              const isActive = activeStop === idx;
              return (
                <button
                  key={stop.id}
                  onClick={() => setActiveStop(idx)}
                  className={`flex flex-col items-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1B314B]/80 border-[#D4A853] shadow-lg shadow-[#D4A853]/20 transform -translate-y-1'
                      : 'bg-[#08131F]/70 border-slate-800 hover:border-slate-700 hover:bg-[#1B314B]/40'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black mb-2 transition-colors ${
                      isActive ? 'bg-[#D4A853] text-[#071A2B]' : 'bg-[#1B314B] text-slate-300'
                    }`}
                  >
                    {idx === 0 ? <MapPin className="w-4 h-4" /> : idx + 1}
                  </div>
                  <span
                    className={`text-xs font-bold tracking-wider ${
                      isActive ? 'text-[#D4A853]' : 'text-slate-200'
                    }`}
                  >
                    {stop.name}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5 truncate max-w-full">
                    {stop.distance}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Route Spotlight Card */}
        <div className="mt-6 rounded-3xl bg-[#08131F] border-2 border-[#D4A853]/35 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#D4A853] font-bold">
              <span className="px-2.5 py-0.5 rounded-lg bg-[#D4A853]/15 border border-[#D4A853]/30">
                Highway Route #{activeStop + 1}
              </span>
              <span className="text-white">Recommended: {current.car}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Duration: {current.duration}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.snippet}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onSelectRoute(current.id)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span>Book Cab for This Route</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
