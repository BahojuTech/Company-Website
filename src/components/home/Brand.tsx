import Image from 'next/image'
import React from 'react'

type BrandProps = {
  title?: string;
  img?: string;
  children: any;
}

const Brand = ({title, img, children}: BrandProps) => {
  return (
    <section className='py-20 flex items-center justify-center' >
        <div className='grid text-center lg:text-left gap-6  lg:flex gap-x-16 max-w-[1200px] items-center justify-center px-6'>
            <div className='flex-1'>
              <h3 className='text-2xl text-primary font-semibold mb-5'>{title}</h3>
              <div className='flex lg:block justify-center items-center'>
               <Image src={img || ''} alt='/' width={500} height={354} />
              </div>
            </div>
            <div className=' grid gap-5 flex-1 text-lg'>
             {children}
                {/* <p>
                At <span className='text-primary font-bold'>BAHOJU</span> , we believe that every brand has untapped potential waiting to be unlocked. Our mission is to recharge your brand, enhancing its value and positioning it for long-term success in the competitive digital landscape. We use innovative digital marketing strategies to breathe new life into your brand and help it thrive in an ever-changing market.
                </p>
                <p>
                Your brand’s identity is the foundation of its success. We work with you to refine and elevate your brand’s image, ensuring it resonates with your target audience . Whether it’s a complete brand overhaul or a subtle refresh, we tailor our approach to fit your vision and goals.
                </p> */}
            </div>
        </div>
       
    </section>
  )
}

export default Brand