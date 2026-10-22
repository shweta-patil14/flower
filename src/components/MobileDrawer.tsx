import React from 'react';
import { X, ChevronDown, Facebook, Instagram } from 'lucide-react';
import { CurrencyCode, CURRENCIES } from '../data/storeData';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  onNavigateSection: (sectionId: string) => void;
  onFilterCategory: (filter: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  currentCurrency,
  onCurrencyChange,
  onNavigateSection,
  onFilterCategory
}) => {
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
        className={`drawer-panel absolute top-0 left-0 bottom-0 w-[310px] max-w-[85vw] bg-brand-surface-card flex flex-col justify-between border-r border-brand-border shadow-2xl overflow-y-auto transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="p-4 sm:p-5 flex items-center justify-between border-b border-brand-border">
            <div className="overflow-hidden pr-2">
              <span className="font-serif text-[11px] sm:text-xs tracking-[0.08em] uppercase text-brand-dark whitespace-nowrap block">
                Swaraj Florist <span className="text-brand-accent">'N'</span> Flower Decorators
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-brand-dark p-1 cursor-pointer"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Accordion Links */}
          <div className="p-5 divide-y divide-brand-border/60 text-xs uppercase tracking-widest text-neutral-800">
            {/* 1. Shop By Collections */}
            <div className="py-3">
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center list-none font-medium">
                  <span>Shop By Collections</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pl-3 pt-3 space-y-2 text-[11px] normal-case text-neutral-600">
                  <button
                    onClick={() => {
                      onFilterCategory('all');
                      onClose();
                    }}
                    className="block text-left w-full hover:text-brand-accent"
                  >
                    New Collection 2025
                  </button>
                  <button
                    onClick={() => {
                      onFilterCategory('Cubo');
                      onClose();
                    }}
                    className="block text-left w-full hover:text-brand-accent"
                  >
                    Flowers In A Box (Cubo &amp; Ronde)
                  </button>
                  <button
                    onClick={() => {
                      onFilterCategory('Crystal');
                      onClose();
                    }}
                    className="block text-left w-full hover:text-brand-accent"
                  >
                    Flowers In A Vase
                  </button>
                  <button
                    onClick={() => {
                      onFilterCategory('addon');
                      onClose();
                    }}
                    className="block text-left w-full hover:text-brand-accent"
                  >
                    Atelier Add-Ons
                  </button>
                  <button
                    onClick={() => {
                      onFilterCategory('Crystal');
                      onClose();
                    }}
                    className="block text-left w-full font-medium text-brand-dark"
                  >
                    The Luxury Crystal Edit
                  </button>
                </div>
              </details>
            </div>

            {/* 2. Home */}
            <div className="py-3">
              <button
                onClick={() => {
                  onNavigateSection('hero-slider');
                  onClose();
                }}
                className="block font-medium text-left w-full"
              >
                Home
              </button>
            </div>

            {/* 3. Shop By Occasions */}
            <div className="py-3">
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center list-none font-medium">
                  <span>Shop By Occasions</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pl-3 pt-3 space-y-2 text-[11px] normal-case text-neutral-600">
                  <button
                    onClick={() => {
                      onFilterCategory('bestseller');
                      onClose();
                    }}
                    className="block text-left w-full hover:text-brand-accent"
                  >
                    Birthday Flowers
                  </button>
                  <button
                    onClick={() => {
                      onFilterCategory('ruby');
                      onClose();
                    }}
                    className="block text-left w-full hover:text-brand-accent"
                  >
                    Anniversary Flowers
                  </button>
                  <button
                    onClick={() => {
                      onFilterCategory('rose');
                      onClose();
                    }}
                    className="block text-left w-full hover:text-brand-accent"
                  >
                    Love &amp; Romance
                  </button>
                  <button
                    onClick={() => {
                      onFilterCategory('sunset');
                      onClose();
                    }}
                    className="block text-left w-full hover:text-brand-accent"
                  >
                    Festive Collection
                  </button>
                </div>
              </details>
            </div>

            {/* 4. Floral Decor */}
            <div className="py-3">
              <button
                onClick={() => {
                  onNavigateSection('poetry-section');
                  onClose();
                }}
                className="block font-medium text-left w-full"
              >
                Floral Decor
              </button>
            </div>
          </div>
        </div>

        {/* Footer: Social */}
        <div className="p-5 border-t border-brand-border bg-brand-surface">
          <div className="flex items-center justify-around text-neutral-600">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[11px] hover:text-brand-dark"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[11px] hover:text-brand-dark"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
