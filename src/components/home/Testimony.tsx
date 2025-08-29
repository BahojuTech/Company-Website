import TestimonialCard from '@/components/home/testimonialCard/TestimonialCard';
import Image from 'next/image';
import React from 'react';

const tesimonies =[
  {
    name:"Nick Nicholson", title:"Business Manager",  img:'/img.png',  desc:"Working with BAHOJU was a game changer. Their customized solutions boosted our brand visibility and engagement. Excellent support!"
  },
  {
    name:"Jennifer Wajda", title:"CEO Slushway",  img:'/img2.png',  desc:"BAHOJU transformed our online presence. Their innovative strategies drove incredible growth to my company. Highly professional team with exceptional results. Highly recommended!"
  },
  {
    name:"Kate Henderson", title:"CEO FastTracks ",  img:'/img3.png',  desc:"BAHOJU's expertise did an amazing mobile app for my company which has been the best decision of my life. Great team and wonderful experience."
  },
  {
    name:"Martins Leonard", title:"Founder Lokmart",  img:'/img4.png',  desc:"Amazing digital marketing services. BAHOJU's expertise helped us reach our target audience effectively. Great communication and results."
  },
]

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
            className="flex animate-slide  "
          >
            {/* firstt set of card */}
            <div className="flex gap-16 shrink-0">
              {
                tesimonies.map((tes, index) => (
                  <TestimonialCard key={`card1-${index}`}
                  name={tes.name}
                  title={tes.title}
                  img={tes.img}
                  desc={tes.desc}
                  />
                ))
              }
            </div>

             {/* second set of card */}
              <div className="flex gap-16 shrink-0 pl-16">
              {
                tesimonies.map((tes, index) => (
                  <TestimonialCard key={`card2-${index}`}
                  name={tes.name}
                  title={tes.title}
                  img={tes.img}
                  desc={tes.desc}
                  />
                ))
              }
            </div>

             {/* third set of card */}
              <div className="flex gap-16 shrink-0 pl-16">
              {
                tesimonies.map((tes, index) => (
                  <TestimonialCard key={`card3-${index}`}
                  name={tes.name}
                  title={tes.title}
                  img={tes.img}
                  desc={tes.desc}
                  />
                ))
              }
            </div>

            <div className="flex gap-16 shrink-0 pl-16">
              {
                tesimonies.map((tes, index) => (
                  <TestimonialCard key={`card4-${index}`}
                  name={tes.name}
                  title={tes.title}
                  img={tes.img}
                  desc={tes.desc}
                  />
                ))
              }
            </div>

            <div className="flex gap-16 shrink-0 pl-16">
              {
                tesimonies.map((tes, index) => (
                  <TestimonialCard key={`card5-${index}`}
                  name={tes.name}
                  title={tes.title}
                  img={tes.img}
                  desc={tes.desc}
                  />
                ))
              }
            </div>

            <div className="flex gap-16 shrink-0 pl-16">
              {
                tesimonies.map((tes, index) => (
                  <TestimonialCard key={`card6-${index}`}
                  name={tes.name}
                  title={tes.title}
                  img={tes.img}
                  desc={tes.desc}
                  />
                ))
              }
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
