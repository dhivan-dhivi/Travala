export interface RouteItem {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  popularFor: string;
  tag: string;
  image: string;
  recommendedCar: string;
  description: string;
}

export interface Vehicle {
  id: string;
  name: string;
  modelCode?: string;
  category: 'sedan' | 'suv' | 'thar' | 'wedding' | 'tempo' | 'premium';
  categoryLabel: string;
  tagline: string;
  passengers: number;
  luggage: number;
  ac: boolean;
  transmission: 'Manual' | 'Automatic';
  fuelType: 'Diesel' | 'Petrol';
  features: string[];
  image: string;
  realPhotoLabel?: string;
  recommendedFor: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  tripType: string;
  rating: number;
  date: string;
  review: string;
  avatarText: string;
  routeTaken: string;
  vehicleUsed: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'cabs' | 'airport' | 'wedding' | 'booking';
}

export const vehiclesData: Vehicle[] = [
  {
    id: 'swift-dzire',
    name: 'Maruti Suzuki Swift Dzire (Prime AC Sedan)',
    category: 'sedan',
    categoryLabel: 'Prime Sedan',
    tagline: 'Trichy’s most reliable & economical outstation cab for 1 to 4 passengers',
    passengers: 4,
    luggage: 2,
    ac: true,
    transmission: 'Manual',
    fuelType: 'Diesel',
    realPhotoLabel: 'Fleet Car (Prime Tourist Sedan)',
    features: [
      'Chilled Dual AC',
      'Spotless White Tourist Sedan',
      'Clean & Sanitized Seat Covers',
      'Comfortable Rear Legroom',
      'USB Mobile Fast Charging',
      'Experienced Polite Chauffeur'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/2026_Suzuki_Dzire_GL_in_Arctic_White_Pearl_01.jpg',
    recommendedFor: 'Trichy to Chennai / Madurai, TRZ Airport Transfers, Local Outstation & Daily Hire',
    highlights: ['Best Mileage & Cost-effective', 'Available 24/7 on 15 mins notice', 'Smooth Highway Drive']
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga (With Luggage Roof Carrier)',
    category: 'suv',
    categoryLabel: 'Family SUV (6-7 Pax)',
    tagline: 'Spacious 6-seater family cab with top luggage carrier rack for bulky suitcases',
    passengers: 6,
    luggage: 5,
    ac: true,
    transmission: 'Manual',
    fuelType: 'Diesel',
    realPhotoLabel: 'Fleet Car (Family SUV with Carrier)',
    features: [
      'Sturdy Aluminum Roof Luggage Carrier for large bags',
      'Blower AC Vents for 2nd & 3rd Rows',
      'Pushback Reclining Seats',
      'Spacious Headroom & Boot',
      'Smooth Highway Suspension'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/2024_Suzuki_Ertiga_1.5_GLX_Hybrid_in_Snow_White_Pearl%2C_front_right%2C_06-16-2024.jpg',
    recommendedFor: 'Family Airport Pickups with Heavy Luggage, Kodaikanal & Ooty Hill Trips',
    highlights: ['Roof Carrier for Extra Bags', 'Comfortable 6-7 Seating', 'Zero Surcharge on Night Rides']
  },
  {
    id: 'mahindra-thar',
    name: 'Mahindra Thar 4x4 (Mountain Explorer)',
    category: 'thar',
    categoryLabel: '4x4 Mountain Jeep',
    tagline: 'Commanding black 4x4 adventure SUV for hill stations, ghat roads & scenic viewpoints',
    passengers: 4,
    luggage: 2,
    ac: true,
    transmission: 'Manual',
    fuelType: 'Diesel',
    realPhotoLabel: 'Fleet Special (Black 4x4 Mountain Jeep)',
    features: [
      'High Ground Clearance & 4x4 All-Terrain Power',
      'All-Weather Hardtop with Chilled AC',
      'Ideal for Kolli Hills 70 Hairpin Bends',
      'Commanding Stance for Photography & Hill Roads',
      'Ghat-Trained Expert Hill Chauffeur'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mahindra_Thar_Photoshoot_at_Perupalem_Beach_%28West_Godavari_District%2C_AP%2C_India%29_Djdavid.jpg',
    recommendedFor: 'Kolli Hills, Kodaikanal, Yercaud, Valparai & Western Ghat Off-Road Scenic Drives',
    highlights: ['Iconic 4x4 Hill Explorer', 'Photogenic Mountain Rides', 'Rugged All-Weather Capability']
  },
  {
    id: 'wedding-car',
    name: 'Wedding & Marriage Decorated Car',
    category: 'wedding',
    categoryLabel: 'Marriage Special',
    tagline: 'Bridal entry & groom cars decorated with fresh flower bouquets, ribbons & garlands',
    passengers: 4,
    luggage: 3,
    ac: true,
    transmission: 'Manual',
    fuelType: 'Diesel',
    realPhotoLabel: 'Flower Decorated Marriage Car',
    features: [
      'Fresh Natural Flower Bouquet on Bonnet',
      'Matching Satin Ribbons & Door Garlands',
      'Uniformed Professional Chauffeur in Crisp Attire',
      'Red Carpet Punctual Groom / Bride Entry',
      'Available with Swift Dzire, Innova Crysta or Luxury Sedan'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    recommendedFor: 'Marriage Muhurtham, Reception Entry, Bridal Pickup, Temple Kalyana Mandapams',
    highlights: ['Fresh Floral Arrangements Included', 'Dedicated Wedding Day Chauffeur', 'Special VIP Groom Treatment']
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta (Luxury Captain Seats)',
    category: 'premium',
    categoryLabel: 'Luxury Highway Cruiser',
    tagline: 'The undisputed gold standard for luxury highway travel, corporate VIPs & joint families',
    passengers: 7,
    luggage: 4,
    ac: true,
    transmission: 'Manual',
    fuelType: 'Diesel',
    realPhotoLabel: 'Fleet Car (Innova Crysta Luxury)',
    features: [
      'Ultra-Plush Captain Seats with Armrests',
      'Dual Zone Automatic Climate Control',
      'Blemish-Free Highway Ride Quality',
      'Generous Luggage Capacity',
      'Senior Citizen Safe Boarding Height'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg',
    recommendedFor: 'Long-distance Outstation trips to Bangalore, Chennai, Kerala, VIP Delegates & NRI visits',
    highlights: ['Supreme Comfort on 500+ km Drives', 'Top Safety Ratings', 'Silent Cabin']
  },
  {
    id: 'tempo-traveller',
    name: 'Force Tempo Traveller (Pushback AC Van)',
    category: 'tempo',
    categoryLabel: 'Group Travel Van',
    tagline: 'Pushback luxury seats, high-roof walkthrough cabin & audio entertainment for groups',
    passengers: 14,
    luggage: 8,
    ac: true,
    transmission: 'Manual',
    fuelType: 'Diesel',
    realPhotoLabel: 'Fleet Car (Tempo Traveller 14-Seater)',
    features: [
      'Luxury Pushback Reclining Seats',
      'High-Roof Walkthrough Cabin',
      'Dedicated AC Vents for Every Row',
      'LCD Screen with Surround Sound Audio',
      'Large Luggage Boot Space'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Force_Traveller_Luxury.jpg',
    recommendedFor: 'Joint Family Tours, Pilgrimage Yatras, College Trips, Marriage Guest Shuttles',
    highlights: ['Ideal for 10-15 Passengers', 'Comfortable Long Distances', 'Pushback Reclining Seats']
  }
];

export const popularRoutesData: RouteItem[] = [
  {
    id: 'route-trichy-chennai',
    from: 'Trichy',
    to: 'Chennai',
    distance: '330 km',
    duration: '5.5 Hours via NH 45 (GST Road)',
    popularFor: 'Business, Airport, Medical & IT Parks',
    tag: 'Top Highway Corridor',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    recommendedCar: 'Swift Dzire / Innova Crysta',
    description: 'Smooth 4-lane highway drive with doorstep pickup in Trichy and drop anywhere in Chennai (OMR, Guindy, Airport, Central).'
  },
  {
    id: 'route-trichy-madurai',
    from: 'Trichy',
    to: 'Madurai',
    distance: '135 km',
    duration: '2.5 Hours via NH 38',
    popularFor: 'Meenakshi Amman Temple & AIIMS / City Hub',
    tag: 'Quick Outstation',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    recommendedCar: 'Swift Dzire / Ertiga',
    description: 'Convenient same-day return or one-way drop for temple darshan and business appointments.'
  },
  {
    id: 'route-trichy-kodaikanal',
    from: 'Trichy',
    to: 'Kodaikanal',
    distance: '198 km',
    duration: '4.5 Hours via Dindigul / Batlagundu',
    popularFor: 'Misty Hill Station, Kodai Lake & Pine Forest',
    tag: 'Hill Station Route',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    recommendedCar: 'Mahindra Thar 4x4 / Ertiga / Innova',
    description: 'Scenic climb through Batlagundu ghat road with experienced hill drivers who ensure zero motion sickness.'
  },
  {
    id: 'route-trichy-rameswaram',
    from: 'Trichy',
    to: 'Rameswaram & Dhanushkodi',
    distance: '228 km',
    duration: '4.5 Hours via Pudukkottai / Karaikudi',
    popularFor: 'Pamban Sea Bridge & 22 Theertham Darshan',
    tag: 'Spiritual Highway',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    recommendedCar: 'Swift Dzire / Innova Crysta',
    description: 'Drive over the sea across Pamban bridge with senior-citizen pacing and seamless temple drop.'
  },
  {
    id: 'route-trichy-thanjavur',
    from: 'Trichy',
    to: 'Thanjavur & Kumbakonam',
    distance: '55 km – 90 km',
    duration: '1 to 2 Hours via NH 83',
    popularFor: 'Brihadisvara Big Temple & Navagraha Circuit',
    tag: 'Heritage & Temple Run',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    recommendedCar: 'Swift Dzire Sedan / Ertiga',
    description: 'Fast 1-hour drive from Trichy to Thanjavur Big Temple and Kumbakonam Navagraha temples.'
  },
  {
    id: 'route-trichy-bangalore',
    from: 'Trichy',
    to: 'Bangalore (Bengaluru)',
    distance: '345 km',
    duration: '6.5 Hours via Karur / Namakkal / Salem',
    popularFor: 'IT Hub, Airport & Family Travel',
    tag: 'Interstate Long Drive',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    recommendedCar: 'Toyota Innova Crysta / Swift Dzire',
    description: 'Smooth interstate 4-lane expressway connection with doorstep pickup in Trichy and drop across Electronic City, Whitefield or Bangalore Airport.'
  },
  {
    id: 'route-trichy-coimbatore',
    from: 'Trichy',
    to: 'Coimbatore',
    distance: '215 km',
    duration: '4.5 Hours via Karur / Kangeyam / Palladam',
    popularFor: 'Textile Hub, Isha Yoga & Ooty Transit',
    tag: 'Industrial Corridor',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    recommendedCar: 'Swift Dzire / Innova Crysta',
    description: 'Punctual corporate and family cab connecting Trichy to Manchester of South India.'
  },
  {
    id: 'route-trichy-ooty',
    from: 'Trichy',
    to: 'Ooty & Coonoor (Nilgiris)',
    distance: '275 km',
    duration: '6.5 Hours via Mettupalayam Ghats',
    popularFor: 'Tea Gardens, Doddabetta & Mountain Air',
    tag: 'Ghat Road Hill Tour',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
    recommendedCar: 'Mahindra Thar 4x4 / Innova Crysta',
    description: 'Expert ghat navigation with stops at viewpoints and toy train stations.'
  }
];

export const airportTransferFeatures = [
  {
    title: 'Trichy International Airport (TRZ) 24/7',
    desc: 'Round-the-clock airport pickup and drop connecting all flight schedules (Air India Express, IndiGo, Scoot, SriLankan Airlines, Batik Air, etc.).'
  },
  {
    title: 'Live Flight Tracking',
    desc: 'We monitor your incoming flight in real time so our driver is waiting at the arrival terminal even if your flight is delayed.'
  },
  {
    title: 'Name Board & Meet & Greet',
    desc: 'Chauffeur waits at the arrival gate with your name board, assists with heavy luggage, and leads you directly to your clean vehicle.'
  },
  {
    title: 'Transparent Fixed Fares',
    desc: 'No hidden surge pricing, night charges, or surprise extras. Transparent airport parking and toll charges included.'
  },
  {
    title: 'Doorstep Pickup from Anywhere in Trichy',
    desc: 'From Cantonment, Thillai Nagar, KK Nagar, Srirangam, NIT Trichy, BHEL Township, or outstations direct to TRZ departure gate.'
  }
];

export const pilgrimageDestinations = [
  {
    name: 'Srirangam Sri Ranganathaswamy Temple',
    city: 'Trichy',
    distance: '10 km from Central Trichy',
    significance: 'World\'s largest functioning Hindu temple complex with 21 majestic gopurams.',
    darshanTip: 'Doorstep cab pickup for early morning Viswaroopa Seva at 6:00 AM.'
  },
  {
    name: 'Rockfort Ucchi Pillayar Temple',
    city: 'Trichy',
    distance: '4 km from Central Trichy',
    significance: 'Historic 7th-century rock cut fortress perched atop 273-foot ancient rock.',
    darshanTip: 'Driver waits near base temple until you finish the sunset climb.'
  },
  {
    name: 'Brihadisvara Temple (Big Temple)',
    city: 'Thanjavur',
    distance: '55 km (1 hour drive from Trichy)',
    significance: '1,000-year-old Chola architectural marvel and UNESCO World Heritage Site.',
    darshanTip: 'Quick 1-hour cab drive; driver assists with footwear stall and temple timings.'
  },
  {
    name: 'Madurai Meenakshi Sundareswarar',
    city: 'Madurai',
    distance: '135 km (2.5 hours drive from Trichy)',
    significance: 'Historic twin temple renowned for towering sculptured gopurams.',
    darshanTip: 'Convenient same-day round trip cab from Trichy.'
  },
  {
    name: 'Ramanathaswamy Temple & Dhanushkodi',
    city: 'Rameswaram',
    distance: '228 km (4.5 hours drive from Trichy)',
    significance: 'One of the 12 sacred Jyotirlingas, famous for taking holy bath in 22 teertham wells.',
    darshanTip: 'Driver guides you sequentially through the 22 wells and luggage change rooms.'
  },
  {
    name: 'Palani Dhandayuthapani Murugan',
    city: 'Palani',
    distance: '155 km (3 hours drive from Trichy)',
    significance: 'Third among the six abodes (Arupadai Veedu) of Lord Murugan.',
    darshanTip: 'Senior citizen parking assistance right beside winch / rope-car counter.'
  }
];

export const corporateServices = [
  {
    title: 'Executive Chauffeur Car Rental',
    desc: 'Impeccable Sedans and Innova Crystas dedicated for visiting executives, VIP clients, and directors with professional English/Tamil speaking drivers.'
  },
  {
    title: 'Trichy Airport Corporate Transfers',
    desc: 'Zero-delay airport pick and drop for business delegations with flight-tracking, sign-boards, and direct corporate billing.'
  },
  {
    title: 'Daily Employee Commute Solutions',
    desc: 'Structured employee pickup/drop services for IT companies, manufacturing plants in Trichy, BHEL ancillary units, and educational institutes.'
  },
  {
    title: 'Conferences & Events Fleet Management',
    desc: 'End-to-end transportation for national conferences, trade shows, campus recruitments at NIT/IIM Trichy, and doctor conventions.'
  },
  {
    title: 'GST Invoicing & Monthly Account Billing',
    desc: '100% tax compliant GST invoices, detailed trip logs, itemized digital vouchers, and dedicated corporate account relationship managers.'
  },
  {
    title: 'Long-Term Corporate Fleet Leasing',
    desc: 'Monthly or yearly vehicle lease arrangements with maintained cars and dedicated replacement guarantee in case of service.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    customerName: 'Senthil Kumar & Family',
    location: 'KK Nagar, Trichy',
    tripType: 'Trichy to Kodaikanal Hill Trip',
    rating: 5,
    date: 'February 2026',
    review: 'Booked their White Ertiga with luggage roof carrier for our family trip to Kodaikanal. Driver Murali drove exceptionally smooth on the ghat hairpin bends. The carrier on top was super helpful for our 5 suitcases. Clean car and prompt 5:30 AM arrival at our doorstep in KK Nagar!',
    avatarText: 'SK',
    routeTaken: 'Trichy → Kodaikanal → Trichy',
    vehicleUsed: 'Maruti Ertiga (With Carrier)'
  },
  {
    id: 't-2',
    customerName: 'Karthik Subramanian (NRI)',
    location: 'Singapore / Srirangam',
    tripType: 'Trichy Airport (TRZ) & Outstation Cab',
    rating: 5,
    date: 'March 2026',
    review: 'Landed at Trichy Airport on the midnight Scoot flight from Singapore. Driver was waiting right outside arrival with my name sign. Used their Swift Dzire for 7 days straight for temple visits across Thanjavur and Pudukkottai. Completely honest, polite driver and transparent billing.',
    avatarText: 'KS',
    routeTaken: 'TRZ Airport → Srirangam & Outstation',
    vehicleUsed: 'Swift Dzire (Prime Sedan)'
  },
  {
    id: 't-3',
    customerName: 'Venkatesan & Revathi',
    location: 'Thillai Nagar, Trichy',
    tripType: 'Wedding / Marriage Car Rental',
    rating: 5,
    date: 'January 2026',
    review: 'Hired their wedding car for my sister’s marriage at Trichy Cantonment hall. The car decoration with fresh roses, lilies and ribbons was stunning and completed right on schedule. Chauffeur was in spotless uniform and drove the couple with utmost grace. Highly recommended for marriages!',
    avatarText: 'VR',
    routeTaken: 'Marriage Hall & Temple Reception',
    vehicleUsed: 'Flower Decorated Marriage Car'
  },
  {
    id: 't-4',
    customerName: 'Praveen Chandran',
    location: 'Coimbatore',
    tripType: 'Kolli Hills Hairpin Ride',
    rating: 5,
    date: 'December 2025',
    review: 'Booked their Black Mahindra Thar 4x4 for Kolli hills road trip. What a monster machine! The driver was a master of the 70 hairpin bends. Super fun, safe, and memorable trip.',
    avatarText: 'PC',
    routeTaken: 'Trichy → Kolli Hills 70 Bends',
    vehicleUsed: 'Mahindra Thar 4x4 (Mountain Explorer)'
  }
];

export const faqData: FAQItem[] = [
  {
    category: 'general',
    question: 'What types of travel vehicles do you provide in Trichy?',
    answer: 'We provide pure travel vehicle hire with professional drivers: White Maruti Swift Dzire Sedans, Maruti Ertiga with top luggage carrier, Mahindra Thar 4x4 for hill stations, Toyota Innova Crysta, Force Tempo Traveller (12/17 seater), and custom Flower-Decorated Wedding Cars.'
  },
  {
    category: 'airport',
    question: 'Do you provide 24/7 airport pickup and drop at Trichy International Airport (TRZ)?',
    answer: 'Yes, 24 hours a day, 7 days a week! We track all domestic and international flights (Singapore, Malaysia, Dubai, Colombo, etc.). Our chauffeur waits at the arrival terminal with a personalized name board.'
  },
  {
    category: 'cabs',
    question: 'How do I book an outstation cab from Trichy to Chennai, Madurai, or Bangalore?',
    answer: 'Simply use our Fast Booking Desk above or message us on WhatsApp with your pickup location, drop destination, date, and preferred car. Our travel coordinator will immediately confirm vehicle availability and driver details.'
  },
  {
    category: 'wedding',
    question: 'Do you offer flower decorated cars for marriages and functions?',
    answer: 'Yes! We specialize in wedding car rentals featuring fresh real flower bouquets, satin ribbon garnishing, and uniformed chauffeurs for bridal entry, temple muhurthams, and reception drop.'
  },
  {
    category: 'cabs',
    question: 'Can I rent the Mahindra Thar 4x4 for hill stations like Kolli Hills or Kodaikanal?',
    answer: 'Yes! Our Black Mahindra Thar 4x4 is specially maintained for ghat roads, Kolli Hills 70 hairpin bends, Kodaikanal, Ooty, and adventure sightseeing with an experienced hill driver.'
  },
  {
    category: 'booking',
    question: 'How are toll gates, state permits, and driver allowance handled?',
    answer: 'We offer completely transparent tariffs. Tolls, state road taxes, and driver daily bata can be included in a fixed all-inclusive package or billed at actuals with zero hidden surcharges.'
  }
];
