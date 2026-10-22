import React, { useState } from 'react';
import { X, User, Package, CheckCircle2 } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'login' | 'track'>('login');
  const [email, setEmail] = useState('');
  const [orderRef, setOrderRef] = useState('');
  const [trackedStatus, setTrackedStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderRef) return;
    setTrackedStatus(`Order ${orderRef}: Fresh stems being curated in Atelier. On track for scheduled white-glove arrival.`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-brand-surface-card max-w-md w-full border border-brand-border shadow-2xl relative p-6 sm:p-8 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-widest text-brand-accent font-medium">
            Atelier Client Portal
          </span>
          <h3 className="font-serif text-2xl text-brand-dark mt-1 font-normal">
            Account &amp; Orders
          </h3>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-brand-border mb-6">
          <button
            onClick={() => {
              setTab('login');
              setTrackedStatus(null);
            }}
            className={`flex-1 py-2 text-xs uppercase tracking-wider font-medium text-center border-b-2 transition-all cursor-pointer ${
              tab === 'login' ? 'border-brand-dark text-brand-dark' : 'border-transparent text-neutral-400'
            }`}
          >
            Client Login
          </button>
          <button
            onClick={() => setTab('track')}
            className={`flex-1 py-2 text-xs uppercase tracking-wider font-medium text-center border-b-2 transition-all cursor-pointer ${
              tab === 'track' ? 'border-brand-dark text-brand-dark' : 'border-transparent text-neutral-400'
            }`}
          >
            Track Order
          </button>
        </div>

        {tab === 'login' ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Welcome to Swaraj Florist 'N' Flower Decorators client atelier, ${email || 'Client'}.`);
              onClose();
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@domain.com"
                className="w-full border border-brand-border p-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                className="w-full border border-brand-border p-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
              />
            </div>

            <button
              type="submit"
              className="btn-luxury w-full py-3 bg-brand-dark text-white hover:bg-neutral-800 tracking-[0.2em] cursor-pointer"
            >
              Sign In
            </button>
            <p className="text-[11px] text-neutral-500 text-center">
              Don&apos;t have an account? Guests can checkout without registration.
            </p>
          </form>
        ) : (
          <form onSubmit={handleTrack} className="space-y-4 text-xs">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                Order Reference Number (e.g. BB-849201)
              </label>
              <input
                type="text"
                required
                value={orderRef}
                onChange={(e) => setOrderRef(e.target.value)}
                placeholder="BB-123456"
                className="w-full border border-brand-border p-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark uppercase"
              />
            </div>

            <button
              type="submit"
              className="btn-luxury w-full py-3 bg-brand-dark text-white hover:bg-neutral-800 tracking-[0.2em] cursor-pointer"
            >
              Track Dispatch
            </button>

            {trackedStatus && (
              <div className="p-3 bg-brand-surface border border-brand-border text-xs text-brand-dark flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed font-light">{trackedStatus}</p>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
