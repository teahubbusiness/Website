import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star, Filter, Shield } from 'lucide-react';

// Product images
import assamGoldImg from '@/assets/products/assam-gold.jpg';
import masalaChaiImg from '@/assets/products/masala-chai.jpg';
import organicGreenImg from '@/assets/products/organic-green.jpg';

interface Product {
  id: string;
  name: string;
  category: 'Green Tea' | 'Masala Tea' | 'Premium Tea';
  image: string;
  description: string;
  tastingNotes: string;
  origin: string;
  pricing: { size: string; price: number; originalPrice?: number }[];
  rating: number;
  reviews: number;
  badge?: string;
}

const products: Product[] = [
  {
    id: 'darjeeling-first-flush',
    name: 'Premium Dust Tea Powder',
    category: 'Premium Tea',
    image: assamGoldImg,
    description: 'First-flush Darjeeling light, bright and floral with a delicate briskness.',
    tastingNotes: 'Muscatel and floral aromatics with citrusy undertones and a clean, brisk finish.',
    origin: 'Darjeeling, India',
    pricing: [
      { size: '125g', price: 99 },
      { size: '250g', price: 199 },
    ],
    rating: 5.0,
    reviews: 76,
    badge: 'Popular',
  },
  {
    id: 'masala-chai',
    name: 'Masala Tea Powder',
    category: 'Masala Tea',
    image: masalaChaiImg,
    description: 'Robust spiced black tea blend crafted for brewing with milk warm and invigorating.',
    tastingNotes: 'A warming mix of cinnamon, cardamom, ginger and clove full-bodied and comforting.',
    origin: 'Kerala, India',
    pricing: [
      { size: '125g', price: 139 },
      { size: '250g', price: 249 },
    ],
    rating: 4.9,
    reviews: 215,
    badge: 'Limited',
  },
  {
    id: 'organic-green',
    name: 'Organic Green Tea Powder',
    category: 'Green Tea',
    image: organicGreenImg,
    description: 'Handpicked organic green tea with a fresh, grassy character and a clean finish.',
    tastingNotes: 'Vegetal and fresh with subtle sweet notes, light umami and a crisp, clean finish.',
    origin: 'Nilgiris, India',
    pricing: [
      { size: '50g', price: 149 },
      { size: '100g', price: 289 },
    ],
    rating: 4.7,
    reviews: 89,
    badge: 'Natural',
  },
];

const categories = ['All', 'Green Tea', 'Masala Tea', 'Premium Tea'];

export function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize selected sizes to first option for each product
  useEffect(() => {
    const initialSizes: Record<string, number> = {};
    products.forEach((product) => {
      initialSizes[product.id] = 0;
    });
    setSelectedSizes(initialSizes);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppOrder = (product: Product) => {
    const sizeIndex = selectedSizes[product.id] || 0;
    const selectedPricing = product.pricing[sizeIndex];
    const message = encodeURIComponent(
      `Hi TeaHub — I'm interested in ${product.name} (${selectedPricing.size}) at ₹${selectedPricing.price}. Please help with delivery.`
    );
    window.open(`https://wa.me/918754148249?text=${message}`, '_blank');
  };

  return (
    <section ref={sectionRef} id="flavours" className="section-padding bg-background relative">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className={cn(
              'inline-block text-gold text-xs tracking-[0.3em] uppercase mb-4 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Our Collection
          </span>
          <h2
            className={cn(
              'font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Exquisite <span className="text-gradient-gold">Flavours</span>
          </h2>
          <p
            className={cn(
              'text-ivory-muted max-w-2xl mx-auto text-lg transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Find your perfect brew. All products FSSAI certified for safety and quality.
          </p>
        </div>

        {/* Filters */}
        <div
          className={cn(
            'flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-ivory-muted mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm transition-all duration-300',
                  activeCategory === category
                    ? 'bg-gold text-background'
                    : 'bg-card text-ivory-muted hover:text-ivory hover:bg-card-hover border border-border'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search teas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 bg-card border border-border rounded-lg text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => {
            const sizeIndex = selectedSizes[product.id] || 0;
            const selectedPricing = product.pricing[sizeIndex];

            return (
              <article
                key={product.id}
                className={cn(
                  'group bg-card border border-border rounded-xl overflow-hidden card-hover transition-all duration-500',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms',
                }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-background text-xs font-medium rounded-full">
                      {product.badge}
                    </span>
                  )}

                  {/* FSSAI Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-background/90 backdrop-blur-sm rounded-full border border-gold/30">
                    <Shield className="w-3 h-3 text-gold" />
                    <span className="text-[10px] text-gold font-medium">FSSAI</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gold/80 text-xs tracking-wider uppercase">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-ivory text-sm">{product.rating}</span>
                      <span className="text-muted-foreground text-xs">({product.reviews})</span>
                    </div>
                  </div>

                  {/* Name & Description */}
                  <h3 className="font-serif text-xl text-ivory mb-2 group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-ivory-muted text-sm mb-3">{product.description}</p>

                  {/* Tasting Notes */}
                  <p className="text-muted-foreground text-xs italic mb-4">
                    {product.tastingNotes}
                  </p>

                  {/* Sizes */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.pricing.map((pricing, idx) => (
                      <button
                        key={pricing.size}
                        onClick={() =>
                          setSelectedSizes((prev) => ({ ...prev, [product.id]: idx }))
                        }
                        className={cn(
                          'px-3 py-1.5 border rounded text-xs transition-all duration-300',
                          idx === sizeIndex
                            ? 'bg-gold text-background border-gold'
                            : 'bg-background border-border text-ivory-muted hover:border-gold/50'
                        )}
                      >
                        {pricing.size}
                      </button>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-2xl text-gold">
                      ₹{selectedPricing.price}
                    </span>
                    {selectedPricing.originalPrice && (
                      <span className="text-muted-foreground line-through text-sm">
                        ₹{selectedPricing.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Order Button */}
                  <Button
                    variant="heroSolid"
                    className="w-full"
                    onClick={() => handleWhatsAppOrder(product)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-ivory-muted text-lg">No teas found matching your criteria.</p>
            <Button
              variant="gold"
              className="mt-4"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-ivory-muted mb-4">
            Can't find what you're looking for? We have more exclusive blends.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a
              href="https://wa.me/918754148249?text=Hi%20TeaHub%20%E2%80%94%20I%27d%20like%20to%20know%20about%20your%20full%20collection."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask for Custom Blends
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
