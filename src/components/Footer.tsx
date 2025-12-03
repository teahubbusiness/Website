import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Teas', href: '#flavours' },
  { name: 'Reviews', href: '#reviews' },
];

const teaCategories = [
  { name: 'Premium Tea', href: '#flavours' },
  { name: 'Masala Tea', href: '#flavours' },
  { name: 'Green Tea  ', href: '#flavours' },
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
              Curating the world's finest teas since 2025. Single-origin, small-batch, 
              crafted for connoisseurs who appreciate the art of leaf and luxury.
            </p>
            
            {/* Social Links */}
           
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
                  href="https://wa.me/918754148249"
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
                  href="https://www.instagram.com/teahub.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ivory-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  @teahub.co
                </a>
              </li>
              <li>
                <a
                  href="mailto:teahubbusiness@gmail.com"
                  className="flex items-center gap-3 text-ivory-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                    teahubbusiness@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8754148249"
                  className="flex items-center gap-3 text-ivory-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +91 8754148249
                </a>
              </li>
              <li className="flex items-start gap-3 text-ivory-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Coimbatore, India
              </li>
            </ul>

            {/* Newsletter */}
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
                href="https://wa.me/918754148249?text=Hi%20TeaHub%20%E2%80%94%20I%27m%20interested%20in%20your%20premium%20teas.%20Please%20help%20with%20pricing%20and%20delivery."
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
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} TeaHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
