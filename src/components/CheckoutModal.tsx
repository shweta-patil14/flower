import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin, Calendar, CreditCard, Truck } from 'lucide-react';
import { CurrencyCode, formatPriceWithCurrency, CITY_HUBS } from '../data/storeData';
import { CartItem } from './CartDrawer';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currentCurrency: CurrencyCode;
  giftNote: string;
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currentCurrency,
  giftNote,
  onOrderComplete
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCity, setSelectedCity] = useState('Sangli (Ram Mandir Road)');
  const [deliveryDate, setDeliveryDate] = useState('2026-10-22');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'applepay'>('card');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotalINR = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const deliveryFeeINR = 250;
  const totalINR = subtotalINR + deliveryFeeINR;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `BB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrderNum);
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-brand-surface-card max-w-2xl w-full border border-brand-border shadow-2xl relative my-8 animate-fadeIn p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 cursor-pointer"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-widest text-brand-accent font-medium">
                Atelier Concierge Checkout
              </span>
              <h3 className="font-serif text-2xl text-brand-dark mt-1">
                Bespoke Delivery Details
              </h3>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                    Recipient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full border border-brand-border p-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full border border-brand-border p-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                    Delivery Hub / City *
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full border border-brand-border p-2.5 text-xs text-brand-dark focus:outline-none bg-brand-surface-card cursor-pointer"
                  >
                    {CITY_HUBS.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} ({c.delivery})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                    Preferred Delivery Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full border border-brand-border p-2.5 text-xs text-brand-dark focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                  Complete Delivery Address *
                </label>
                <textarea
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street, Apartment / Villa number, Landmark, Postal Code"
                  className="w-full border border-brand-border p-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-dark resize-none"
                />
              </div>

              {giftNote && (
                <div className="p-3 bg-brand-surface border border-brand-border text-[11px]">
                  <span className="font-semibold text-brand-dark block mb-0.5">
                    Hand-Calligraphed Note Card:
                  </span>
                  <span className="italic text-neutral-600 font-serif">
                    &ldquo;{giftNote}&rdquo;
                  </span>
                </div>
              )}

              {/* Payment Method */}
              <div className="pt-2">
                <label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-2 font-medium">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 border text-center text-xs transition-colors cursor-pointer flex flex-col items-center gap-1 ${
                      paymentMethod === 'card'
                        ? 'border-brand-dark bg-brand-dark text-white'
                        : 'border-brand-border hover:border-black text-neutral-700'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Credit / Debit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-2.5 border text-center text-xs transition-colors cursor-pointer flex flex-col items-center gap-1 ${
                      paymentMethod === 'upi'
                        ? 'border-brand-dark bg-brand-dark text-white'
                        : 'border-brand-border hover:border-black text-neutral-700'
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>Instant UPI / NetBanking</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`p-2.5 border text-center text-xs transition-colors cursor-pointer flex flex-col items-center gap-1 ${
                      paymentMethod === 'applepay'
                        ? 'border-brand-dark bg-brand-dark text-white'
                        : 'border-brand-border hover:border-black text-neutral-700'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Apple / Google Pay</span>
                  </button>
                </div>
              </div>

              {/* Order Summary Line */}
              <div className="pt-4 border-t border-brand-border space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal ({items.length} items):</span>
                  <span>{formatPriceWithCurrency(subtotalINR, currentCurrency)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>White-Glove Temperature Controlled Courier:</span>
                  <span>{formatPriceWithCurrency(deliveryFeeINR, currentCurrency)}</span>
                </div>
                <div className="flex justify-between text-brand-dark font-medium pt-1 text-sm">
                  <span>Total Amount Due:</span>
                  <span>{formatPriceWithCurrency(totalINR, currentCurrency)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn-luxury w-full py-3.5 bg-brand-dark text-white hover:bg-neutral-800 tracking-[0.2em] cursor-pointer mt-4"
              >
                Confirm &amp; Place Order &bull; {formatPriceWithCurrency(totalINR, currentCurrency)}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-green-700 mx-auto" />
            <h3 className="font-serif text-3xl text-brand-dark">Order Confirmed</h3>
            <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
              Thank you for trusting Swaraj Florist 'N' Flower Decorators. Your bespoke floral creation is being prepared and hand-sculpted in our studio.
            </p>
            <div className="p-4 bg-brand-surface border border-brand-border max-w-sm mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Order Reference:</span>
                <span className="font-mono font-semibold text-brand-dark">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Recipient:</span>
                <span className="text-brand-dark">{recipientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">City Hub:</span>
                <span className="text-brand-dark">{selectedCity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Delivery Date:</span>
                <span className="text-brand-dark">{deliveryDate}</span>
              </div>
            </div>
            <button
              onClick={() => {
                onOrderComplete();
                onClose();
              }}
              className="btn-luxury cursor-pointer mt-4"
            >
              Back to Atelier
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
