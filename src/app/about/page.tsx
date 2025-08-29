import ThinkBigger from '@/components/about/ThinkBigger';
import HeroCarousel from '@/components/hero/HeroCarousel'
import Client from '@/components/home/Client';
import WhoWeAre from '@/components/home/WhoWeAre';
import React from 'react'
import Marketing from '@/components/about/Marketing';
import Brand from '@/components/home/Brand';
import Testimony from '@/components/home/Testimony';
import Started from '@/components/about/Started';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About"
};


const images: string[] = [
  "/carousel1.jpg",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel4.png",
  "/carousel5.png",
];

const page = () => {
  return (
    <section>
       <HeroCarousel
        images={images}
        title="About us"
        description="Fueled by creativity,  Empowered by results."
      />
      <WhoWeAre/>
      <Client/>
      <ThinkBigger/> 
      <Marketing/>
      <Brand title='Recharging your brand to its maximum value.' img='/Rectangle about.png'>
        <p>At <span className='text-primary font-bold'>BAHOJU</span> , we believe that every brand has untapped potential waiting to be unlocked. Our mission is to recharge your brand, enhancing its value and positioning it for long-term success in the competitive digital landscape. We use innovative digital marketing strategies to breathe new life into your brand and help it thrive in an ever-changing market.
        </p>
        <p>
        Your brand's identity is the foundation of its success. We work with you to refine and elevate your brand's image, ensuring it resonates with your target audience . Whether it's a complete brand overhaul or a subtle refresh, we tailor our approach to fit your vision and goals.
        </p> 
      </Brand>
      <Started/>
      <Testimony/>
    </section>
  )
}

export default page