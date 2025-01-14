import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <section className=' h-screen flex items-center justify-center' >
        <div className='flex gap-10 max-w-[1200px] items-center justify-center'>
            <div className='flex-1'>
             <h3 className='text-xl text-primary font-semibold mb-5'>Unleashing your brand’s full potential with innovative digital marketing strategies</h3>
             <Image src={'/Rectangle 6.png'} alt='/' width={436} height={354} />
                
            </div>
            <div className=' grid gap-5 flex-1'>
                <p>
                At <span className='text-primary font-bold'>BAHOJU</span> , we believe every brand has untapped potentials. By leveraging innovative digital marketing strategies, 
                we help businesses break through the noise, reaching their target audience with precisions from SEO to social management. 
                Our customized approaches ensure your brand stands out, engages customers and drives growth. Unlock the growth, unlock the power of digital
                 marketing and see your brand thrive like never before.
                </p>
                <p>
                Unleash your brand’s full potential with <span className='text-primary font-bold'>BAHOJU</span> , our team of experts uses cutting-edge digital marketing techniques to 
                create campaigns that not only attract but also converts. We focus on tailored strategies that resonate with your audiences, 
                increased brand visibility, and drive measurable results. Let us transform your digital presence into a powerhouse of success.
                </p>
            </div>
        </div>
       
    </section>
  )
}

export default Brand