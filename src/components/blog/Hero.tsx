"use client"
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [background, setBackground] = useState("/carousel1.jpg")
    const [display, setDisplay] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplay(false);
            setTimeout(() => {
                setDisplay(true);
                setBackground("/carousel2.jpg");
            }, 1000);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section style={{ backgroundImage: `url(${background})`, transform: "opacity" }} className={`w-full ease-linear text-white bg-cover max-w-7xl m-auto py-48 ${display? "opacity-0" : "opacity-1"}`}>
            <h1 className='text-center text-7xl font-semibold'>Blogs</h1>
            <p className='text-center pt-3 text-xl w-1/2 mx-auto'>Discover more insights and strategies to elevate your brand in the digital world with BAHOJU</p>
        </section>
    )
}

export default Hero