import React, { useState } from 'react';
import { Facebook, Instagram, User, Search, ShoppingBag, Menu, ChevronDown, Sparkles } from 'lucide-react';
import { CurrencyCode, CURRENCIES } from '../data/storeData';

interface HeaderProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  onOpenAccount: () => void;
  onSelectCategoryFilter: (filter: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCurrency,
  onCurrencyChange,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenMobileMenu,
  onOpenAccount,
  onSelectCategoryFilter,
  onScrollToSection
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border transition-all duration-300">
      {/* 1. Slim Top Bar */}
      <div className="border-b border-brand-border/60 py-1.5 px-4 sm:px-8 text-[11px] tracking-wider text-brand-muted">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          {/* Social Icons Left */}
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-brand-dark transition-colors flex items-center gap-1.5"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[10px] tracking-widest uppercase">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-brand-dark transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[10px] tracking-widest uppercase">Instagram</span>
            </a>
            <span className="hidden lg:inline-block text-neutral-300">|</span>
            <span className="hidden lg:inline-block text-[10px] uppercase tracking-widest2 text-neutral-400">
              Ram Mandir Road, Sangli 416416 • Same Day Delivery
            </span>
          </div>

          {/* Center Notice */}
          <div className="text-center font-normal tracking-luxury text-[10px] uppercase text-neutral-600 truncate px-2 hidden md:block">
            Complimentary Luxury Hand-Calligraphed Note Card
          </div>

          {/* Right Notice / Status */}
          <div className="text-[10px] uppercase tracking-widest2 text-neutral-400 hidden sm:block">
            Online Atelier Open
          </div>
        </div>
      </div>

      {/* 2. Main Bar: Logo & Actions */}
      <div className="px-4 sm:px-8 py-3.5 max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Hamburger Button */}
        <button
          onClick={onOpenMobileMenu}
          aria-label="Open Navigation Menu"
          className="lg:hidden p-1.5 -ml-1 text-brand-dark hover:text-brand-accent transition-colors focus:outline-none"
        >
          <Menu className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Left spacer for desktop symmetry */}
        <div className="hidden lg:flex items-center text-xs tracking-widest2 uppercase text-neutral-500 flex-shrink-0 min-w-28">
          <span>Curated Blooms</span>
        </div>

        {/* Centered Logo / Wordmark in One Line */}
        <button
          onClick={() => onScrollToSection('hero-slider')}
          className="text-center group block focus:outline-none cursor-pointer px-2 mx-auto overflow-hidden"
        >
          <h1 className="font-serif text-[13px] sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.08em] sm:tracking-[0.15em] font-normal uppercase text-brand-dark group-hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center gap-1.5 sm:gap-2.5">
            <span>Swaraj Florist</span>
            <span className="text-brand-accent font-medium tracking-normal text-[11px] sm:text-sm md:text-base lg:text-lg">
              'N'
            </span>
            <span>Flower Decorators</span>
          </h1>
        </button>

        {/* Right Utility Icons: Account, Search, Cart */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-brand-dark flex-shrink-0 min-w-28 justify-end">
          {/* Account */}
          <button
            onClick={onOpenAccount}
            className="hover:text-brand-accent transition-colors cursor-pointer"
            title="Atelier Concierge Account"
            aria-label="Account"
          >
            <User className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.4]" />
          </button>

          {/* Search */}
          <button
            onClick={onOpenSearch}
            className="hover:text-brand-accent transition-colors cursor-pointer"
            title="Search Collections"
            aria-label="Search"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.4]" />
          </button>

          {/* Cart with Badge */}
          <button
            onClick={onOpenCart}
            className="relative hover:text-brand-accent transition-colors flex items-center cursor-pointer"
            title="Shopping Cart"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.4]" />
            <span className="cart-count-badge absolute -top-1.5 -right-2 bg-brand-dark text-white text-[9px] font-medium w-4 h-4 rounded-full flex items-center justify-center transition-transform">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* 3. Desktop Main Navigation with Hover Mega-Dropdowns */}
      <nav className="hidden lg:block border-t border-brand-border/70 py-2.5">
        <ul className="flex items-center justify-center space-x-10 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-700">
          {/* Shop By Collections Mega Dropdown */}
          <li
            className="relative py-1 cursor-pointer"
            onMouseEnter={() => setActiveDropdown('collections')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => onScrollToSection('tabbed-carousel')}
              className="hover:text-brand-dark flex items-center gap-1 transition-colors cursor-pointer focus:outline-none"
            >
              Shop By Collections
              <ChevronDown
                className={`w-3 h-3 text-neutral-400 transition-transform ${
                  activeDropdown === 'collections' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Mega Menu Dropdown */}
            {activeDropdown === 'collections' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-brand-surface-card border border-brand-border shadow-xl p-8 z-50 text-left">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="text-[10px] font-semibold text-neutral-400 tracking-widest2 uppercase pb-3 mb-3 border-b border-brand-border">
                      Collections
                    </p>
                    <div className="space-y-2.5">
                      <button
                        onClick={() => {
                          onSelectCategoryFilter('New Collection');
                          setActiveDropdown(null);
                        }}
                        className="block text-xs normal-case text-neutral-700 hover:text-brand-accent transition-colors text-left"
                      >
                        New Collection 2025
                      </button>
                      <button
                        onClick={() => {
                          onSelectCategoryFilter('Cubo');
                          setActiveDropdown(null);
                        }}
                        className="block text-xs normal-case text-neutral-700 hover:text-brand-accent transition-colors text-left"
                      >
                        Flowers In A Box (Cubo &amp; Ronde)
                      </button>
                      <button
                        onClick={() => {
                          onSelectCategoryFilter('Crystal');
                          setActiveDropdown(null);
                        }}
                        className="block text-xs normal-case text-neutral-700 hover:text-brand-accent transition-colors text-left"
                      >
                        Flowers In A Vase
                      </button>
                      <button
                        onClick={() => {
                          onSelectCategoryFilter('all');
                          setActiveDropdown(null);
                        }}
                        className="block text-xs normal-case text-neutral-700 hover:text-brand-accent transition-colors text-left"
                      >
                        Artisanal Hand-Tied Bunches
                      </button>
                      <button
                        onClick={() => {
                          onSelectCategoryFilter('Crystal');
                          setActiveDropdown(null);
                        }}
                        className="block text-xs normal-case text-neutral-700 hover:text-brand-accent transition-colors font-medium text-brand-dark text-left"
                      >
                        The Luxury Crystal Edit
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold text-neutral-400 tracking-widest2 uppercase pb-3 mb-3 border-b border-brand-border">
                      Featured Essence
                    </p>
                    <div className="space-y-2.5">
                      <button
                        onClick={() => {
                          onSelectCategoryFilter('p6');
                          setActiveDropdown(null);
                        }}
                        className="block text-xs normal-case text-neutral-700 hover:text-brand-accent text-left"
                      >
                        Ecuadorian Preserved Roses
                      </button>
                      <button
                        onClick={() => {
                          onSelectCategoryFilter('p2');
                          setActiveDropdown(null);
                        }}
                        className="block text-xs normal-case text-neutral-700 hover:text-brand-accent text-left"
                      >
                        Fresh Holland Peonies &amp; Ranunculus
                      </button>
                      <button
                        onClick={() => {
                          onSelectCategoryFilter('p3');
                          setActiveDropdown(null);
                        }}
                        className="block text-xs normal-case text-neutral-700 hover:text-brand-accent text-left"
                      >
                        Lilies &amp; Wild Hydrangeas
                      </button>
                      <button
                        onClick={() => {
                          onSelectCategoryFilter('p1');
                          setActiveDropdown(null);
                        }}
                        className="block text-xs normal-case text-neutral-700 hover:text-brand-accent text-left"
                      >
                        Seasonal Orchids &amp; Damask Rose
                      </button>
                    </div>
                  </div>

                  <div className="bg-brand-surface p-4 border border-brand-border">
                    <span className="text-[9px] uppercase tracking-widest text-brand-accent block mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Editor&apos;s Choice
                    </span>
                    <h4 className="font-serif text-sm text-brand-dark mb-2">Wild Mix Signature Box</h4>
                    <p className="text-[11px] normal-case text-neutral-500 leading-relaxed mb-3">
                      Freshly cut daily and arranged in handcrafted textured square keepsake boxes.
                    </p>
                    <button
                      onClick={() => {
                        onScrollToSection('tabbed-carousel');
                        setActiveDropdown(null);
                      }}
                      className="text-[10px] font-medium tracking-widest uppercase text-brand-dark underline underline-offset-4 cursor-pointer"
                    >
                      Discover Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Home */}
          <li>
            <button
              onClick={() => onScrollToSection('hero-slider')}
              className="hover:text-brand-dark transition-colors cursor-pointer focus:outline-none"
            >
              Home
            </button>
          </li>

          {/* Shop By Occasions Dropdown */}
          <li
            className="relative py-1 cursor-pointer"
            onMouseEnter={() => setActiveDropdown('occasions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => onScrollToSection('tabbed-carousel')}
              className="hover:text-brand-dark flex items-center gap-1 transition-colors cursor-pointer focus:outline-none"
            >
              Shop By Occasions
              <ChevronDown
                className={`w-3 h-3 text-neutral-400 transition-transform ${
                  activeDropdown === 'occasions' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeDropdown === 'occasions' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-brand-surface-card border border-brand-border shadow-xl p-6 z-50 text-left">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-semibold text-neutral-400 tracking-widest2 uppercase pb-2 mb-2 border-b border-brand-border">
                      Moments
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => {
                            onSelectCategoryFilter('bestseller');
                            setActiveDropdown(null);
                          }}
                          className="text-xs normal-case text-neutral-700 hover:text-brand-accent text-left"
                        >
                          Birthday Flowers
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            onSelectCategoryFilter('ruby');
                            setActiveDropdown(null);
                          }}
                          className="text-xs normal-case text-neutral-700 hover:text-brand-accent text-left"
                        >
                          Anniversary Flowers
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            onSelectCategoryFilter('rose');
                            setActiveDropdown(null);
                          }}
                          className="text-xs normal-case text-neutral-700 hover:text-brand-accent text-left"
                        >
                          Love &amp; Romance
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            onSelectCategoryFilter('sunset');
                            setActiveDropdown(null);
                          }}
                          className="text-xs normal-case text-neutral-700 hover:text-brand-accent font-medium text-left"
                        >
                          Festive Collection
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between border-l border-brand-border pl-6">
                    <div>
                      <p className="text-[10px] font-semibold text-neutral-400 tracking-widest2 uppercase pb-2 mb-2 border-b border-brand-border">
                        Express Concierge
                      </p>
                      <p className="text-xs normal-case text-neutral-500 mb-3">
                        Custom floral architecture and bespoke event styling concierge.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onScrollToSection('footer');
                        setActiveDropdown(null);
                      }}
                      className="text-[10px] uppercase tracking-widest text-brand-dark underline underline-offset-4 text-left cursor-pointer"
                    >
                      Talk to a Florist
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Floral Decor */}
          <li>
            <button
              onClick={() => onScrollToSection('poetry-section')}
              className="hover:text-brand-dark transition-colors cursor-pointer focus:outline-none"
            >
              Floral Decor
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
