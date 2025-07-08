// import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'about' },
    { name: 'Why Choose Us', id: 'why-choose' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 relative overflow-hidden rounded-t-[48px]">
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left Column - Logo & Description */}
            <div className="lg:max-w-sm">
              <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => scrollToSection('home')}>
                <img src="/images/logo.png" alt="Restore Point Logo" className="h-8 sm:h-10 object-contain" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Kochi’s Trusted Repair Destination – Expert Solutions for Mobiles, Laptops, Tablets, and Complete Data Recovery with Genuine Parts and Guaranteed Service.
              </p>
            </div>

            {/* Right Column - Quick Links & Contact Info */}
            <div className="flex flex-col sm:flex-row gap-12">
              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-400 hover:text-white transition-colors duration-200 block"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400">Kakkanad, Kochi</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400">info@restorepoint.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2025 All rights reserved | Designed By Nainas Digital Advertising Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
