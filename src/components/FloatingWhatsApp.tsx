import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 400;
      setHasScrolled(scrolled);
      
      // Show tooltip after scrolling down
      if (scrolled && !isVisible) {
        setIsVisible(true);
        // Show tooltip after a delay
        setTimeout(() => {
          setIsTooltipVisible(true);
          // Hide tooltip after 5 seconds
          setTimeout(() => setIsTooltipVisible(false), 5000);
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const whatsappUrl = "https://wa.me/918754148249?text=Hi%20TeaHub%20%E2%80%94%20I%27m%20interested%20in%20your%20premium%20teas.%20Please%20help%20with%20pricing%20and%20delivery.";

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className={cn(
          'fixed bottom-6 right-6 z-50 transition-all duration-500',
          hasScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        )}
      >
        {/* Tooltip */}
        <div
          className={cn(
            'absolute bottom-full right-0 mb-3 transition-all duration-300',
            isTooltipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          )}
        >
          <div className="relative bg-card border border-border rounded-lg p-4 shadow-lg max-w-[200px]">
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-ivory transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-ivory text-sm font-medium mb-1">Need help?</p>
            <p className="text-ivory-muted text-xs">Chat with us on WhatsApp for quick assistance!</p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-border transform rotate-45" />
          </div>
        </div>

        {/* Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-[0_0_30px_hsla(142,70%,45%,0.5)] hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
          
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/30" />
        </a>
      </div>
    </>
  );
}
