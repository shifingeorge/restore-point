//import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/cover.avif')] bg-cover bg-center"></div>
        
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="flex items-center min-h-[80vh]">
          <div className="text-left">
            <h1 className="font-grotesk text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Best laptop
              <br />
              <span className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                service centre
              </span> 
              <br />
              in Kakkanad
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
              From Cracked Screens to Lost Data, We’ve Got You Covered – Comprehensive Device Repair & Recovery Services in Kakkanad.
            </p>

            <div className="flex justify-start">
              <button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
