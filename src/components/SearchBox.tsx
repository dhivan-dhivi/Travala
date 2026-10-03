import React, { useState } from 'react';
import { Car, Plane, Heart, Calendar, Users, MapPin, Clock, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { vehiclesData } from '../data/travelData';

interface SearchBoxProps {
  onSearchSubmit: (tab: 'cab' | 'airport' | 'special', data: any) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearchSubmit }) => {
  const [activeTab, setActiveTab] = useState<'cab' | 'airport' | 'special'>('cab');

  // Outstation Cab State - Empty From & To by default as requested
  const [pickupCity, setPickupCity] = useState('');
  const [dropCity, setDropCity] = useState('');
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
  const [travelDate, setTravelDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [selectedCar, setSelectedCar] = useState('Maruti Suzuki Swift Dzire (Prime AC Sedan)');

  // Airport Transfer State - Empty address by default
  const [airportDirection, setAirportDirection] = useState<'pickup' | 'drop'>('pickup');
  const [airportName, setAirportName] = useState('Trichy International Airport (TRZ)');
  const [airportCityAddress, setAirportCityAddress] = useState('');
  const [airportDate, setAirportDate] = useState('');
  const [airportTime, setAirportTime] = useState('');
  const [airportCar, setAirportCar] = useState('Maruti Suzuki Ertiga (With Luggage Roof Carrier)');

  // Special / Wedding / 4x4 State - Empty address by default
  const [specialCategory, setSpecialCategory] = useState('Wedding & Marriage Decorated Car');
  const [specialPickup, setSpecialPickup] = useState('');
  const [specialDate, setSpecialDate] = useState('');
  const [specialDuration, setSpecialDuration] = useState('Full Day (12 Hours)');

  const handleCabSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit('cab', {
      from: pickupCity,
      to: dropCity,
      tripType,
      date: travelDate,
      time: pickupTime,
      vehicle: selectedCar,
    });
  };

  const handleAirportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit('airport', {
      from: airportDirection === 'drop' ? airportCityAddress : airportName,
      to: airportDirection === 'pickup' ? airportCityAddress : airportName,
      airport: airportName,
      direction: airportDirection,
      date: airportDate,
      time: airportTime,
      vehicle: airportCar,
    });
  };

  const handleSpecialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit('special', {
      from: specialPickup,
      to: specialCategory,
      vehicle: specialCategory,
      date: specialDate,
      duration: specialDuration,
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto -mt-16 sm:-mt-20 relative z-20 px-4 sm:px-6">
      <div className="rounded-3xl bg-[#08131F]/95 backdrop-blur-2xl border-2 border-[#D4A853]/40 shadow-2xl p-5 sm:p-7 glow-gold">
        {/* Search Engine Header & Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('cab')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'cab'
                  ? 'bg-[#D4A853] text-[#071A2B] shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-[#1B314B]/50'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Outstation Cab (One-Way / Round)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('airport')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'airport'
                  ? 'bg-[#D4A853] text-[#071A2B] shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-[#1B314B]/50'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>Trichy Airport Taxi (TRZ 24/7)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('special')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'special'
                  ? 'bg-[#D4A853] text-[#071A2B] shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-[#1B314B]/50'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Wedding Cars & 4x4 Thar</span>
            </button>
          </div>

          <div className="text-[11px] font-semibold text-[#D4A853] hidden md:flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Commercial Yellow Plate Fleet</span>
          </div>
        </div>

        {/* Tab 1: Outstation Cab Booking */}
        {activeTab === 'cab' && (
          <form onSubmit={handleCabSubmit} className="space-y-4">
            {/* Trip Type Selector */}
            <div className="flex items-center gap-3 pb-1">
              <span className="text-xs font-semibold text-slate-300">Trip Format:</span>
              <div className="inline-flex rounded-xl bg-[#071A2B] p-1 border border-slate-700">
                <button
                  type="button"
                  onClick={() => setTripType('one-way')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    tripType === 'one-way' ? 'bg-[#D4A853] text-[#071A2B]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  One Way Drop
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('round-trip')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    tripType === 'round-trip' ? 'bg-[#D4A853] text-[#071A2B]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Round Trip
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* From Input (Free type text) */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A853]" /> From (Pickup) *
                </label>
                <input
                  type="text"
                  required
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  placeholder="e.g. Trichy (Cantonment / Junction / Srirangam)"
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853] transition-colors"
                />
              </div>

              {/* To Destination Input (Free type text) */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A853]" /> To (Destination) *
                </label>
                <input
                  type="text"
                  required
                  value={dropCity}
                  onChange={(e) => setDropCity(e.target.value)}
                  placeholder="e.g. Chennai, Madurai, Kodaikanal..."
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853] transition-colors"
                />
              </div>

              {/* Vehicle Selection directly from fleet */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-[#D4A853]" /> Choose Car *
                </label>
                <select
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853] transition-colors font-medium"
                >
                  <option value="Maruti Suzuki Swift Dzire (White Tourist Taxi)">Swift Dzire (Sedan · 4 Pax)</option>
                  <option value="Maruti Suzuki Ertiga (With Luggage Roof Carrier)">Ertiga with Roof Carrier (6 Pax)</option>
                  <option value="Toyota Innova Crysta (Captain Seats)">Innova Crysta Luxury (7 Pax)</option>
                  <option value="Mahindra Thar 4x4 Off-Road Adventure Jeep">Mahindra Thar 4x4 (Hill Special)</option>
                  <option value="Force Tempo Traveller (12 / 17 Seater)">Tempo Traveller (14 Pax)</option>
                  <option value="Wedding & Marriage Decorated Car Rental">Wedding Decorated Car</option>
                </select>
              </div>

              {/* Date */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4A853]" /> Date *
                </label>
                <input
                  type="date"
                  required
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853] transition-colors"
                />
              </div>

              {/* Time with Clock Picker */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4A853]" /> Pickup Time *
                  </span>
                  <span className="text-[10px] text-[#D4A853] font-normal">Choose Clock</span>
                </label>
                <input
                  type="time"
                  required
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853] transition-colors [color-scheme:dark] cursor-pointer font-medium"
                />
                <div className="flex flex-wrap items-center gap-1 pt-0.5">
                  <span className="text-[9px] text-slate-400">Clock Presets:</span>
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
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-800/80">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Chauffeur allowance, GPS vehicle tracking & sanitized cabin included</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Book Cab in Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Airport Transfer */}
        {activeTab === 'airport' && (
          <form onSubmit={handleAirportSubmit} className="space-y-4">
            <div className="flex items-center gap-4 pb-1">
              <span className="text-xs font-semibold text-slate-300">Direction:</span>
              <div className="inline-flex rounded-xl bg-[#071A2B] p-1 border border-slate-700">
                <button
                  type="button"
                  onClick={() => setAirportDirection('pickup')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    airportDirection === 'pickup' ? 'bg-[#D4A853] text-[#071A2B]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Airport Pickup (Meet & Greet at TRZ)
                </button>
                <button
                  type="button"
                  onClick={() => setAirportDirection('drop')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    airportDirection === 'drop' ? 'bg-[#D4A853] text-[#071A2B]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Airport Drop (To TRZ Departure)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <Plane className="w-3.5 h-3.5 text-[#D4A853]" /> Airport Terminal
                </label>
                <select
                  value={airportName}
                  onChange={(e) => setAirportName(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                >
                  <option value="Trichy International Airport (TRZ)">Trichy Int'l Airport (TRZ)</option>
                  <option value="Madurai Airport (IXM)">Madurai Airport (IXM)</option>
                  <option value="Chennai Airport (MAA)">Chennai Airport (MAA)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A853]" />
                  {airportDirection === 'pickup' ? 'Drop Address in Trichy / Outstation' : 'Pickup Address in Trichy'} *
                </label>
                <input
                  type="text"
                  required
                  value={airportCityAddress}
                  onChange={(e) => setAirportCityAddress(e.target.value)}
                  placeholder="e.g. Srirangam / Cantonment / Thanjavur..."
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-[#D4A853]" /> Choose Car
                </label>
                <select
                  value={airportCar}
                  onChange={(e) => setAirportCar(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                >
                  <option value="Maruti Suzuki Swift Dzire (White Tourist Taxi)">Swift Dzire (1-3 Pax + 2 Bags)</option>
                  <option value="Maruti Suzuki Ertiga (With Luggage Roof Carrier)">Ertiga with Carrier (4-6 Pax + Heavy Bags)</option>
                  <option value="Toyota Innova Crysta (Captain Seats)">Innova Crysta VIP (6 Pax)</option>
                  <option value="Force Tempo Traveller (12 / 17 Seater)">Tempo Traveller (Group Transfer)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4A853]" /> Date *
                </label>
                <input
                  type="date"
                  required
                  value={airportDate}
                  onChange={(e) => setAirportDate(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4A853]" /> Flight Arrival/Dept Time *
                  </span>
                  <span className="text-[10px] text-[#D4A853] font-normal">Choose Clock</span>
                </label>
                <input
                  type="time"
                  required
                  value={airportTime}
                  onChange={(e) => setAirportTime(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853] [color-scheme:dark] cursor-pointer font-medium"
                />
                <div className="flex flex-wrap items-center gap-1 pt-0.5">
                  <span className="text-[9px] text-slate-400">Flight Presets:</span>
                  {['02:30', '08:15', '14:30', '19:45', '23:15'].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAirportTime(preset)}
                      className={`px-1.5 py-0.5 rounded text-[10px] border transition-colors cursor-pointer ${
                        airportTime === preset
                          ? 'bg-[#D4A853] text-[#071A2B] border-[#D4A853] font-bold'
                          : 'bg-[#1B314B]/40 text-slate-300 border-slate-700 hover:text-white'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-800/80">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#D4A853]" />
                <span>Complimentary live flight tracking · Driver holds name board at arrival gate</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Book Airport Taxi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Tab 3: Wedding & Special Cars */}
        {activeTab === 'special' && (
          <form onSubmit={handleSpecialSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-[#D4A853]" /> Service Type *
                </label>
                <select
                  value={specialCategory}
                  onChange={(e) => setSpecialCategory(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                >
                  <option value="Wedding & Marriage Decorated Car Rental">Marriage Flower Decorated Car</option>
                  <option value="Mahindra Thar 4x4 Off-Road Adventure Jeep">Mahindra Thar 4x4 (Hill Station Special)</option>
                  <option value="Force Tempo Traveller (12 / 17 Seater)">Tempo Traveller (14-Seater Group Van)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A853]" /> Function Hall / Pickup Address *
                </label>
                <input
                  type="text"
                  required
                  value={specialPickup}
                  onChange={(e) => setSpecialPickup(e.target.value)}
                  placeholder="e.g. Trichy Cantonment Marriage Hall"
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4A853]" /> Event Date *
                </label>
                <input
                  type="date"
                  required
                  value={specialDate}
                  onChange={(e) => setSpecialDate(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4A853]" /> Duration Required
                </label>
                <select
                  value={specialDuration}
                  onChange={(e) => setSpecialDuration(e.target.value)}
                  className="w-full bg-[#071A2B] border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4A853]"
                >
                  <option value="Half Day (5 Hours)">Half Day (5 Hours)</option>
                  <option value="Full Day (12 Hours)">Full Day (12 Hours)</option>
                  <option value="Multiple Days (2-3 Days)">Multiple Days (2-3 Days)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-800/80">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Includes fresh natural flower decoration, driver in crisp attire & on-time arrival</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D4A853] hover:bg-[#e4bb69] active:bg-[#c79841] text-[#071A2B] font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Book Special Vehicle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
