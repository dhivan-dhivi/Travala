import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Car, Calendar, Users, MapPin, Clock, ArrowRight, ArrowLeft, Send, MessageSquare } from 'lucide-react';
import { vehiclesData } from '../data/travelData';
import { siteConfig } from '../config/siteConfig';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'package' | 'cab' | 'airport' | 'custom';
  defaultItemTitle?: string;
  initialData?: any;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'cab',
  defaultItemTitle,
  initialData,
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('Maruti Suzuki Swift Dzire (Prime AC Sedan)');
  const [pickupLocation, setPickupLocation] = useState<string>('');
  const [dropDestination, setDropDestination] = useState<string>('');
  const [tripType, setTripType] = useState<string>('One Way Drop');
  const [travelDate, setTravelDate] = useState<string>('');
  const [pickupTime, setPickupTime] = useState<string>('');
  const [passengersCount, setPassengersCount] = useState<number>(3);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);

  useEffect(() => {
    if (defaultItemTitle) {
      // If default item matches a car, set vehicle
      const foundCar = vehiclesData.find((v) => v.name.toLowerCase().includes(defaultItemTitle.toLowerCase()) || defaultItemTitle.toLowerCase().includes(v.name.toLowerCase()));
      if (foundCar) {
        setSelectedVehicle(foundCar.name);
      } else {
        setDropDestination(defaultItemTitle);
      }
    }
    if (initialData) {
      if (initialData.from) setPickupLocation(initialData.from);
      if (initialData.to) setDropDestination(initialData.to);
      if (initialData.vehicle) setSelectedVehicle(initialData.vehicle);
      if (initialData.date) setTravelDate(initialData.date);
      if (initialData.time) setPickupTime(initialData.time);
      if (initialData.tripType) setTripType(initialData.tripType === 'round-trip' ? 'Round Trip' : 'One Way Drop');
    }
  }, [defaultItemTitle, initialData]);

  if (!isOpen) return null;

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const sendWhatsAppBooking = () => {
    const text = `*New Cab Booking Request - Shivam Travels Trichy*\n` +
      `*Vehicle Selected:* ${selectedVehicle}\n` +
      `*Trip Format:* ${tripType}\n` +
      `*From (Pickup):* ${pickupLocation}\n` +
      `*To (Destination):* ${dropDestination}\n` +
      `*Date & Time:* ${travelDate} at ${pickupTime}\n` +
      `*Passengers:* ${passengersCount} Pax\n` +
      `*Customer Name:* ${customerName || 'Traveller'}\n` +
      `*Phone Number:* ${customerPhone}\n` +
      `*Special Notes:* ${specialNotes || 'Please send driver details & tariff confirmation.'}`;

    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#08131F] border-2 border-[#D4A853]/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Header with High Visibility Logo */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#071A2B]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#D4A853] flex items-center justify-center p-1 shadow-md">
              <img
                src={siteConfig.logoUrl}
                alt="Shivam Travels"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-display font-black text-white text-lg leading-none">
                Fast Booking Desk
              </h3>
              <p className="text-[11px] text-[#D4A853] font-bold uppercase tracking-wider mt-1">
                Shivam Travels · Trichy 24/7 Cabs
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-[#1B314B] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {!confirmed ? (
            <form onSubmit={handleFinalSubmit} className="space-y-5">
              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#D4A853]" />
                  <span>Choose Your Travel Vehicle *</span>
                </label>
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4A853] transition-colors font-medium"
                >
                  <option value="Maruti Suzuki Swift Dzire (Prime AC Sedan)">
                    Maruti Suzuki Swift Dzire (Prime AC Sedan · 4 Pax)
                  </option>
                  <option value="Maruti Suzuki Ertiga (With Luggage Roof Carrier)">
                    Maruti Suzuki Ertiga (With Luggage Roof Carrier · 6-7 Pax)
                  </option>
                  <option value="Mahindra Thar 4x4 (Mountain Explorer)">
                    Mahindra Thar 4x4 Mountain Jeep (Hill & Ghat Special · 4 Pax)
                  </option>
                  <option value="Wedding & Marriage Decorated Car Rental">
                    Wedding & Marriage Decorated Car (Real Flowers & Ribbons)
                  </option>
                  <option value="Toyota Innova Crysta (Captain Seats)">
                    Toyota Innova Crysta (7-Seater Luxury Highway Cruiser)
                  </option>
                  <option value="Force Tempo Traveller (12 / 17 Seater)">
                    Force Tempo Traveller (14-Seater AC Pushback Van)
                  </option>
                </select>
              </div>

              {/* Trip Format */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Trip Format:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'One Way Drop',
                    'Round Trip',
                    'Airport Transfer',
                    'Local 8-Hour Rental'
                  ].map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setTripType(fmt)}
                      className={`p-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer text-center ${
                        tripType === fmt
                          ? 'bg-[#1B314B] border-[#D4A853] text-[#D4A853]'
                          : 'bg-[#071A2B] border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* From and To (Free Text Inputs as requested: e.g. Trichy to Chennai) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4A853]" />
                    <span>From (Pickup Location) *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="e.g. Trichy (Cantonment / Junction / Srirangam)"
                    className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4A853]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4A853]" />
                    <span>To (Destination) *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={dropDestination}
                    onChange={(e) => setDropDestination(e.target.value)}
                    placeholder="e.g. Chennai / Madurai / Kodaikanal / TRZ Airport"
                    className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4A853]"
                  />
                </div>
              </div>

              {/* Travel Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4A853]" />
                    <span>Travel Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4A853]" />
                      <span>Pickup Time *</span>
                    </label>
                    <span className="text-[10px] text-[#D4A853]">Choose Clock</span>
                  </div>
                  <input
                    type="time"
                    required
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853] [color-scheme:dark] cursor-pointer font-medium"
                  />
                  <div className="flex flex-wrap items-center gap-1 pt-1">
                    {['06:00', '09:00', '13:30', '17:00', '21:30'].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setPickupTime(preset)}
                        className={`px-1.5 py-0.5 rounded text-[10px] border transition-colors cursor-pointer ${
                          pickupTime === preset
                            ? 'bg-[#D4A853] text-[#071A2B] border-[#D4A853] font-bold'
                            : 'bg-[#1B314B]/40 text-slate-300 border-slate-700 hover:text-white'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D4A853]" />
                    <span>Passengers *</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="40"
                    value={passengersCount}
                    onChange={(e) => setPassengersCount(parseInt(e.target.value) || 1)}
                    className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                  />
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4A853]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Mobile Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. +91 94431 23456"
                    className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4A853]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Specific Pickup Landmark / Flight Details / Extra Luggage:
                </label>
                <textarea
                  rows={2}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="e.g. Pickup near Cantonment central bus stand, 4 large suitcases, need AC on hill road..."
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-4 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                />
              </div>

              {/* Notice: No price estimation shown as explicitly commanded by user! */}
              <div className="p-3.5 rounded-2xl bg-[#071A2B] border border-[#D4A853]/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">
                    Transparent Tariff Policy · Zero advance hidden surcharge
                  </span>
                </div>
                <span className="text-[#D4A853] font-semibold text-[11px] hidden sm:block">
                  Driver & Vehicle details dispatched via WhatsApp
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Cab Booking</span>
                </button>

                <button
                  type="button"
                  onClick={sendWhatsAppBooking}
                  className="sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>
            </form>
          ) : (
            /* Booking Confirmation Screen - NO PRICE DISPLAYED AS COMMANDED */
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white">
                Cab Booking Logged Successfully!
              </h4>

              <div className="p-4 rounded-2xl bg-[#071A2B] border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">Vehicle:</span>
                  <span className="font-bold text-white">{selectedVehicle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Route:</span>
                  <span className="font-bold text-[#D4A853]">{pickupLocation} → {dropDestination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Date & Time:</span>
                  <span className="font-semibold text-white">{travelDate} at {pickupTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Passenger:</span>
                  <span className="font-semibold text-white">{customerName || 'Traveller'} ({customerPhone})</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#D4A853] font-bold">{customerName || 'Traveller'}</span>! Our dispatch team at Cantonment, Trichy is assigning your chauffeur. Driver number and vehicle registration will be sent to your phone.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={sendWhatsAppBooking}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Ticket to WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1B314B] text-slate-200 text-xs font-semibold hover:bg-[#1B314B]/80 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
