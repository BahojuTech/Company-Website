import BlogBody from '@/components/blog/BlogBody'

import Hero from '@/components/blog/Hero'
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
            <HeroCarousel images={images} title={"Blogs"} description='Discover more insights and strategies to elevate your brand in the digital world with BAHOJU"' />
            <BlogBody/>
        </>
    )
}

export default page