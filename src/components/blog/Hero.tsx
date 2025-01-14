"use client"
import React, { useEffect, useState } from 'react'

const images: string[] = [
    "/carousel1.jpg",
    "/carousel2.png",
    "/carousel3.png",
    "/carousel4.png",
    "/carousel5.png",
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className={`w-full bg-white`}>
            <main className='text-white w-full max-w-7xl mx-auto relative'>
                {
                    images.map((image, index) => (<img key={index} src={image} className={`absolute object-top object-cover w-full h-full z-10 ${index === currentIndex ? "opacity-100" : "opacity-0"}`} style={{ transition: "opacity 1s ease-in-out" }} />))
                }
                <span className='z-20 relative'>
                    <h1 className='md:pt-48 pt-36 text-center text-7xl font-semibold'>Blogs</h1>
                    <p className='text-center pt-3 md:pb-48 pb-36 text-xl md:w-1/2 w-[90%] mx-auto'>Discover more insights and strategies to elevate your brand in the digital world with BAHOJU</p>
                </span>
            </main>
        </section>
    )
}

export default Hero