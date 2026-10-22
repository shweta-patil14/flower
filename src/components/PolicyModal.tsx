import React from 'react';
import { X, ShieldCheck, RefreshCw, Lock, Mail } from 'lucide-react';

export type PolicyType = 'terms' | 'refund' | 'privacy' | 'contact' | 'about';

interface PolicyModalProps {
  type: PolicyType | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, isOpen, onClose }) => {
  if (!isOpen || !type) return null;

  const content = {
    about: {
      title: "About Swaraj Florist 'N' Flower Decorators",
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent mb-2" />,
      body: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed font-light">
          <p>
            Founded as a premier floral studio and styling atelier, Swaraj Florist 'N' Flower Decorators specializes in exquisite botanical gifting, wedding decor, festive arrangements, and celebratory flower architecture.
          </p>
          <p>
            Every single bloom is ethically cultivated, freshly sourced, and conditioned with care by expert florists to ensure vibrant petals and enduring fragrance.
          </p>
          <div className="p-3 bg-brand-surface border border-brand-border text-brand-dark font-medium">
            Studio &amp; Workshop: Ram Mandir Road, Sangli 416416 &bull; Same-Day Flower Delivery &bull; Decorators for All Celebrations.
          </div>
        </div>
      )
    },
    terms: {
      title: 'Terms of Service',
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent mb-2" />,
      body: (
        <div className="space-y-3 text-xs text-neutral-600 leading-relaxed font-light">
          <p>
            By ordering from Swaraj Florist 'N' Flower Decorators, you agree to our premium quality and delivery standards. Due to the perishable and artisanal nature of botanical arrangements, each order is carefully prepared upon order confirmation.
          </p>
          <p>
            Seasonal substitutions may occasionally occur if a specific petal variety fails our master florist’s morning vitality inspection; any substituted stem will always be of equal or greater botanical rarity.
          </p>
        </div>
      )
    },
    refund: {
      title: 'Refund & Quality Guarantee',
      icon: <RefreshCw className="w-6 h-6 text-brand-accent mb-2" />,
      body: (
        <div className="space-y-3 text-xs text-neutral-600 leading-relaxed font-light">
          <p>
            We stand by our 5-Day Freshness Guarantee. If your floral arrangement does not arrive in pristine condition, submit a photograph to our concierge within 24 hours of delivery.
          </p>
          <p>
            We will immediately orchestrate a complimentary replacement delivery or issue a full boutique credit.
          </p>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      icon: <Lock className="w-6 h-6 text-brand-accent mb-2" />,
      body: (
        <div className="space-y-3 text-xs text-neutral-600 leading-relaxed font-light">
          <p>
            Your discretion is paramount. Recipient contact information, handwritten note card messages, and client billing addresses are stored with end-to-end 256-bit encryption.
          </p>
          <p>
            We never share or monetize customer dossiers under any circumstance.
          </p>
        </div>
      )
    },
    contact: {
      title: 'Contact Atelier Concierge',
      icon: <Mail className="w-6 h-6 text-brand-accent mb-2" />,
      body: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed font-light">
          <p>
            Our bespoke floristry concierge is available daily from 8:00 AM to 10:00 PM to assist with wedding floral architecture, private dining setups, or custom monogram hatbox requests.
          </p>
          <div className="space-y-2 border-t border-brand-border pt-3">
            <p className="text-brand-dark font-medium">Studio &amp; Workshop: Ram Mandir Road, Sangli 416416</p>
            <p className="text-brand-dark font-medium">Email: concierge@swarajflorist.com</p>
            <p className="text-brand-dark font-medium">Concierge Direct: +91 98220 12345</p>
            <p className="text-neutral-500">Fast local delivery &amp; store pickup available from Ram Mandir Road, Sangli.</p>
          </div>
        </div>
      )
    }
  }[type];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-brand-surface-card max-w-lg w-full border border-brand-border shadow-2xl relative p-6 sm:p-8 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          {content.icon}
          <h3 className="font-serif text-2xl text-brand-dark font-normal">
            {content.title}
          </h3>
        </div>

        {content.body}

        <div className="mt-6 pt-4 border-t border-brand-border text-center">
          <button onClick={onClose} className="btn-luxury cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
