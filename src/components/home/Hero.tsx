'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa' // <-- using react-icons

const Hero = () => {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  }, [])

  return (
    <section className="h-screen flex flex-col justify-center items-center relative px-4 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.png"
          alt="hero background"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ transition: "opacity 1s ease-in-out" }}
        />
      </div>

      {/* Hero Content */}
      <div className="text-center flex flex-col items-center">
        <h1 className={`text-white font-bold tracking-wide text-3xl md:text-5xl leading-tight ${animation ? 'slideup' : 'hidden'} mb-4 md:mb-6`}>
          Scale Your Business with Our Expertise
        </h1>
        <p className="text-white max-w-2xl mx-auto text-base md:text-lg px-2 -mt-3 md:-mt-2">
          Unlock the full potential of your business with powerful marketing strategies
          designed to drive results and exceed your goals.
        </p>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 animate-bounce">
        <FaChevronDown size={30} className="text-white" />
      </div>
    </section>
  )
}

export default Hero
