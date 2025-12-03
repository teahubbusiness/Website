# TeaHub — Premium Tea Brand Website

A luxurious, SEO-optimized single-page website for TeaHub, a premium tea powder brand. Built with React, TypeScript, and Tailwind CSS with a sophisticated black & gold design theme.

![TeaHub Preview](src/assets/hero-tea-bg.jpg)

## Features

- **Elegant Dark Theme**: Deep black background with warm gold (#C9A65A) accents
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Parallax effects, fade-ins, and micro-interactions
- **SEO Optimized**: Complete meta tags, structured data (JSON-LD), sitemap
- **WhatsApp Integration**: One-click contact with pre-filled messages
- **Product Catalog**: Filterable tea collection with ratings and pricing
- **Reviews Carousel**: Customer testimonials with auto-play
- **Accessibility**: Keyboard navigation, semantic HTML, reduced motion support

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: shadcn/ui (customized)
- **Build Tool**: Vite
- **Icons**: Lucide React

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/           # Images and static assets
│   ├── products/     # Product images
│   ├── hero-tea-bg.jpg
│   ├── tea-cup-hero.jpg
│   └── logo.png
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── Reviews.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   └── ScrollProgress.tsx
├── pages/
│   └── Index.tsx    # Main page
├── index.css        # Design system & global styles
└── main.tsx         # App entry point
```

## How to Update Content

### Changing Product Information
Edit `src/components/Products.tsx`:
```typescript
const products: Product[] = [
  {
    id: 'your-product-id',
    name: 'Product Name',
    category: 'Classic' | 'Masala' | 'Herbal' | 'Premium',
    image: yourProductImage,
    description: 'Short description',
    tastingNotes: 'Flavor profile',
    origin: 'Origin location',
    price: 599,
    originalPrice: 749, // Optional - for discounts
    sizes: ['50g', '100g'],
    rating: 4.9,
    reviews: 128,
    badge: 'Bestseller', // Optional
  },
  // ... more products
];
```

### Changing WhatsApp Number
Search and replace `91XXXXXXXXXX` with your actual WhatsApp number (with country code, no + or spaces):
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Products.tsx`
- `src/components/Footer.tsx`
- `src/components/FloatingWhatsApp.tsx`

### Changing Reviews
Edit `src/components/Reviews.tsx`:
```typescript
const reviews: Review[] = [
  {
    id: '1',
    name: 'Customer Name',
    location: 'City',
    avatar: 'CN', // Initials
    rating: 5,
    date: '2024-11-15',
    text: 'Review text...',
    product: 'Product Name',
  },
];
```

### Changing Colors
Edit `src/index.css` to modify the design system:
```css
:root {
  --gold: 42 50% 57%;        /* Primary accent color */
  --gold-light: 42 55% 70%;  /* Lighter gold */
  --ivory: 40 33% 96%;       /* Main text color */
}
```

## SEO Checklist

### Implemented ✓
- [x] Page title with keywords (under 60 chars)
- [x] Meta description (under 160 chars)
- [x] Open Graph tags (og:title, og:description, og:image)
- [x] Twitter Card tags
- [x] Canonical URL
- [x] Single H1 per page
- [x] Semantic HTML5 structure (header, main, section, article, footer)
- [x] Alt text on all images
- [x] JSON-LD structured data:
  - Organization schema
  - Product schema with AggregateRating
  - Review snippets
  - BreadcrumbList
- [x] sitemap.xml
- [x] robots.txt
- [x] Mobile responsive (viewport meta)
- [x] Theme color meta tags

### Before Launch
- [ ] Replace placeholder WhatsApp number (+91XXXXXXXXXX)
- [ ] Update canonical URL to actual domain
- [ ] Add actual OG image (1200x630px recommended)
- [ ] Replace logo.png with brand logo
- [ ] Update social media links in Footer
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics/GA4

## Performance Tips

- Images are lazy-loaded (except hero)
- CSS animations respect `prefers-reduced-motion`
- Critical hero content loads first
- Fonts preconnected for faster loading
- Consider adding:
  - Image compression (WebP/AVIF)
  - Service worker for caching
  - CDN for static assets

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload `dist` folder to Netlify
```

### Manual
```bash
npm run build
# Serve `dist` folder with any static file server
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2024 TeaHub. All rights reserved.

---

Built with ❤️ for tea connoisseurs
