import React from 'react'
import Image from 'next/image';

interface ServiceSectionProps {
    title: string;
    description: string;
    items: string[]; 
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
    backgroundColor?: string;
    reverse?: boolean; 
    textColor?: string;
  }

const SplitContent: React.FC<ServiceSectionProps> = ({
  title,
  description,
  items,
  buttonText,
  imageSrc,
  imageAlt,
  backgroundColor = "white",
  reverse = false,
  textColor = "black",
}) => {
  return (
    <section
      className="mb-7"
      style={{ backgroundColor }}
    >
      <div className="px-6 md:px-12 lg:px-24 py-10">
        <div
          className={`flex flex-col lg:flex-row justify-between gap-8 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Section */}
          <div className="flex-1">
            <h2 className={`text-[#0088cc] text-2xl font-bold mb-4`}>
              {title}
            </h2>
            <p className={`mb-6 leading-relaxed text-${textColor}`}>
              {description}
            </p>
            <ul className="mb-6 space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span className={`text-${textColor}`}>{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#0088cc] text-white px-4 py-2 rounded text-sm hover:bg-[#006699] transition-colors">
              {buttonText}
            </button>
          </div>

          {/* Image Section */}
          <div className="relative flex-1 transform transition-transform duration-300 hover:scale-105">
            <div className="w-full max-w-md mx-auto aspect-w-4 aspect-h-3">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SplitContent