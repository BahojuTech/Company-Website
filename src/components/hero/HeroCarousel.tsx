"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface HeroCarouselProps {
  images: string[];
  title: string;
  description?: string;
  titleClasses?: string;
  descriptionClasses?: string;
}

const HeroCarousel = ({
  images,
  title,
  description,
  titleClasses = "text-center text-6xl font-bold max-w-[900px] ",
  descriptionClasses = "text-center text-lg md:w-1/2 w-[90%] mx-auto",
}: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full h-screen relative -z-10 bg-[#f0f7ff] overflow-hidden">
      {/* Image Carousel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Carousel image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Overlay for Text Readability */}
      {/* <div className="absolute inset-0 bg-black/50 z-10" /> */}

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-20 px-6">
        <h1 className={titleClasses}>{title}</h1>
        {
          (title === 'DIGITAL MARKETING' || title === 'TRAININGS & INTERNSHIP') 
          && <p className="text-9xl font-bold">COMING SOON</p>
        }

        {description && (
          <p className={`${descriptionClasses} mt-4`}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default HeroCarousel;
