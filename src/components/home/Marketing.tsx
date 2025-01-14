import MarketingCard from '@/components/home/marketingCard/MarketingCard'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const Marketing = () => {
  return (
    <section className='py-48'>  
        <div  className='flex gap-3 align-middle max-w-[1200px] mx-auto -mt-80'>
            <MarketingCard icon={<FaSearch />} title='SEO' desc='Boost your online visibilty and rankings.'/>
            <MarketingCard icon={<FaGooglePlusG />} title='Google Ads' desc='Targeted campaigns to maximize ROI.'/>
            <MarketingCard icon={<FaSearch />} title='Social Media Campaigns' desc='Engaging strategies for audience connection.'/>
            <MarketingCard icon={<FaSearch />} title='Business Branding Solutions' desc='Business Branding Solutions crafts impactful, tailored identities for businesses..'/>
        </div>
    </section>
  )
}

export default Marketing