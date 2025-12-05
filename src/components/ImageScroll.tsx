import { useEffect, useRef } from 'react';

// Import product images for the scroll
import earlGreyImg from '@/assets/products/earl-grey.jpg';
import assamGoldImg from '@/assets/products/assam-gold.jpg';
import darjeelingImg from '@/assets/products/darjeeling.jpg';
import masalaChaiImg from '@/assets/products/masala-chai.jpg';
import organicGreenImg from '@/assets/products/organic-green.jpg';
import chamomileBlissImg from '@/assets/products/chamomile-bliss.jpg';
import heroTeaBg from '@/assets/hero-tea-bg.jpg';
import teaCupHero from '@/assets/tea-cup-hero.jpg';

const scrollImages = [
  { src: earlGreyImg, alt: 'Earl Grey Tea' },
  { src: heroTeaBg, alt: 'Tea Leaves' },
  { src: darjeelingImg, alt: 'Darjeeling Tea' },
  { src: teaCupHero, alt: 'Premium Tea Cup' },
  { src: chamomileBlissImg, alt: 'Chamomile Bliss' },
];

export function ImageScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone images for seamless loop
    const scrollContent = scrollContainer.querySelector('.scroll-content');
    if (scrollContent) {
      const clone = scrollContent.cloneNode(true) as HTMLElement;
      scrollContainer.appendChild(clone);
    }
  }, []);

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div
        ref={scrollRef}
        className="flex animate-scroll-left"
        style={{
          width: 'max-content',
        }}
      >
        <div className="scroll-content flex gap-4">
          {scrollImages.map((image, index) => (
            <div
              key={index}
              className="w-64 h-40 md:w-80 md:h-48 flex-shrink-0 rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
