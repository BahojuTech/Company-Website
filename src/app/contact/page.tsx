import Hero from '@/components/blog/Hero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import HeroCarousel from '@/components/hero/HeroCarousel'
import React from 'react'

const images: string[] = [
    "/carousel1.jpg",
    "/carousel2.png",
    "/carousel3.png",
    "/carousel4.png",
    "/carousel5.png",
  ];

const page = () => {
    return (
        <>
        <HeroCarousel images={images} title={"Contact us"}  description={"Start the conversations to established good relationship and business"} />
            {/* <Hero title={"Contact us"} body={"Start the conversations to established good relationship and business"} /> */}
            <ContactInfo />
            <ContactForm />
        </>
    )
}

export default page