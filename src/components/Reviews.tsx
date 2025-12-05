import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  product: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Diana Selsiya',
    location: 'Chennai',
    avatar: 'DS',
    rating: 5,
    date: '2025-11-20',
    text: "The first thing that impressed me was the packaging - the unique black cover looks premium. The next is the taste obviously, even the non-tea lover got obsessed with this unique taste. And you are maintaining the standard and consistency in all the products. Thanks for bringing the authentic flavour straight from Assam!",
    product: 'Premium Tea',
  },
  {
    id: '2',
    name: 'Kamalammaal',
    location: 'Trichy',
    avatar: 'MA',
    rating: 5,
    date: '2025-11-10',
    text: "எனக்கு இப்போ 70 வயசு. இத்தனை வருஷம் தேனீர் குடிக்கிறேன், ஆனா இப்படி சுவையா இருக்கும் தேயிலை பொடி நான் பார்த்ததே இல்லை. ஒரு முறை வெச்சா போதும், வீட்டுல எல்லாரும் 'என்ன புது பொடி வாங்கினீங்க?'ன்னு கேட்டாங்க. நல்லா தூய்மையா, ருசியா இருக்கு. TeaHub-க்கு நன்றி சொல்லணும் போல இருக்கு!",
    product: 'Masala Tea',
  },
  {
    id: '3',
    name: 'Wilson',
    location: 'Coimbatore',
    avatar: 'W',
    rating: 5,
    date: '2025-11-05',
    text: "இது கடைகள்ல கிடைக்குற பொடியை மாதிரி இல்ல. மணமும் சுவையும் தனியா தெரியுது. நான் எப்பவும் சாம்பார், பொடி வாங்குறப்போ தேயிலை பொடியும் வாங்கிடுவேன். ஆனா இங்க வாங்குனதுக்குப் பிறகு, 'இது தான் சரி'ன்னு fix ஆயிடுச்சு. குடும்பத்தாருக்கு எல்லாருக்கும் பிடிச்சிருக்கு. நல்லா செயங்க!",
    product: 'Premium Tea',
  },
 {
  id: '4',
  name: 'Sruthi',
  location: 'Kerala',
  avatar: 'SR',
  rating: 5,
  date: '2025-10-28',
  text: "Tea is nice. Thickness feels great. Loved it!",
  product: 'Premium Tea Powder',
},
{
  id: '5',
  name: 'Dhivya Shreetha',
  location: 'Coimbatore',
  avatar: 'DS',
  rating: 5,
  date: '2025-10-20',
  text: "The tea was really good. Perfect flavor!",
  product: 'Organic Green Tea',
}
,
];

export function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="section-padding bg-card/30 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-gold/5">
        <Quote className="w-40 h-40" />
      </div>
      <div className="absolute bottom-20 right-10 text-gold/5 rotate-180">
        <Quote className="w-40 h-40" />
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
            Testimonials
          </span>
          <h2
            className={cn(
              'font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            What Our <span className="text-gradient-gold">Customers</span> Say
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={cn(
            'max-w-4xl mx-auto transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="relative">
            {/* Review Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              'w-5 h-5',
                              i < review.rating
                                ? 'fill-gold text-gold'
                                : 'text-muted-foreground'
                            )}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="font-serif text-xl md:text-2xl text-ivory leading-relaxed mb-8">
                        "{review.text}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold font-serif text-lg">
                          {review.avatar}
                        </div>
                        <div>
                          <div className="text-ivory font-medium">{review.name}</div>
                          <div className="text-ivory-muted text-sm">{review.location}</div>
                        </div>
                        <div className="ml-auto text-right">
                          <div className="text-gold text-sm">{review.product}</div>
                          <div className="text-muted-foreground text-xs">{formatDate(review.date)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 text-ivory hover:text-gold hover:bg-card/50"
              onClick={prevSlide}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 text-ivory hover:text-gold hover:bg-card/50"
              onClick={nextSlide}
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'bg-gold w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                )}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className={cn(
            'grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-700 delay-400',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '50+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
            { value: 'FSSAI', label: 'Lic. 22425562000188' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-gold mb-2">{stat.value}</div>
              <div className="text-ivory-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD for Reviews */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "TeaHub Premium Tea Collection",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500",
            "bestRating": "5"
          },
          "review": reviews.map(review => ({
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": review.rating
            },
            "author": {
              "@type": "Person",
              "name": review.name
            },
            "datePublished": review.date,
            "reviewBody": review.text
          }))
        })
      }} />
    </section>
  );
}
