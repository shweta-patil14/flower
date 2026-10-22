import React, { useState } from 'react';
import { Instagram, Facebook, Pin, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenPolicyModal: (policy: 'terms' | 'refund' | 'privacy' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicyModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4500);
  };

  return (
    <footer className="bg-brand-surface border-t border-brand-border text-brand-dark pt-16 pb-8" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 3 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-14 border-b border-brand-border">
          {/* Column 1: Resources */}
          <div>
            <h4 className="font-serif text-base tracking-widest uppercase mb-4 text-brand-dark">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 font-light tracking-wide">
              <li>
                <button
                  onClick={() => onOpenPolicyModal('terms')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal('refund')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal('privacy')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal('contact')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Connect with us */}
          <div>
            <h4 className="font-serif text-base tracking-widest uppercase mb-4 text-brand-dark">
              Connect with us
            </h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4">
              Follow our daily botanical dispatch, unboxing rituals, and seasonal stem harvest.
            </p>
            <div className="flex items-center space-x-4 text-brand-dark">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all"
              >
                <Pin className="w-4 h-4" />
              </a>
            </div>

            {/* Store & Workshop Address */}
            <div className="mt-5 pt-4 border-t border-brand-border/60">
              <span className="text-[10px] uppercase tracking-widest text-brand-accent font-medium block mb-1">
                Store &amp; Workshop Address
              </span>
              <p className="text-xs text-brand-dark font-medium leading-relaxed">
                Ram Mandir Road, Sangli 416416
              </p>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="font-serif text-base tracking-widest uppercase mb-4 text-brand-dark">
              Newsletter
            </h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4">
              Subscribe for private releases, seasonal floral care journals, and invitations.
            </p>

            {subscribed ? (
              <div className="p-3 bg-neutral-100 border border-brand-border text-xs text-brand-dark flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>Thank you for joining Swaraj Florist 'N' Flower Decorators journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-brand-surface-card border border-brand-border px-3 py-2.5 text-xs text-brand-dark placeholder:text-neutral-400 focus:outline-none focus:border-brand-dark"
                />
                <button
                  type="submit"
                  className="btn-luxury py-2.5 px-4 -ml-[1px] whitespace-nowrap cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Engine */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-light tracking-wide gap-3">
          <p>© 2025 Swaraj Florist 'N' Flower Decorators. All rights reserved.</p>
          <p className="text-neutral-400">Powered by Atelier Botanical Engine</p>
        </div>
      </div>
    </footer>
  );
};
