import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Reviews } from '@/components/Reviews';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { ScrollProgress } from '@/components/ScrollProgress';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Reviews />
      <Footer />
      <FloatingWhatsApp />

      {/* JSON-LD Breadcrumb for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://teahub.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Our Teas",
              "item": "https://teahub.com/#flavours"
            }
          ]
        })
      }} />
    </main>
  );
};

export default Index;
