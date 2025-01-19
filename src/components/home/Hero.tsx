'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const images: string[] = [
  "/carousel1.jpg",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel4.png",
  "/carousel5.png",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animation, setAnimation] = useState(false)

    useEffect(() => {
          const intervalId = setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000);
          return () => clearInterval(intervalId);
      }, []);

    useEffect(() => {
      setAnimation(true)
    }, [])


  return (
    <section className=" h-[100vh] flex justify-center items-center relative px-1">
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        {
          images.map((image, index) => (
            <Image src={image} key={index} alt='hero images' fill sizes='100vw' 
            className={`object-cover ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} 
            style={{ transition: "opacity 1s ease-in-out" }} />
          ))
        }
        
        </div>
        <div className='text-center -translate-y-10'>
         <h1 className={`text-white text-3xl md:text-5xl font-bold mb-1 ${animation ? 'slideup' : 'hidden'}`}>Elevate Your Business with <span className='text-primaryThick'>BAHOJU's</span> <br />  Expertise </h1>
         <p className='text-white font-semibold mb-2'>Innovative marketing strategies tailored to your business goals by BAHOJU</p>
         <Link href={'/contact'} className='flex items-center gap-2 w-fit m-auto text-primaryThick border-2 border-primaryThick font-semibold p-2 rounded-lg  hover:text-white hover:bg-primaryThick transition duration-300 ease-in-out cursor-pointer'>
            <span>Hire us</span>
            <span className='text-2xl'><IoArrowForwardCircleOutline /></span>
         </Link>
        </div>
    </section>
  )
}

export default Hero