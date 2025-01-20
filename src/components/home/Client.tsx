import React from 'react';

const Client = () => {
  const logos = [
    { src: '/AwwwARDS.png', alt: 'AwwwARDS' },
    { src: '/envato.png', alt: 'Envato' },
    { src: '/Pixeden.png', alt: 'Pixeden' },
  ];

  return (
    <section className="m-auto max-w-[1200px] py-24 bg-gray-50">
      <div className="text-center px-6">
        <h6 className="text-primary mb-2 text-xl font-semibold">
          We have more than 200 satisfied clients that works with us
        </h6>
        <div className="relative w-[50%] m-auto overflow-hidden">
          <div className="flex animate-scroll">

            {/* First set of logos */}
            <div className="flex gap-16 shrink-0">
              {logos.map((logo, index) => (
                <img
                  key={`logo1-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-20 h-8 object-contain"
                />
              ))}
            </div>
            {/* Duplicate set of logos for seamless loop */}
            <div className="flex gap-16 shrink-0 pl-16">
              {logos.map((logo, index) => (
                <img
                  key={`logo2-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-20 h-8 object-contain"
                />
              ))}
            </div>

            {/* Duplicate 2 set of logos for seamless loop */}
            <div className="flex gap-16 shrink-0 pl-16">
              {logos.map((logo, index) => (
                <img
                  key={`logo3-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-20 h-8 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;