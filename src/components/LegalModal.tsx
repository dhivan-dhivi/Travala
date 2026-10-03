import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  policyType: 'privacy' | 'terms' | 'cancellation' | 'refund' | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, policyType }) => {
  if (!isOpen || !policyType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#08131F] border border-[#D4A853]/40 rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#1B314B] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {policyType === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4A853]">
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy & Data Protection</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Privacy Policy</h3>
            <p className="text-xs text-slate-400">Effective Date: October 2026 · {siteConfig.brandName}</p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                At {siteConfig.brandName}, we value your privacy. We only collect essential contact information (name, mobile number, email, and pickup address) required to organize your travel bookings, vehicle dispatch, and permit coordination.
              </p>
              <h4 className="font-bold text-white pt-2">Information Use & Protection</h4>
              <p>
                Your phone number is shared strictly with your assigned chauffeur 2 hours prior to scheduled departure. We never sell or distribute your private travel records or customer contacts to third-party marketing companies.
              </p>
              <h4 className="font-bold text-white pt-2">Secure Communications</h4>
              <p>
                All booking inquiries and WhatsApp communications are handled directly by our certified travel staff located at our Cantonment, Trichy office.
              </p>
            </div>
          </div>
        )}

        {policyType === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4A853]">
              <FileText className="w-4 h-4" />
              <span>Terms of Service</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Travel Terms & Conditions</h3>
            <p className="text-xs text-slate-400">Applicable to all car rentals and holiday packages</p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                1. <strong>Outstation Distance Calculation:</strong> Outstation cab tariffs operate on standard calendar day increments with minimum running criteria (250 km or 300 km depending on vehicle class).
              </p>
              <p>
                2. <strong>Tolls & Permits:</strong> State border permits, national highway toll gates, and public parking fees are payable as incurred or bundled into all-inclusive packages as specified in your quotation.
              </p>
              <p>
                3. <strong>Safe Driving Standards:</strong> In compliance with highway safety laws, our drivers maintain speed limits, take mandatory rest breaks on long night journeys, and reserve the right to avoid hazardous unapproved ghat off-roading.
              </p>
              <p>
                4. <strong>Passenger Conduct:</strong> Smoking, tobacco use, and alcohol consumption inside our vehicles are strictly prohibited to ensure pristine hygiene for all succeeding travellers.
              </p>
            </div>
          </div>
        )}

        {policyType === 'cancellation' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4A853]">
              <ShieldCheck className="w-4 h-4" />
              <span>Fair Cancellation</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Cancellation Policy</h3>
            <p className="text-xs text-slate-400">Zero penalty on early notice</p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                • <strong>Airport Transfers & Local City Cabs:</strong> Free cancellation up to 4 hours prior to scheduled flight arrival or pickup time.
              </p>
              <p>
                • <strong>Outstation Car Rentals:</strong> Free cancellation up to 6 hours prior to vehicle departure from our Trichy garage.
              </p>
              <p>
                • <strong>Customized Holiday Packages:</strong> Hotel accommodations and private houseboats booked through third-party resort partners adhere to individual resort cancellation schedules, which are clearly conveyed in your itinerary voucher.
              </p>
              <p>
                • <strong>Flight Delays:</strong> In the event of airline schedule changes or delays at Trichy Airport (TRZ), your booking is automatically adjusted with zero penalty.
              </p>
            </div>
          </div>
        )}

        {policyType === 'refund' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4A853]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Refund Guarantee</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Refund Policy</h3>
            <p className="text-xs text-slate-400">Fast digital settlement</p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                • Any eligible token deposit refund will be processed back to the original UPI (Google Pay / PhonePe) or bank account within 24 to 48 hours of cancellation request approval.
              </p>
              <p>
                • In the rare event of mechanical vehicle malfunction that cannot be rectified within 45 minutes, a replacement vehicle from our Trichy fleet will be immediately dispatched or a prorated trip refund provided.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#D4A853] text-[#071A2B] text-xs font-bold uppercase tracking-wider hover:bg-[#e4bb69] transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
