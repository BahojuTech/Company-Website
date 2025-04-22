'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  }, [])

  return (
    <section className="h-[100vh] flex justify-center items-center relative px-1">
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <Image
          src="/hero.png"
          alt="hero background"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ transition: "opacity 1s ease-in-out" }}
        />
      </div>
      <div className="text-center -translate-y-4">
        <h1 className={`text-white text-3xl md:text-5xl font-bold mb-6 tracking-wide ${animation ? 'slideup' : 'hidden'}`}>
          Scale Your Business with Our Expertise
        </h1>
      </div>
    </section>
  )
}

export default Hero
