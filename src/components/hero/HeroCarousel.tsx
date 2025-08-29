"use client"

// components/HeroCarousel.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroCarouselProps {
  images: string[];
  title: string;
  description?: string;
  titleClasses?: string;
  descriptionClasses?: string;
  mainHeight?: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  images,
  title,
  description,
  titleClasses = "text-center text-7xl font-semibold",
  descriptionClasses = "text-center pt-3 text-xl md:w-1/2 w-[90%] mx-auto",
  mainHeight = "h-[500px]"
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full bg-[#f0f7ff]">
      <main className={`text-white w-full max-w-full mx-auto relative ${mainHeight}`}>
        <div className="absolute inset-0">
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
                className="object-cover object-top"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className={`relative z-20 h-full flex flex-col ${description ? 'justify-start' : 'justify-center'}`}>
          <h1 className={`${titleClasses} ${description ? 'md:pt-48 pt-36' : ''}`}>
            {title}
          </h1>
          
          {description && (
            <div className="w-full">
              <p className={`${descriptionClasses} md:pb-48 pb-36`}>
                {description}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HeroCarousel;