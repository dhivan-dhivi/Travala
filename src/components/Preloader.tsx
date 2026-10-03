import React, { useEffect, useState } from 'react';
import { Car, Compass, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [carPosition, setCarPosition] = useState<number>(0);
  const [fading, setFading] = useState<boolean>(false);

  const stops = [
    { name: 'TRICHY', label: 'Origin Hub' },
    { name: 'CHENNAI', label: 'GST Highway' },
    { name: 'KODAIKANAL', label: 'Ghat Roads' },
    { name: 'OOTY', label: 'Nilgiri Hills' },
    { name: 'ALL TAMIL NADU', label: '' },
  ];

  useEffect(() => {
    // Step 0: Trichy
    setCarPosition(5);

    const t1 = setTimeout(() => {
      setCurrentStep(1);
      setCarPosition(28);
    }, 700);

    const t2 = setTimeout(() => {
      setCurrentStep(2);
      setCarPosition(52);
    }, 1500);

    const t3 = setTimeout(() => {
      setCurrentStep(3);
      setCarPosition(76);
    }, 2300);

    const t4 = setTimeout(() => {
      setCurrentStep(4);
      setCarPosition(98);
    }, 3100);

    const t5 = setTimeout(() => {
      setFading(true);
    }, 3800);

    const t6 = setTimeout(() => {
      onComplete();
    }, 4300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071A2B] text-slate-100 transition-opacity duration-700 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Shivam Travels"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,83,0.18)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center max-w-xl w-full px-6 text-center">
        {/* Crisp Logo with high visibility */}
        <div className="relative mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white border-2 border-[#D4A853] flex items-center justify-center p-1.5 shadow-2xl shadow-black/70 glow-gold overflow-hidden">
            <img
              src={siteConfig.logoUrl}
              alt="Shivam Travels"
              className="w-full h-full object-contain scale-110"
            />
          </div>
        </div>

        <div className="space-y-1 mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white">
            {siteConfig.brandName}
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4A853] font-bold">
            Trichy 24/7 Vehicle Travels
          </p>
        </div>

        {/* Animated Highway Travel Route Tracker with Car Marker */}
        <div className="w-full max-w-lg py-4 px-2">
          {/* Stops labels */}
          <div className="grid grid-cols-5 text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-3">
            {stops.map((stop, idx) => (
              <div
                key={stop.name}
                className={`transition-colors duration-300 ${
                  currentStep >= idx ? 'text-[#D4A853]' : 'text-slate-500'
                }`}
              >
                <span>{stop.name}</span>
                {stop.label ? (
                  <span className="block text-[8px] sm:text-[9px] text-slate-400 font-normal">
                    {stop.label}
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          {/* SVG Animated Route Line & Car Indicator */}
          <div className="relative h-10 w-full flex items-center">
            {/* Background Track Line */}
            <div className="absolute left-0 right-0 h-2 bg-[#1B314B] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4A853] via-[#FFF2D0] to-[#D4A853] transition-all duration-700 ease-out"
                style={{ width: `${carPosition}%` }}
              />
            </div>

            {/* Connecting Stop Dots */}
            <div className="absolute left-0 right-0 flex justify-between px-1">
              {stops.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 z-10 ${
                    currentStep >= idx
                      ? 'bg-[#D4A853] border-white scale-110 shadow-lg'
                      : 'bg-[#08131F] border-slate-700'
                  }`}
                />
              ))}
            </div>

            {/* Driving Animated Car SVG Icon */}
            <div
              className="absolute z-20 -top-1 transition-all duration-700 ease-out -translate-x-1/2"
              style={{ left: `${carPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-[#D4A853] text-[#071A2B] border-2 border-white flex items-center justify-center shadow-xl transform scale-110">
                <Car className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 text-xs font-semibold text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Connecting Trichy to {stops[currentStep]?.name || 'Tamil Nadu'}...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
