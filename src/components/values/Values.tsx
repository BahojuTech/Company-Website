'use client';
import Image from 'next/image';
import React from 'react';

const values = [
  {
    id: 1,
    header: 'Bold, Not Reckless',
    desc: 'We take smart risks, challenge the norm, and push boundaries—without compromising on quality or purpose.',
  },
  {
    id: 2,
    header: 'Innovation',
    desc: 'We drive change with innovative tech, grounded in ethics, fairness, and accountability.',
    img: '/values/innovation.png', // Your innovation image
  },
  {
    id: 3,
    header: 'Quality',
    desc: "Whether it's the precision of our code, the aesthetics of our designs, or the reliability of our services, we believe that every detail matters in delivering excellence.",
  },
  {
    id: 4,
    header: 'Passion',
    desc: 'We build to leave a lasting impact on individuals, industries, and society as a whole.',
  },
  {
    id: 5,
    header: 'Growth',
    desc: 'We cultivate a culture of learning, experimentation, and improvement, empowering our team to evolve alongside the tech we create.',
  },
];

const Values = () => {
  return (
    <section className="relative py-20 px-6 flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/background/blue_peddles.png"
          alt="testimonial background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl w-full z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Our Values
        </h2>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full gap-8">
            {/* Bold */}
            <div className="bg-white text-[#005F87] p-6 rounded-2xl shadow-md flex-1">
              <h3 className="font-bold text-xl mb-2">{values[0].header}</h3>
              <p className="text-sm">{values[0].desc}</p>
            </div>
            {/* Passion */}
            <div className="bg-white text-[#005F87] p-6 rounded-2xl shadow-md flex-1">
              <h3 className="font-bold text-xl mb-2">{values[3].header}</h3>
              <p className="text-sm">{values[3].desc}</p>
            </div>
          </div>

          {/* Middle Column (Innovation) */}
          <div className="flex flex-col items-center justify-center bg-white text-[#005F87] p-6 rounded-2xl shadow-md h-full">
            <h3 className="font-bold text-2xl mb-4">{values[1].header}</h3>
            <p className="text-sm text-center">{values[1].desc}</p>
            <Image
              src={values[1].img!}
              alt="Innovation"
              width={326}
              height={203}
              className="w-[326px] h-[203px] object-contain mt-6"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between h-full gap-8">
            {/* Quality */}
            <div className="bg-white text-[#005F87] p-6 rounded-2xl shadow-md flex-1">
              <h3 className="font-bold text-xl mb-2">{values[2].header}</h3>
              <p className="text-sm">{values[2].desc}</p>
            </div>
            {/* Growth */}
            <div className="bg-white text-[#005F87] p-6 rounded-2xl shadow-md flex-1">
              <h3 className="font-bold text-xl mb-2">{values[4].header}</h3>
              <p className="text-sm">{values[4].desc}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Values;
