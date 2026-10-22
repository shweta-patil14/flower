/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product, CurrencyCode } from './data/storeData';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { ShopByCollectionBanner } from './components/ShopByCollectionBanner';
import { TabbedCarousel } from './components/TabbedCarousel';
import { CategoryTiles } from './components/CategoryTiles';
import { BrandStory } from './components/BrandStory';
import { PoetrySection } from './components/PoetrySection';
import { FeaturedCreations } from './components/FeaturedCreations';
import { ShopTheLook } from './components/ShopTheLook';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { MobileDrawer } from './components/MobileDrawer';
import { SearchModal } from './components/SearchModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { LookbookModal } from './components/LookbookModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { AccountModal } from './components/AccountModal';
import { AllProductsModal } from './components/AllProductsModal';

export default function App() {
  // Warm Peach Theme (Buttercream & Honey Apricot)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'peach');
    localStorage.setItem('bloom_pastel_theme', 'peach');
  }, []);

  // Currency State (INR default, instant live exchange across entire store)
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('INR');

  // Cart State (Pre-populated with 1 item matching original brief)
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Wild Mix – Classic Cubo
      qty: 1,
      size: 'Classic'
    }
  ]);

  // Modals & Drawers States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [checkoutGiftNote, setCheckoutGiftNote] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart Actions
  const handleAddToCart = (product: Product, size: 'Petite' | 'Classic' | 'Grande' | 'Luxe' = 'Classic') => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.size === size);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { product, qty: 1, size }];
    });
    showToast(`Added ${product.name} to your bag`);
    setIsCartOpen(true);
  };

  const handleUpdateQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleStartCheckout = (giftNote: string) => {
    setCheckoutGiftNote(giftNote);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCart([]);
    showToast('Your order has been recorded successfully');
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFilter = (filter: string) => {
    if (filter === 'all' || filter === 'Cubo' || filter === 'Ronde' || filter === 'Crystal' || filter === 'addon') {
      setIsAllProductsOpen(true);
    } else {
      // Find matching product
      const found = PRODUCTS.find((p) => p.id === filter || p.svgType === filter);
      if (found) {
        setSelectedProduct(found);
      } else {
        scrollToSection('tabbed-carousel');
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-brand-bg text-brand-dark selection:bg-brand-accent selection:text-white transition-colors duration-400">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-dark text-white text-xs px-4 py-3 shadow-2xl border border-brand-border/40 tracking-wider uppercase animate-fadeIn flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onSelectCategoryFilter={handleSelectCategoryFilter}
        onScrollToSection={scrollToSection}
      />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onNavigateSection={scrollToSection}
        onFilterCategory={handleSelectCategoryFilter}
      />

      {/* Cart Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currentCurrency={currentCurrency}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleStartCheckout}
        onExplore={() => scrollToSection('tabbed-carousel')}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        currentCurrency={currentCurrency}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={(p) => handleAddToCart(p)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        currentCurrency={currentCurrency}
        onAddToCartWithSize={(p, size) => handleAddToCart(p, size)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        currentCurrency={currentCurrency}
        giftNote={checkoutGiftNote}
        onOrderComplete={handleOrderComplete}
      />

      {/* Lookbook Modal */}
      <LookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        products={PRODUCTS}
        currentCurrency={currentCurrency}
        onAddToCart={(p) => handleAddToCart(p)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Policy Modal */}
      <PolicyModal
        type={activePolicy}
        isOpen={Boolean(activePolicy)}
        onClose={() => setActivePolicy(null)}
      />

      {/* Account Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* Complete Catalog Modal */}
      <AllProductsModal
        isOpen={isAllProductsOpen}
        onClose={() => setIsAllProductsOpen(false)}
        products={PRODUCTS}
        currentCurrency={currentCurrency}
        onAddToCart={(p) => handleAddToCart(p)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. HERO SLIDER */}
        <HeroSlider
          onShopNow={() => scrollToSection('tabbed-carousel')}
          onExploreCollection={() => scrollToSection('category-tiles')}
        />

        {/* 2. SHOP BY COLLECTION BANNER */}
        <ShopByCollectionBanner
          onCollectionClick={() => setIsAllProductsOpen(true)}
        />

        {/* 3. TABBED PRODUCT CAROUSEL */}
        <TabbedCarousel
          products={PRODUCTS}
          currentCurrency={currentCurrency}
          onAddToCart={(p) => handleAddToCart(p)}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onViewAllProducts={() => setIsAllProductsOpen(true)}
        />

        {/* 4. THREE-COLUMN CATEGORY TILES */}
        <CategoryTiles
          onSelectCategory={(boxType) => {
            handleSelectCategoryFilter(boxType);
          }}
        />

        {/* 5. BRAND STORY */}
        <BrandStory />

        {/* 6. "POETRY IN A BOX" SECTION */}
        <PoetrySection
          onOpenAboutModal={() => setActivePolicy('about')}
        />

        {/* 7. FEATURED PRODUCTS */}
        <FeaturedCreations
          products={PRODUCTS}
          currentCurrency={currentCurrency}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={(p) => handleAddToCart(p)}
        />

        {/* 8. SHOP THE LOOK */}
        <ShopTheLook
          products={PRODUCTS}
          currentCurrency={currentCurrency}
          onAddToCart={(p) => handleAddToCart(p)}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onOpenLookbook={() => setIsLookbookOpen(true)}
        />
      </main>

      {/* 9. FOOTER */}
      <Footer
        onOpenPolicyModal={(policy) => setActivePolicy(policy)}
      />
    </div>
  );
}
