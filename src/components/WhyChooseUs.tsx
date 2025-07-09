import { useEffect, useRef } from 'react';
//import { Shield, Clock, Award, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
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

  const features = [
    {
      number: '01',
      title: 'Privacy-Focused Protection',
      description: 'We prioritize privacy-focused protection, ensuring your data remains secure throughout the laptop restoration process.',
      //icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'Quick Turnaround Time',
      description: 'We offer quick turnaround times, with most repairs completed within 24–48 hours and express service available on request.',
      //icon: Clock,
      color: 'from-green-500 to-green-600'
    },
    {
      number: '03',
      title: 'Expert Certification',
      description: 'All our technicians are certified professionals with extensive training and hands-on expertise.',
      //icon: Award,
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: '04',
      title: '24/7 Customer Support',
      description: 'We offer round-the-clock support to assist you with any device repair queries or concerns at any time.',
      //icon: HeadphonesIcon,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden rounded-[32px]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div 
            ref={sectionRef}
            className="opacity-0 translate-x-8"
          >
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 block">
              Why Choose Restore Point?
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Because we are the best laptop service in Kakkanad.
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Your Privacy Is Our Priority. Your Trust Is Our Commitment. At Restore Point, your privacy and data security are our top priorities. That’s why we take every measure to protect your privacy while delivering expert repairs.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                //const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-blue-400">
                          {feature.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="aspect-square relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl ">
                <img
                  src={'/images/whychooseus.png'}
                  alt="Laptop keyboard with colorful lighting effects"
                  className="w-full h-full object-cover"
                />
                
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateX(2rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-reveal {
          animation: reveal 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
