//import { Laptop, Smartphone, HardDrive } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Laptop Repair',
    description: 'Hardware repairs, screen replacement, data recovery',
    bgColor: 'bg-[#171c23]',
    textColor: 'text-white',
    borderColor: 'border-blue-500/20',
  },
  {
    id: '02',
    title: 'Mobile Repair',
    description: 'Screen repairs, battery replacement, software issues',
    textColor: 'text-[#171c23]',
    bgColor: 'bg-[#b4b9ff]',
    borderColor: 'border-purple-500/20',
  },
  {
    id: '03',
    title: 'Data Recovery',
    description: 'Professional data recovery from all storage devices',
    bgColor: 'bg-[#171c23]',
    textColor: 'text-white',
    borderColor: 'border-green-500/20',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="sticky top-40 self-start h-fit">
          <h2 className="font-grotesk text-2xl font-bold text-black leading-tight mb-6 ">Our Services</h2>
          <p className="text-2xl text-gray-600 mb-6">
            Being the best laptop service in Kakkanad, at Restore Point, we offer comprehensive repair and support services for laptops, mobile devices, tablets, and data recovery.
          </p>
          <p className="text-2xl text-gray-600 mb-6">
            Whether you're facing hardware malfunctions, software issues, or critical data loss, our experienced technicians are equipped to deliver fast, reliable, and secure solutions. We’re committed to restoring your devices to peak performance with expert care and genuine components.
          </p>
        </div>

        {/* Right Column: Sticky Stack Scroll */}
        <div className="relative h-[180vh]">
          {services.map((service, index) => {
            //const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="sticky top-40 transition-transform duration-500"
                style={{
                  zIndex: length +1,
                  marginTop: `${index * 100}px`,
                }}
              >
                <div
                  className={`relative p-8 min-h-[400px] rounded-2xl border shadow-xl ${service.textColor} ${service.bgColor} ${service.borderColor}`}
                >
                  {/* Service Number */}
                  <div className="absolute top-6 left-6 text-3xl text-gray-200 font-bold">
                    {service.id}
                  </div>

                  {/* Title and Description */}
                  <h3 className="absolute bottom-20 text-4xl font-bold mb-2">{service.title}</h3>
                  <p className=" absolute bottom-9 pr-2 lg:text-2xl sm:text-sm xs:text-sm">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    //<img src="/path-to-your-image.jpg" alt="Full width banner" className="w-full h-auto object-cover"/>
  );
};

export default Services;
