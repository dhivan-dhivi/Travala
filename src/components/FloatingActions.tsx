import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, CalendarCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show immediately as soon as the user starts scrolling from the Hero section (> 50px)
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(siteConfig.contact.whatsappDefaultMessage);
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Desktop Floating Actions Dock (Fixed at bottom right, rock-stable, immediate animated reveal upon hero scroll) */}
      <div
        className={`fixed bottom-5 right-6 z-50 hidden sm:flex items-center gap-2.5 p-2 rounded-2xl bg-[#071A2B]/95 backdrop-blur-2xl border border-[#D4A853]/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)] transition-all duration-400 ease-out transform ${
          isVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        {/* Quick Call Button */}
        <a
          href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#08131F] border border-slate-700/80 hover:border-[#D4A853] text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all group"
          title="Direct Call Helpline"
        >
          <div className="w-6 h-6 rounded-lg bg-[#1B314B] flex items-center justify-center text-[#D4A853] group-hover:bg-[#D4A853] group-hover:text-[#071A2B] transition-colors">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span>Call 24/7</span>
        </a>

        {/* WhatsApp Button with Icon & Pulse Ring */}
        <button
          onClick={handleWhatsAppClick}
          className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white text-xs font-bold shadow-md transition-all cursor-pointer group"
          aria-label="Chat on WhatsApp with Shivam Travels"
          title="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </button>

        {/* Book Trip Fast Button */}
        <button
          onClick={onOpenBooking}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:scale-95 text-[#071A2B] text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-[#D4A853]/40 transition-all cursor-pointer"
          title="Open Fast Booking Desk"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Book Trip</span>
        </button>
      </div>

      {/* Mobile Bottom Fixed Action Bar (Fixed at very bottom of screen, stable, animated slide-up immediately upon hero scroll) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#071A2B]/98 backdrop-blur-2xl border-t border-[#D4A853]/35 px-3 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.7)] transition-all duration-400 ease-out transform ${
          isVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="grid grid-cols-3 gap-2">
          {/* Call button */}
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#08131F] border border-slate-700/80 text-slate-200 active:bg-[#1B314B] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D4A853]" />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Call</span>
          </a>

          {/* WhatsApp button */}
          <button
            onClick={handleWhatsAppClick}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white active:bg-emerald-700 shadow-md transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-1">WhatsApp</span>
          </button>

          {/* Book Trip button */}
          <button
            onClick={onOpenBooking}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#D4A853] text-[#071A2B] font-black active:bg-[#c79841] shadow-md transition-colors cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-wider mt-1">Book Trip</span>
          </button>
        </div>
      </div>
    </>
  );
};
