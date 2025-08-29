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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-[#0088cc] text-2xl font-bold mb-4">
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

          {/* Image Content */}
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative w-full h-[300px] lg:h-[400px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover rounded-3xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SplitContent