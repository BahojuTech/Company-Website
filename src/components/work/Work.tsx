import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Work = () => {
  return (
    <section className="relative py-20 px-6 flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/background/blue_peddles.png"
          alt="testimonial background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl w-full z-10">
        <div className='flex items-center'>
            <Image src={'/work/image 34.png'} alt='image' width={705} height={703} />
            <div className='flex flex-col justify-between  h-[360px]'>
            <h2 className="text-5xl font-bold text-white text-center tracking-wider ">
              Our Work
            </h2>
            <Link href={'https://bahojuportfolio.netlify.app/'} target='_blank'>
            <Image src={'/work/click.png'} alt='image' width={400} height={270} />
            </Link>
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default Work;
