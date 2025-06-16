import ThinkBigger from '@/components/about/ThinkBigger';
import HeroCarousel from '@/components/hero/HeroCarousel'
import Client from '@/components/home/Client';
import WhoWeAre from '@/components/home/WhoWeAre';
import React from 'react'
import { Metadata } from 'next';
import TheTeam from '@/components/team/TheTeam';
import JoinTheTeam from '@/components/team/JoinTheTeam';
import Values from '@/components/values/Values';

export const metadata: Metadata = {
  title: "About"
};




const Page = () => {
  return (
    <section>
       <HeroCarousel
        image={'/hero/aboutHero.png'}
        title="HELP BUSINESSES GROW THROUGH TECH SOLUTIONS."
      />
      <ThinkBigger/>
      <WhoWeAre/>
      <Client/>
      <TheTeam/>
      <Values/>
      <JoinTheTeam/>
    </section>
  )
}

export default Page
