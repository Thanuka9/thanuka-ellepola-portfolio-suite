import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, Linkedin, MapPin, Download, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#thesis' },
    { label: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    { icon: Mail, label: 'thanuka.ellepola@email.com', href: 'mailto:thanuka.ellepola@email.com' },
    { icon: Phone, label: '+94 77 670 5832', href: 'tel:+94776705832' },
    { icon: Linkedin, label: 'LinkedIn Profile', href: 'https://linkedin.com/in/thanuka-ellepola' },
    { icon: MapPin, label: 'Colombo, Sri Lanka', href: null }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-bold text-2xl mb-4">
                Thanuka Ellepola
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
                Data Scientist & Full Stack Developer specializing in healthcare analytics, 
                predictive modeling, and enterprise web applications. Transforming complex 
                business challenges into innovative technological solutions.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="gradient" 
                  onClick={() => window.open('https://drive.google.com/file/d/1-qfFUhpeUF8G_uWDhASd9qj3DI0suTyT/view?usp=drive_link', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  className="border-neutral-600 text-neutral-300 hover:bg-neutral-800"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-neutral-300 hover:text-white transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <li key={index}>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="flex items-center text-neutral-300 hover:text-white transition-colors duration-300 group"
                        >
                          <IconComponent className="h-4 w-4 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm">{contact.label}</span>
                        </a>
                      ) : (
                        <div className="flex items-center text-neutral-300">
                          <IconComponent className="h-4 w-4 mr-3 flex-shrink-0" />
                          <span className="text-sm">{contact.label}</span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-neutral-800" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="flex items-center text-neutral-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Thanuka Ellepola. All rights reserved.</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center text-neutral-400 text-sm mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-400 fill-current" />
              <span>for innovation in healthcare technology</span>
            </div>

            {/* Professional Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/in/thanuka-ellepola"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:thanuka.ellepola@email.com"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
              <button
                onClick={() => window.open('https://drive.google.com/file/d/1-qfFUhpeUF8G_uWDhASd9qj3DI0suTyT/view?usp=drive_link', '_blank')}
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="Download CV"
              >
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;