import OfferCard from '@/components/home/offerCard/OfferCard'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { CiCloudOn } from "react-icons/ci";
import { MdPhonelink } from "react-icons/md";


const Offer = () => {
  return (
    <section className='bg-primaryDark h-screen flex items-center justify-center' >
        <div className='flex gap-52 max-w-[1200px] items-center justify-center'>
            <div className=' grid gap-10 text-center'>
                <div>
                    <h2 className='text-4xl text-primary font-semibold mb-2'>What we offer</h2>
                    <p className='text-lg text-white font-light'>Empowering your brand to enhance customer experiences</p>
                </div>
                <div  className='flex gap-3 align-middle max-w-[1200px] mx-auto'>
                    <OfferCard icon={<MdPhonelink />} title='Digital Marketing services' desc='Digital marketing services boost online presence, drive engagement and increase conversions through strategic campaigns.'/>
                    <OfferCard icon={<CiCloudOn />} title='Software & Mobile App Development' desc='Software and mobile app development involves creating applications to enhance user experiences and functionality.'/>
                    <OfferCard icon={<CiCloudOn />} title='Business Branding' desc='Business branding is the strategic process of creating a unique identity and image for a company, fostering customer loyalty and differentiation through consistent messaging, visuals and values'/>
                    <OfferCard icon={<FaSearch />} title='Cloud Computing & Storage Solutions' desc='Cloud computing and storage solutions provide scalable, on-demand access to data and computing resources online.'/>
                </div>
                <div className='text-white bg-primary w-fit m-auto py-3 px-6 rounded-xl'>
                Explore All our services
                </div>
            </div>
        </div>
       
    </section>
  )
}

export default Offer