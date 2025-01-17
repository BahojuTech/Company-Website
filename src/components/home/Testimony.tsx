import TestimonialCard from '@/components/home/testimonialCard/TestimonialCard';
import Image from 'next/image';
import React from 'react';

const Testimony = () => {
  return (
    <section className="pt-20 flex items-center justify-center">
      {/* Wrapper */}
      <div className="w-full bg-primaryLight pb-10 px-6 bg-opacity-60">
        <div className="flex flex-col overflow-hidden max-w-[1200px] mx-auto items-center justify-center">
          {/* Header */}
          <div className="py-10 text-center ">
            <h4 className="text-3xl text-primaryThick font-bold">Testimonials</h4>
            <p className="font-semibold">What Our Clients say about us</p>
            <div className="flex w-fit m-auto items-center gap-2">
              <p>4.7 (Client Reviews)</p>
              <Image src={'/star.png'} alt="stars" width={120} height={24} />
            </div>
          </div>

          {/* Sliding Cards */}
          <div
            className="flex gap-8 animate-slide"
            style={{
              animationDuration: '12s',
              animationIterationCount: 'infinite',
            }}
          >
            <TestimonialCard
              name="Nick Nicholson"
              title="Business Manager"
              img={'/img.png'}
              desc="Working with BAHOJU was a game changer. Their customized solutions boosted our brand visibility and engagement. Excellent support!"
            />
            <TestimonialCard
              name="Kate Henderson"
              title="CEO FastTrack"
              img={'/img2.png'}
              desc="BAHOJU expertise did an amazing mobile app for my company, which has been the best decision of my life. Great team and wonderful experience."
            />
            <TestimonialCard
              name="Jennifer Wajda"
              title="CEO Slushway"
              img={'/img3.png'}
              desc="BAHOJU transformed our online presence. Their innovative strategies drove incredible growth to my company. Highly professional team with exceptional results. Highly recommended!"
            />
            <TestimonialCard
              name="Martins Leonard"
              title="Founder Lokmart"
              img={'/img4.png'}
              desc="Amazing digital marketing services. BAHOJU’s expertise helped us reach our target audience effectively. Great communication and results."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
