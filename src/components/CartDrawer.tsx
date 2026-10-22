import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, HeartHandshake } from 'lucide-react';
import { Product, CurrencyCode, formatPriceWithCurrency } from '../data/storeData';
import { BotanicalProductSvg } from './BotanicalArt';

export interface CartItem {
  product: Product;
  qty: number;
  size: 'Petite' | 'Classic' | 'Grande' | 'Luxe';
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currentCurrency: CurrencyCode;
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: (cardNote: string) => void;
  onExplore: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currentCurrency,
  onUpdateQty,
  onRemoveItem,
  onCheckout,
  onExplore
}) => {
  const [noteCardText, setNoteCardText] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  const totalCount = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotalINR = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`drawer-overlay absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Slide-out Panel */}
      <div
        className={`drawer-panel absolute top-0 right-0 bottom-0 w-[400px] max-w-[92vw] bg-brand-surface-card border-l border-brand-border shadow-2xl flex flex-col justify-between transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-brand-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-lg tracking-wider uppercase text-brand-dark">
              Your Bag
            </h3>
            <span className="text-xs text-neutral-400 font-sans">({totalCount})</span>
          </div>
          <button
            onClick={onClose}
            className="text-brand-dark p-1 hover:opacity-70 cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-10 h-10 mx-auto text-neutral-300 stroke-[1] mb-3" />
              <p className="font-serif text-base text-brand-dark">Your cart is empty</p>
              <p className="text-xs text-neutral-500 mt-1 mb-6">
                Explore our fresh botanical creations.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onExplore();
                }}
                className="btn-luxury text-[10px] cursor-pointer"
              >
                Shop Best Sellers
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 py-4 border-b border-brand-border"
                >
                  <div className="w-20 h-24 overflow-hidden border border-brand-border flex-shrink-0 bg-neutral-900">
                    <BotanicalProductSvg
                      type={item.product.svgType}
                      image={item.product.image}
                      alt={item.product.name}
                      variant="primary"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm text-brand-dark line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-xs text-brand-muted hover:text-black p-0.5 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] uppercase tracking-wider text-brand-muted mt-0.5">
                        Size: {item.size}
                      </p>
                      <p className="text-xs font-medium text-brand-dark mt-1">
                        {formatPriceWithCurrency(item.product.price, currentCurrency)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-brand-border">
                        <button
                          onClick={() => onUpdateQty(item.product.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-xs hover:bg-neutral-100 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">{item.qty}</span>
                        <button
                          onClick={() => onUpdateQty(item.product.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-xs hover:bg-neutral-100 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-xs text-neutral-600 font-medium">
                        {formatPriceWithCurrency(item.product.price * item.qty, currentCurrency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Complimentary Hand-Calligraphed Note Option */}
              <div className="pt-2">
                <button
                  onClick={() => setShowNoteInput(!showNoteInput)}
                  className="flex items-center gap-1.5 text-xs text-brand-accent hover:underline cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>
                    {showNoteInput ? 'Hide Gift Note' : '+ Add Complimentary Calligraphed Note Card'}
                  </span>
                </button>
                {showNoteInput && (
                  <div className="mt-2 p-3 bg-brand-surface border border-brand-border">
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                      Recipient Calligraphy Message
                    </label>
                    <textarea
                      rows={2}
                      value={noteCardText}
                      onChange={(e) => setNoteCardText(e.target.value)}
                      placeholder="e.g. Wishing you timeless joy on your special day..."
                      className="w-full bg-brand-bg border border-brand-border p-2 text-xs text-brand-dark focus:outline-none focus:border-brand-dark resize-none"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-brand-border bg-brand-surface space-y-3">
            <div className="flex items-center justify-between text-xs tracking-wider uppercase">
              <span className="text-neutral-500">Subtotal</span>
              <span className="font-semibold text-brand-dark font-sans text-sm">
                {formatPriceWithCurrency(subtotalINR, currentCurrency)}
              </span>
            </div>
            <p className="text-[10px] text-neutral-400">
              Taxes, luxury greeting card &amp; courier delivery calculated at checkout.
            </p>
            <button
              onClick={() => onCheckout(noteCardText)}
              className="btn-luxury w-full py-3.5 bg-brand-dark text-white hover:bg-neutral-800 tracking-[0.2em] cursor-pointer"
            >
              Checkout Now
            </button>
            <button
              onClick={onClose}
              className="w-full text-center text-[10px] uppercase tracking-widest text-neutral-500 hover:text-black pt-1 cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
