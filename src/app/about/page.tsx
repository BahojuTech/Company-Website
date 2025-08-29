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
<<<<<<< blog
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
=======
      <TheTeam/>
      <Values/>
      <JoinTheTeam/>
>>>>>>> master
    </section>
  )
}

export default Page
