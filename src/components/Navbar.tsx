import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Car, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  onOpenBooking: (type?: string, defaultItem?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [fleetDropdown, setFleetDropdown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Car Showcase', href: '#car-showcase' },
    { name: 'Airport Cabs (TRZ)', href: '#airport' },
    { name: 'Wedding Cars', href: '#wedding-cars' },
    { name: '4x4 Mountain Thar', href: '#thar-mountain' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071A2B]/95 backdrop-blur-md border-b border-[#D4A853]/25 shadow-2xl py-2.5'
            : 'bg-gradient-to-b from-[#071A2B]/95 via-[#071A2B]/60 to-transparent py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Big Visible Logo and Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] rounded-2xl"
            >
              {/* Maximized Inner Logo inside clean frame */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-[#D4A853] flex items-center justify-center p-0.5 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-200">
                <img
                  src={siteConfig.logoUrl}
                  alt="Shivam Travels Trichy"
                  className="w-full h-full object-contain scale-110 filter contrast-125"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#D4A853] transition-colors leading-none">
                  {siteConfig.brandName}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#D4A853] uppercase tracking-wider mt-1">
                  Trichy 24/7 Vehicle Travels
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-200 hover:text-[#D4A853] transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4A853] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}

              {/* Special Vehicles Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setFleetDropdown(!fleetDropdown)}
                  className="flex items-center gap-1 text-sm font-semibold text-slate-200 hover:text-[#D4A853] transition-colors py-1 cursor-pointer"
                >
                  <span>More Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${fleetDropdown ? 'rotate-180 text-[#D4A853]' : ''}`} />
                </button>

                {fleetDropdown && (
                  <div
                    onMouseLeave={() => setFleetDropdown(false)}
                    className="absolute top-full right-0 mt-2 w-60 py-2 rounded-2xl bg-[#08131F] border border-[#D4A853]/30 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
                  >
                    <a
                      href="#pilgrimage"
                      onClick={() => setFleetDropdown(false)}
                      className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-[#1B314B]/70 hover:text-[#D4A853] transition-colors"
                    >
                      <span className="font-bold text-white block">Temple & Pilgrimage Cabs</span>
                      <span className="text-[10px] text-slate-400">Srirangam, Madurai, Rameswaram</span>
                    </a>
                    <a
                      href="#corporate"
                      onClick={() => setFleetDropdown(false)}
                      className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-[#1B314B]/70 hover:text-[#D4A853] transition-colors"
                    >
                      <span className="font-bold text-white block">Corporate Mobility</span>
                      <span className="text-[10px] text-slate-400">GST Billing & Monthly Invoicing</span>
                    </a>
                    <a
                      href="#faq"
                      onClick={() => setFleetDropdown(false)}
                      className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-[#1B314B]/70 hover:text-[#D4A853] transition-colors"
                    >
                      <span className="font-bold text-white block">FAQs</span>
                      <span className="text-[10px] text-slate-400">Cab booking rules & tariffs</span>
                    </a>
                  </div>
                )}
              </div>
            </nav>

            {/* Zone 3: Fast Booking CTA & 24/7 Helpline */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="hidden xl:flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-[#D4A853] transition-colors"
                title="Call 24/7 Helpline"
              >
                <div className="w-8 h-8 rounded-full bg-[#1B314B] border border-[#D4A853]/30 flex items-center justify-center text-[#D4A853]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-slate-400 block uppercase font-medium">24/7 Helpline</span>
                  <span className="tabular-nums font-bold">{siteConfig.contact.phone}</span>
                </div>
              </a>

              <button
                onClick={() => onOpenBooking('cab')}
                className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#071A2B] bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] transition-all rounded-xl shadow-lg hover:shadow-[#D4A853]/30 whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <Car className="w-3.5 h-3.5" />
                <span>Fast Booking Desk</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking('cab')}
                className="px-3 py-1.5 text-xs font-bold text-[#071A2B] bg-[#D4A853] rounded-lg whitespace-nowrap"
              >
                Book Cab
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-[#D4A853] transition-colors rounded-lg focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#071A2B] border-l border-[#D4A853]/25 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#D4A853] flex items-center justify-center p-0.5 shadow-md overflow-hidden">
                    <img
                      src={siteConfig.logoUrl}
                      alt="Shivam Travels"
                      className="w-full h-full object-contain scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base leading-none">
                      {siteConfig.brandName}
                    </h3>
                    <p className="text-[10px] text-[#D4A853] tracking-widest uppercase mt-0.5 font-bold">
                      Trichy Vehicle Travels
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="py-6 space-y-1">
                {[
                  ...navLinks,
                  { name: 'Corporate Mobility', href: '#corporate' },
                  { name: 'Pilgrimage Temple Cabs', href: '#pilgrimage' },
                  { name: 'Frequently Asked Questions', href: '#faq' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-[#D4A853] hover:bg-[#1B314B]/40 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside Mobile Drawer */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#1B314B]/70 text-slate-200 text-xs font-semibold hover:text-[#D4A853] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4A853]" />
                <span className="tabular-nums font-bold">Call {siteConfig.contact.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('cab');
                }}
                className="w-full py-3 rounded-xl bg-[#D4A853] text-[#071A2B] text-xs font-black uppercase tracking-wider hover:bg-[#e4bb69] transition-colors shadow-md text-center"
              >
                Open Fast Booking Desk
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
