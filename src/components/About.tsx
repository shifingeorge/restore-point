//import React, { useEffect, useRef } from 'react';
import { useRef,useEffect } from 'react';
//import { Award } from 'lucide-react';

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      }
      };

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className=" py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="relative max-w-7xl mx-8 lg:px-24 sm:mx-6">
        <div className="text-left mb-8">
          <span className="font-grotesk text-2xl font-bold text-black leading-tight mb-6">ABOUT US</span>
        </div>

        <div 
          ref={sectionRef}
        >
          {/* Left Content /*text-lg text-gray-600 mb-6*/}
          <div>
            <h2 className="text-4xl lg:text-6xl text-gray-900 leading-tight mb-6">
              With over 10 years of experience, we've helped thousands of customers in Kochi with their device repair needs. Our certified technicians provide fast, reliable service with genuine parts and warranty.
            </h2>
            
            <button
            onClick={scrollToContact}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Get Fixed</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;