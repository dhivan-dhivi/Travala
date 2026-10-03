import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBox } from './components/SearchBox';
import { TrustStrip } from './components/TrustStrip';
import { UniqueRouteVisualizer } from './components/UniqueRouteVisualizer';
import { FleetSection } from './components/FleetSection';
import { FleetSlider } from './components/FleetSlider';
import { WeddingCarsSection } from './components/WeddingCarsSection';
import { AirportTransferSection } from './components/AirportTransferSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PilgrimageSection } from './components/PilgrimageSection';
import { CorporateTravel } from './components/CorporateTravel';
import { ReviewsAndTrust } from './components/ReviewsAndTrust';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModal';
import { Vehicle } from './data/travelData';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [introStarted, setIntroStarted] = useState<boolean>(false);

  // Fast Booking Desk states
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingDefaultItem, setBookingDefaultItem] = useState<string>('');
  const [bookingInitialData, setBookingInitialData] = useState<any>(null);

  // Legal Modal states
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | 'cancellation' | 'refund' | null>(null);

  // Handlers
  const handleOpenBooking = (type: string = 'cab', defaultItem?: string, data?: any) => {
    if (defaultItem) setBookingDefaultItem(defaultItem);
    if (data) setBookingInitialData(data);
    setBookingModalOpen(true);
  };

  const handleSearchSubmit = (tab: 'cab' | 'airport' | 'special', data: any) => {
    if (tab === 'cab') {
      handleOpenBooking('cab', data.vehicle || `${data.from} to ${data.to}`, data);
    } else if (tab === 'airport') {
      handleOpenBooking('airport', `${data.airport} (${data.direction === 'pickup' ? 'Arrival Pickup' : 'Departure Drop'})`, data);
    } else {
      handleOpenBooking('special', data.vehicle, data);
    }
  };

  const handleBookVehicle = (veh: Vehicle) => {
    handleOpenBooking('cab', veh.name, { vehicle: veh.name });
  };

  const handleOpenLegal = (type: 'privacy' | 'terms' | 'cancellation' | 'refund') => {
    setPolicyType(type);
    setLegalModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreloaderComplete = () => {
    setLoading(false);
    setIntroStarted(true);
  };

  return (
    <div className={`min-h-screen bg-[#071A2B] text-slate-100 flex flex-col font-sans selection:bg-[#D4A853]/30 selection:text-[#F5F1E8] ${
      introStarted ? 'animate-page-intro' : ''
    }`}>
      {/* Travel-themed Animated Preloader with High Visibility Logo & Animated SVG Car Path */}
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Sticky Navigation Bar with Maximized Inner Logo */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Full-screen Hero Section with Clean Animated Rotating Headline */}
        <Hero
          onExploreClick={() => scrollToSection('car-showcase')}
          onPlanClick={() => handleOpenBooking('cab')}
        />

        {/* Floating Smart Travel Search Box for Cabs, Airport & Special Hire */}
        <SearchBox onSearchSubmit={handleSearchSubmit} />

        {/* Trust & Business Highlights Strip */}
        <div className="mt-8">
          <TrustStrip />
        </div>

        {/* Direct Highway Corridors from Trichy Visualizer */}
        <UniqueRouteVisualizer
          onSelectRoute={(stopId) => handleOpenBooking('cab', `Highway Route: ${stopId.toUpperCase()}`)}
        />

        {/* Interactive One-by-One Fleet Vehicle Slider (Replaces Outstation Routes) */}
        <FleetSlider onBookVehicle={handleBookVehicle} />

        {/* Verified Travel Fleet Grid (Swift Dzire, Ertiga with Carrier, Thar 4x4, Innova Crysta & Tempo) */}
        <FleetSection onBookVehicle={handleBookVehicle} />

        {/* Wedding Flower Decorated Cars & Mahindra Thar 4x4 Mountain Rides */}
        <WeddingCarsSection
          onBookWedding={(carName) => handleOpenBooking('cab', carName, { vehicle: carName })}
        />

        {/* Trichy International Airport (TRZ) Transfers 24/7 */}
        <AirportTransferSection
          onBookAirportTransfer={() => handleOpenBooking('airport', 'Trichy International Airport (TRZ) Transfer')}
        />

        {/* Why Choose Us - Central Emblem with Surrounding Travel Pillars */}
        <WhyChooseUs />

        {/* Temple & Pilgrimage Outstation Cab Runs (Srirangam, Thanjavur, Madurai, Rameswaram) */}
        <PilgrimageSection
          onBookPilgrimage={(templeName) => handleOpenBooking('cab', `Temple Run: ${templeName}`)}
        />

        {/* Corporate Mobility Solutions */}
        <CorporateTravel
          onCorporateEnquiry={() => handleOpenBooking('cab', 'Corporate Mobility Contract')}
        />

        {/* Google Reviews Style Trust Section with Verified Passenger Feedback */}
        <ReviewsAndTrust />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Cantonment Trichy Head Office Contact Section & Callback Enquiry */}
        <ContactSection />
      </main>

      {/* Premium Footer with Clean Legal Layout & Brandbolt Agency Clickable Credit */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Floating Actions (Fixed WhatsApp + Mobile Bottom Action Bar <15% viewport height) */}
      <FloatingActions onOpenBooking={() => handleOpenBooking('cab')} />

      {/* Fast Booking Desk Modal (Cars choose, From & To type, ZERO price display) */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultItemTitle={bookingDefaultItem}
        initialData={bookingInitialData}
      />

      {/* Legal & Policy Modals */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        policyType={policyType}
      />
    </div>
  );
}
