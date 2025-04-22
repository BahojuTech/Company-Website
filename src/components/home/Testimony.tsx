'use client';
import Image from 'next/image';
import React from 'react';
import TestimonialCard from '@/components/home/testimonialCard/TestimonialCard';
import ArchieveStat from './archievedStat/ArchieveStat';
import { IoPeople } from 'react-icons/io5';
import { FaFile } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaUserShield } from 'react-icons/fa6';

const testimonies = [
  {
    name: 'Nick Nicholson',
    title: 'Business Manager',
    img: '/img.png',
    desc: 'Working with BAHOJU was a game changer. Their customized solutions boosted our brand visibility and engagement. Excellent support!',
  },
  {
    name: 'Jennifer Wajda',
    title: 'CEO Slushway',
    img: '/img2.png',
    desc: 'BAHOJU transformed our online presence. Their innovative strategies drove incredible growth to my company. Highly professional team with exceptional results. Highly recommended!',
  },
  {
    name: 'Kate Henderson',
    title: 'CEO FastTracks ',
    img: '/img3.png',
    desc: "BAHOJU's expertise did an amazing mobile app for my company which has been the best decision of my life. Great team and wonderful experience.",
  },
  {
    name: 'Martins Leonard',
    title: 'Founder Lokmart',
    img: '/img4.png',
    desc: "Amazing digital marketing services. BAHOJU's expertise helped us reach our target audience effectively. Great communication and results.",
  },
];

const Testimony = () => {
  return (
    <section className="pt-20 pb-40 relative z-10">
      {/* Background Image */}
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <Image
          src={'/testimony/testimonyHero.png'}
          alt="testimonial background"
          fill
          className="object-cover"
        />
      </div>

      {/* fixed images */}
      
        <Image
          src={'/testimony/thumbs.png'}
          alt="testimonial background"
          width={200}
          height={200}
          className="object-cover absolute top-0 left-0 -rotate-12"
        />

        <Image
          src={'/testimony/thumbs.png'}
          alt="testimonial background"
          width={200}
          height={200}
          className="object-cover absolute bottom-0 right-10"
        />
      

      {/* Archive Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-fit bg-white rounded-2xl p-4 mb-7">
        <ArchieveStat number={300} desc="CLIENTS" icon={<IoPeople />} />
        <ArchieveStat number={500} desc="PROJECTS" icon={<FaFile />} />
        <ArchieveStat
          number={1250}
          desc="HOURS OF SUPPORT"
          icon={<RiCustomerService2Fill />}
        />
        <ArchieveStat number={14} desc="PROFESSIONAL EMPLOYEES" icon={<FaUserShield />} />
      </div>

      {/* Heading */}
      <h2 className="text-center text-5xl font-bold text-primary mb-24">Testimonials</h2>

      {/* Testimonials Grid */}
      <div className="grid gap-8 justify-center md:grid-cols-2 lg:grid-cols-4 px-4">
        {testimonies.map((item, index) => (
          <TestimonialCard
            key={index}
            img={item.img}
            name={item.name}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimony;
