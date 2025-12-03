import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Leaf, Award, Globe, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Single Origin',
    description: 'Sourced directly from heritage estates in Darjeeling, Assam, and beyond.',
  },
  {
    icon: Award,
    title: 'Small Batch',
    description: 'Handcrafted in limited quantities to ensure exceptional quality and freshness.',
  },
  {
    icon: Globe,
    title: 'Sustainable',
    description: 'Ethically sourced with fair trade practices and eco-friendly packaging.',
  },
  {
    icon: Heart,
    title: 'Artisan Craft',
    description: 'Traditional techniques perfected over generations of master tea makers.',
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={cn(
              'inline-block text-gold text-xs tracking-[0.3em] uppercase mb-4 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Our Story
          </span>
          <h2
            className={cn(
              'font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Crafted for the
            <span className="text-gradient-gold"> Connoisseur</span>
          </h2>
          <p
            className={cn(
              'text-ivory-muted max-w-2xl mx-auto text-lg leading-relaxed transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            At TeaHub, we believe exceptional tea is an art form. Each leaf is carefully selected 
            from the world's most renowned gardens, processed with time-honored techniques, and 
            delivered to you at peak freshness.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Video/Image */}
          <div
            className={cn(
              'relative transition-all duration-1000 delay-300',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            )}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              {/* Video placeholder - can be replaced with actual video */}
              <div className="absolute inset-0 bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full border-2 border-gold/50 flex items-center justify-center mx-auto mb-4 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 cursor-pointer">
                    <div className="w-0 h-0 border-l-[16px] border-l-gold border-y-[10px] border-y-transparent ml-1" />
                  </div>
                  <p className="text-ivory-muted text-sm">Watch Our Story</p>
                </div>
              </div>
              
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-gold/20 rounded-lg pointer-events-none" />
              <div className="absolute -inset-2 border border-gold/10 rounded-lg pointer-events-none" />
            </div>

          </div>

          {/* Right: Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  'p-6 bg-card/50 border border-border/50 rounded-lg hover:border-gold/30 hover:bg-card transition-all duration-500 group',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms',
                }}
              >
                <feature.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-xl text-ivory mb-2">{feature.title}</h3>
                <p className="text-ivory-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div
          className={cn(
            'mt-20 text-center max-w-3xl mx-auto transition-all duration-700 delay-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <blockquote className="font-serif text-2xl md:text-3xl text-ivory/80 italic leading-relaxed">
            "Every cup of TeaHub is a journey—from misty mountain gardens to your morning ritual. 
            We don't just sell tea; we share an experience."
          </blockquote>
          <cite className="block mt-4 text-gold text-sm tracking-wide">— The TeaHub Philosophy</cite>
        </div>
      </div>
    </section>
  );
}
