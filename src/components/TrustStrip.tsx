import React, { useEffect, useState, useRef } from 'react';
import { Award, Users, Clock, ShieldCheck, Navigation } from 'lucide-react';

interface AnimatedStatProps {
  type: 'simple' | 'comma' | 'dual' | 'percent';
  target: number;
  target2?: number;
  suffix?: string;
  prefix?: string;
  animate: boolean;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({
  type,
  target,
  target2,
  suffix = '',
  prefix = '',
  animate
}) => {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 2000; // 2 seconds smooth count
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(ease * target));
      if (target2 !== undefined) {
        setCount2(Math.round(ease * target2));
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [animate, target, target2]);

  return (
    <div className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight tabular-nums">
      {type === 'dual' ? (
        <span>
          <span className="text-white">{count}</span>
          <span className="text-[#D4A853] mx-1.5 font-bold">/</span>
          <span className="text-[#D4A853]">{count2}</span>
        </span>
      ) : type === 'comma' ? (
        <span>
          {prefix}
          {count.toLocaleString()}
          <span className="text-[#D4A853] font-bold">{suffix}</span>
        </span>
      ) : (
        <span>
          {prefix}
          {count}
          <span className="text-[#D4A853] font-bold">{suffix}</span>
        </span>
      )}
    </div>
  );
};

export const TrustStrip: React.FC = () => {
  const [inView, setInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger when user scrolls and the section is actually in the viewport
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // 20% of section visible on scroll
        rootMargin: '0px 0px -30px 0px' // Requires actual scroll down into it
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Award,
      statConfig: { type: 'simple' as const, target: 10, suffix: '+' },
      label: 'Years of Excellence',
      detail: 'Serving Trichy travellers since 2014'
    },
    {
      icon: Users,
      statConfig: { type: 'comma' as const, target: 5000, suffix: '+' },
      label: 'Delighted Travellers',
      detail: 'Couples, families & NRI pilgrims'
    },
    {
      icon: Clock,
      statConfig: { type: 'dual' as const, target: 24, target2: 7 },
      label: 'Flight & Road Support',
      detail: 'Dedicated on-call coordinator'
    },
    {
      icon: ShieldCheck,
      statConfig: { type: 'percent' as const, target: 100, suffix: '%' },
      label: 'Verified Chauffeurs',
      detail: 'Police verified & route-trained'
    },
    {
      icon: Navigation,
      statConfig: { type: 'simple' as const, target: 50, suffix: '+' },
      label: 'Destinations Covered',
      detail: 'South India & Pan-India networks'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="trust-strip"
      className="relative z-10 py-12 border-y border-slate-800/80 bg-[#08131F]/70 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const isLastItem = index === 4; // 50+ Destinations Covered
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 hover:bg-[#1B314B]/30 hover:-translate-y-1 group ${
                  isLastItem
                    ? 'col-span-2 md:col-span-4 lg:col-span-1 mx-auto w-full max-w-xs'
                    : ''
                }`}
              >
                <div className="w-11 h-11 rounded-2xl bg-[#1B314B]/60 border border-[#D4A853]/30 flex items-center justify-center text-[#D4A853] mb-3 group-hover:border-[#D4A853] group-hover:scale-110 transition-all shadow-md">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Animated counter number that starts ONLY when scrolled into view */}
                <AnimatedStat {...item.statConfig} animate={inView} />

                <div className="text-xs font-bold text-slate-200 mt-1.5 group-hover:text-white transition-colors">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
