import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Teas', href: '#flavours' },
  { name: 'Reviews', href: '#reviews' },
];

const teaCategories = [
  { name: 'Classic Black', href: '#flavours' },
  { name: 'Premium Blends', href: '#flavours' },
  { name: 'Masala Chai', href: '#flavours' },
  { name: 'Herbal & Green', href: '#flavours' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Shipping Info', href: '/shipping' },
  { name: 'Returns', href: '/returns' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to TeaHub!",
      description: "You'll receive a confirmation email shortly. Thank you for subscribing!",
    });
    
    setEmail('');
    setIsSubscribing(false);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#hero" className="inline-block mb-6">
              <span className="font-serif text-3xl text-gold">TeaHub</span>
            </a>
            <p className="text-ivory-muted text-sm leading-relaxed mb-6">
              Curating the world's finest teas since 2009. Single-origin, small-batch, 
              crafted for connoisseurs who appreciate the art of leaf and luxury.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/teahub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-ivory-muted hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/teahub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-ivory-muted hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/teahub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-ivory-muted hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-ivory mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-ivory-muted hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tea Categories */}
          <div>
            <h3 className="font-serif text-lg text-ivory mb-6">Our Teas</h3>
            <ul className="space-y-3">
              {teaCategories.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-ivory-muted hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-serif text-lg text-ivory mb-6">Stay Connected</h3>
            
            {/* Contact Info */}
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ivory-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@teahub.com"
                  className="flex items-center gap-3 text-ivory-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hello@teahub.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-3 text-ivory-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-start gap-3 text-ivory-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Mumbai, Maharashtra, India
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-ivory text-sm mb-3">Join our tea circle</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background border-border text-ivory placeholder:text-muted-foreground focus:border-gold/50"
                  required
                />
                <Button
                  type="submit"
                  variant="gold"
                  size="icon"
                  disabled={isSubscribing}
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-muted-foreground text-xs mt-2">
                Double opt-in. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA Bar */}
      <div className="bg-[#25D366]/10 border-t border-[#25D366]/20">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-ivory font-medium">Ready to discover your perfect tea?</p>
              <p className="text-ivory-muted text-sm">We're just a message away</p>
            </div>
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20TeaHub%20%E2%80%94%20I%27m%20interested%20in%20your%20premium%20teas.%20Please%20help%20with%20pricing%20and%20delivery."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} TeaHub. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center gap-4">
                  <a href={link.href} className="hover:text-gold transition-colors duration-300">
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
