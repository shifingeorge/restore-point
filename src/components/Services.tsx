const services = [
  {
    id: '01',
    title: 'Laptop Repair',
    description: 'Hardware repairs, screen replacement, data recovery',
    image: '/images/laptop-repair.jpg',
  },
  {
    id: '02',
    title: 'Mobile Repair',
    description: 'Screen repairs, battery replacement, software issues',
    image: '/images/mobile-repair.jpg',
  },
  {
    id: '03',
    title: 'Data Recovery',
    description: 'Professional data recovery from all storage devices',
    image: '/images/data-recovery.jpg',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="sticky top-40 self-start h-fit">
          <h2 className="font-grotesk text-2xl font-bold text-black leading-tight mb-6">Our Services</h2>
          <p className="text-2xl text-gray-600 mb-6">
            Being the best laptop service in Kakkanad, at Restore Point, we offer comprehensive repair and support services for laptops, mobile devices, tablets, and data recovery.
          </p>
          <p className="text-2xl text-gray-600 mb-6">
            Whether you're facing hardware malfunctions, software issues, or critical data loss, our experienced technicians are equipped to deliver fast, reliable, and secure solutions. We’re committed to restoring your devices to peak performance with expert care and genuine components.
          </p>
        </div>

        {/* Right Column: Sticky Stack Scroll */}
        <div className="relative h-[300vh]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="sticky top-40 transition-transform duration-500"
              style={{
                zIndex: index+1,
                marginTop: `${index * 100}px`,
              }}
            >
              <div
                className={`relative p-8 min-h-[400px] rounded-2xl border shadow-xl overflow-hidden`}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />

                {/* Service Number */}
                <div className="absolute top-6 left-6 text-3xl text-white font-bold z-10">
                  {service.id}
                </div>

                {/* Title and Description */}
                <h3 className="absolute bottom-20 text-4xl font-bold text-white z-10">
                  {service.title}
                </h3>
                <p className="absolute bottom-9 pr-2 lg:text-2xl sm:text-sm text-white z-10">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
