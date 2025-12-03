import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingBag, ChevronDown } from 'lucide-react';
import heroTeaBg from '@/assets/hero-tea-bg.jpg';
import teaCupHero from '@/assets/tea-cup-hero.jpg';
import { cn } from '@/lib/utils';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFlavours = () => {
    const element = document.querySelector('#flavours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-dark" />

        {/* Primary background image with parallax */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
          }}
        >
          <img
            src={heroTeaBg}
            alt="Premium tea leaves background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Secondary floating image */}
        <div
          className="absolute right-0 top-1/4 w-[40%] opacity-30 blur-sm hidden lg:block"
          style={{
            transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.05}px)`,
          }}
        >
          <img
            src={teaCupHero}
            alt="Elegant tea cup"
            className="w-full h-auto object-contain"
            loading="eager"
          />
        </div>

        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-overlay" />

        {/* Animated particles/steam effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-1 h-1 rounded-full bg-gold/30 animate-steam",
                i % 2 === 0 ? "left-1/3" : "left-2/3"
              )}
              style={{
                left: `${20 + (i * 12)}%`,
                bottom: '30%',
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + (i * 0.5)}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small tagline */}
          <div className="opacity-initial animate-fade-in">

          </div>

          {/* Main heading */}
          <h1 className="opacity-initial animate-fade-in-up delay-200 font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-ivory mb-6">
            The Art of
            <span className="block text-gradient-gold">Leaf & Luxury</span>
          </h1>

          {/* Subtitle */}
          <p className="opacity-initial animate-fade-in-up delay-400 text-ivory-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Where Leaves Come's to Tell Their Story           </p>

          {/* CTA Buttons */}
          <div className="opacity-initial animate-fade-in-up delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="heroSolid"
              size="xl"
              onClick={scrollToFlavours}
              className="group"
            >
              <ShoppingBag className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Collection
            </Button>

          </div>

          {/* Trust badges */}
          <div className="opacity-initial animate-fade-in delay-800 mt-16 flex flex-wrap items-center justify-center gap-8 text-ivory-muted/60 text-xs tracking-wider uppercase">
            <span>100% Organic</span>
            <span className="w-1 h-1 rounded-full bg-gold/50" />
            <span>All Over India Shipping</span>
            <span className="w-1 h-1 rounded-full bg-gold/50" />
            <span>Premium Quality</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-initial animate-fade-in delay-800">
          <button
            onClick={scrollToFlavours}
            className="flex flex-col items-center gap-2 text-gold/60 hover:text-gold transition-colors group"
            aria-label="Scroll to explore"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
