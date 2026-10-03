import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Send,
  Navigation,
  CheckCircle2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [travelType, setTravelType] = useState('Holiday Package');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travellers, setTravellers] = useState('2-4 Travellers');
  const [vehicle, setVehicle] = useState('Innova Crysta');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppContact = () => {
    const text = `*New Travel Enquiry - Shivam Travels Trichy*\n` +
      `*Name:* ${name || 'Traveller'}\n` +
      `*Phone:* ${phone}\n` +
      `*Service:* ${travelType}\n` +
      `*Destination:* ${destination || 'Not specified'}\n` +
      `*Date:* ${travelDate || 'Flexible'}\n` +
      `*Vehicle:* ${vehicle}\n` +
      `*Notes:* ${message || 'Please send available packages and tariffs.'}`;

    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#08131F] border-t border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A853] mb-2">
            <MapPin className="w-4 h-4" />
            <span>Connect with Shivam Travels</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Start Your Journey Today
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Have a question or ready to book? Reach our travel desk in Cantonment, Trichy, via phone, WhatsApp, or request an instant callback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Office Information, Quick Actions & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 rounded-3xl bg-[#071A2B] border border-[#D4A853]/30 shadow-xl space-y-6">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <span>Trichy Headquarters</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B314B] text-[#D4A853] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Office Address</div>
                    <p className="text-slate-300 mt-0.5">{siteConfig.location.address}</p>
                    <p className="text-[11px] text-[#D4A853] mt-1">{siteConfig.location.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B314B] text-[#D4A853] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">24/7 Helpline & Bookings</div>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-slate-200 hover:text-[#D4A853] transition-colors block tabular-nums"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <a
                      href={`tel:${siteConfig.contact.phoneSecondary.replace(/[^0-9+]/g, '')}`}
                      className="text-slate-400 hover:text-[#D4A853] transition-colors block tabular-nums text-xs"
                    >
                      {siteConfig.contact.phoneSecondary} (Secondary line)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B314B] text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Direct WhatsApp Desk</div>
                    <p className="text-slate-300">Instant quotes, live cab tracking & digital itineraries.</p>
                    <button
                      onClick={handleWhatsAppContact}
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:underline cursor-pointer"
                    >
                      <span>Chat on WhatsApp ({siteConfig.contact.whatsappDisplay})</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B314B] text-[#D4A853] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Operational Hours</div>
                    <p className="text-slate-300">{siteConfig.contact.workingHours}</p>
                    <p className="text-[11px] text-slate-400">{siteConfig.contact.officeHours}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="py-3 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] text-[#071A2B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={siteConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl bg-[#1B314B] hover:bg-[#1B314B]/80 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-slate-700 text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Map Visual Representation */}
            <div className="p-4 rounded-2xl bg-[#071A2B] border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-200 block">Prime Central Location:</span>
                <span>Near Central Bus Stand, Cantonment, Tiruchirappalli</span>
              </div>
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A853] hover:underline whitespace-nowrap"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Right: Comprehensive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#071A2B] border border-[#D4A853]/25 shadow-2xl relative">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Request a Callback & Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Fill out your travel specifications and our senior Trichy itinerary planner will get in touch with you within 15–30 minutes.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Anand Sundaram"
                        className="w-full bg-[#08131F] border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 94431 23456"
                        className="w-full bg-[#08131F] border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. anand@example.com"
                        className="w-full bg-[#08131F] border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Travel Service Type
                      </label>
                      <select
                        value={travelType}
                        onChange={(e) => setTravelType(e.target.value)}
                        className="w-full bg-[#08131F] border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                      >
                        <option value="Holiday Package">Holiday Package (Kerala, Ooty, etc.)</option>
                        <option value="Cab Rental / Outstation">Outstation Chauffeur Cab</option>
                        <option value="Airport Transfer">Trichy Airport (TRZ) Transfer</option>
                        <option value="Pilgrimage Circuit">Tamil Nadu Temple Pilgrimage</option>
                        <option value="Corporate Mobility">Corporate / Business Travel</option>
                        <option value="Group Tour / Tempo">Group Tour / Tempo Traveller</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Destination or Route
                      </label>
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="e.g. Kerala / Ooty / Srirangam"
                        className="w-full bg-[#08131F] border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Vehicle Preference
                      </label>
                      <select
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        className="w-full bg-[#08131F] border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                      >
                        <option value="Innova Crysta">Toyota Innova Crysta (6-7 Pax)</option>
                        <option value="Swift Dzire Sedan">Swift Dzire / Etios (4 Pax)</option>
                        <option value="Maruti Ertiga">Maruti Ertiga (6 Pax)</option>
                        <option value="Tempo Traveller">Force Tempo Traveller (12-17 Pax)</option>
                        <option value="Toyota Fortuner VIP">Toyota Fortuner VIP</option>
                        <option value="Luxury Coach Bus">Luxury Coach Bus (26-40 Pax)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Travel Start Date
                      </label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-[#08131F] border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Number of Travellers
                      </label>
                      <select
                        value={travellers}
                        onChange={(e) => setTravellers(e.target.value)}
                        className="w-full bg-[#08131F] border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                      >
                        <option value="1 Solo Traveller">1 Solo Traveller</option>
                        <option value="2 Couple">2 Couple</option>
                        <option value="3-4 Small Family">3-4 Small Family</option>
                        <option value="5-7 Family Group">5-7 Family Group</option>
                        <option value="8+ Group Tour">8+ Group Tour</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Additional Message / Hotel Preferences / Flight Details
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any specific hotel tier, flight numbers, senior citizen care, or budget limit..."
                      className="w-full bg-[#08131F] border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request a Callback</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppContact}
                      className="sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Success feedback */
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">
                    Thank You, {name || 'Traveller'}!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Our travel expert will contact you shortly on <span className="text-[#D4A853] font-semibold">{phone}</span> to finalize your itinerary and quote.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppContact}
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Chat Now</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-[#1B314B] text-slate-200 text-xs font-semibold hover:bg-[#1B314B]/80 cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
