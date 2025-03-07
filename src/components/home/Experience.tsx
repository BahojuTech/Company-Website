'use client';

import ExperienceCard from '@/components/home/ExpereienceCard/ExperienceCard'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaMessage } from "react-icons/fa6";
import { TbChessQueenFilled } from "react-icons/tb";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";

const Experience = () => {
  const [animation, setAnimation] = useState(false);

  // Set up the intersection observer when the component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimation(true);  // Trigger animation when the section comes into view
          observer.disconnect(); // Stop observing once the animation is triggered
        }
      },
      {
        threshold: 0.5, // Trigger the animation when 50% of the section is in view
      }
    );

    const sectionElement = document.getElementById('experience-section'); // Target section
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.disconnect(); // Clean up the observer when the component unmounts
      }
    };
  }, []);

  return (
    <section
      id="experience-section"
      className="bg-primaryDark py-10 flex items-center justify-center"
    >
      <div className="px-6 grid gap-10 lg:flex lg:gap-52 max-w-[1200px] items-center justify-center">
        <Image
          src={'/Phone.png'}
          alt='/'
          width={360}
          height={570}
          className={`${animation ? 'slideup' : 'opacity-0'} m-auto`}
        />
        <div className="grid gap-5 ">
          <div>
            <h2 className="text-4xl text-primary font-semibold">Enhancing your brand’s customer experience</h2>
            <p className="text-white">
              Empowering your brand with innovative strategies to create exceptional customer experiences.
            </p>
          </div>
          <div>
            <ExperienceCard icon={<FaMessage />} title="FREE CONSULTATION" desc="Get a free consultation today and discover tailored digital strategies to grow your business" />
            <ExperienceCard icon={<TbChessQueenFilled />} title="PROFESSIONAL EXPERTS" desc="Our professional experts deliver innovative strategies to drive your brands growth and online success" />
            <ExperienceCard icon={<LuChartNoAxesCombined />} title="TARGET ORIENTED" desc="BAHOJU delivers data-driven,  target-oriented strategies to achieve your brand's goals with measurable results." />
            <ExperienceCard icon={<RiCustomerService2Fill />} title="24/7 PREMIUM SUPPORT" desc="Enjoy round  the clock, premium support to ensure your business runs smoothly, anytime, anywhere" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
