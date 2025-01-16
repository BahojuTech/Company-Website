import ThinkBigger from '@/components/about/ThinkBigger';
import HeroCarousel from '@/components/hero/HeroCarousel'
import Client from '@/components/home/Client';
import WhoWeAre from '@/components/home/WhoWeAre';
import React from 'react'
import Marketing from '@/components/about/Marketing';
import Brand from '@/components/home/Brand';
import Testimony from '@/components/home/Testimony';
import Started from '@/components/about/Started';


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
      <Brand title='Recharging your brand to its maximum value.' img='/Rectangle about.png'/>
      <Started/>
      <Testimony/>
    </section>
  )
}

export default page