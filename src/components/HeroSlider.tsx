import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroArtwork1, HeroArtwork2, HeroArtwork3, HeroArtwork4 } from './SectionIllustrations';

interface HeroSliderProps {
  onShopNow: () => void;
  onExploreCollection: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onShopNow, onExploreCollection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 0,
      badge: 'Atelier Botanical Edit',
      title: 'Velvet Roses',
      subtitle: 'Architectural Ecuadorian damask roses arranged in bespoke keepsake hatboxes.',
      buttonText: 'Shop Roses',
      action: onShopNow,
      art: <HeroArtwork1 className="w-full h-full object-cover" />
    },
    {
      id: 1,
      badge: 'Spring Tulip Collection',
      title: 'Dutch Tulips',
      subtitle: 'Luminous Dutch garden tulips and ranunculus crowned in Parisian hatboxes.',
      buttonText: 'Explore Tulips',
      action: onExploreCollection,
      art: <HeroArtwork2 className="w-full h-full object-cover" />
    },
    {
      id: 2,
      badge: 'Solar Summer Release',
      title: 'Golden Sunflowers',
      subtitle: 'Sun-kissed Tuscan sunflowers and warm terracotta blooms brimming with vitality.',
      buttonText: 'Shop Sunflowers',
      action: onShopNow,
      art: <HeroArtwork3 className="w-full h-full object-cover" />
    },
    {
      id: 3,
      badge: 'Exotic & Rare Botanicals',
      title: 'Orchids & Lilies',
      subtitle: 'Cascading Phalaenopsis orchids and pure Casablanca lilies in hand-cut crystal vessels.',
      buttonText: 'View Orchids & Lilies',
      action: onExploreCollection,
      art: <HeroArtwork4 className="w-full h-full object-cover" />
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="hero-slider"
      className="relative w-full overflow-hidden bg-neutral-900 h-[70vh] sm:h-[80vh] lg:h-[88vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Flower Photo Background */}
            <div className="w-full h-full relative">{slide.art}</div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center px-4">
              <span className="text-brand-accent text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium mb-3">
                {slide.badge}
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-wide max-w-2xl leading-tight">
                {slide.title}
              </h2>
              <p className="text-white/90 text-xs sm:text-sm max-w-md font-light tracking-wide mt-3 mb-6">
                {slide.subtitle}
              </p>
              <button
                onClick={slide.action}
                className="btn-luxury-inverted cursor-pointer"
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        );
      })}

      {/* Slider Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white p-2 border border-white/20 hover:border-white/60 transition-all bg-black/20 backdrop-blur-sm cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white p-2 border border-white/20 hover:border-white/60 transition-all bg-black/20 backdrop-blur-sm cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              currentSlide === idx ? 'bg-brand-accent w-6' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
