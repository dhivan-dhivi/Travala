import React from 'react';
import { ShieldCheck, Phone, ArrowUp, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'cancellation' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050E18] text-slate-400 border-t border-slate-800/80 pt-12 pb-24 sm:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Clean Row: Brand & Fast Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-800/80 text-center md:text-left">
          {/* Brand Info with High Visibility Crisp Logo */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#D4A853] flex items-center justify-center p-0.5 shadow-xl overflow-hidden">
              <img
                src={siteConfig.logoUrl}
                alt={siteConfig.brandName}
                className="w-full h-full object-contain scale-110 filter contrast-125"
              />
            </div>
            <div>
              <span className="font-display text-2xl font-black text-white tracking-tight block">
                {siteConfig.brandName}
              </span>
              <span className="text-xs font-bold text-[#D4A853] uppercase tracking-wider block mt-0.5">
                Trichy 24/7 Vehicle Travels & Cabs
              </span>
            </div>
          </div>

          {/* Quick Nav Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#fleet" className="hover:text-[#D4A853] transition-colors">Our Fleet</a>
            <a href="#car-showcase" className="hover:text-[#D4A853] transition-colors">Car Showcase</a>
            <a href="#airport" className="hover:text-[#D4A853] transition-colors">Airport Cabs</a>
            <a href="#wedding-cars" className="hover:text-[#D4A853] transition-colors">Wedding Cars</a>
            <a href="#thar-mountain" className="hover:text-[#D4A853] transition-colors">4x4 Mountain Thar</a>
            <a href="#contact" className="hover:text-[#D4A853] transition-colors">Contact</a>
          </div>
        </div>

        {/* Clean Legal Links & Back to Top Layout */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs border-b border-slate-800/80">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-slate-400">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#D4A853] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#D4A853] transition-colors cursor-pointer"
            >
              Travel Terms & Conditions
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('cancellation')}
              className="hover:text-[#D4A853] transition-colors cursor-pointer"
            >
              Cancellation Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('refund')}
              className="hover:text-[#D4A853] transition-colors cursor-pointer"
            >
              Refund Terms
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[#D4A853] transition-colors cursor-pointer py-1 px-3 rounded-lg hover:bg-[#08131F]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Agency Credit & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} <strong className="text-white">{siteConfig.brandName}</strong>. All rights reserved. Tiruchirappalli, Tamil Nadu.
          </div>

          {/* Designed by Brandbolt Agency credit with clickable links */}
          <div className="p-2 sm:px-4 sm:py-2 rounded-xl bg-[#08131F] border border-[#D4A853]/35 flex flex-wrap items-center justify-center gap-2 shadow-md">
            <span className="text-slate-400">Designed by</span>
            <span className="font-extrabold text-white tracking-wide">Brandbolt Agency</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <a
              href={`tel:${siteConfig.agencyCredit.phone.replace(/[^0-9+]/g, '')}`}
              className="font-bold text-[#D4A853] hover:underline flex items-center gap-1 tabular-nums"
              title="Call Brandbolt Agency"
            >
              <Phone className="w-3 h-3 text-[#D4A853]" />
              <span>{siteConfig.agencyCredit.phone}</span>
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <a
              href={`https://wa.me/${siteConfig.agencyCredit.phoneRaw}?text=Hi%20Brandbolt%20Agency`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-400 hover:underline flex items-center gap-1"
              title="WhatsApp Brandbolt Agency"
            >
              <span>WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
