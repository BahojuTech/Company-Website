import Image from 'next/image';
import React from 'react';

type MarketingCardProps = {
  img?: string;
  title?: string;
  name?: string;
  desc?: string;
};

const TestimonialCard = ({ img, title, name, desc }: MarketingCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center bg-transparent p-5 w-[70vw] lg:w-[300px] gap-3 rounded-2xl shadow-md border border-gray-200">
      {/* Floating Image */}
      <div className="absolute -top-10">
        <Image
          src={img || ''}
          alt="client image"
          width={73.18}
          height={71.2}
          className="rounded-full border border-white shadow-md"
        />
      </div>

      {/* Spacer for image */}
      <div className="h-10" />

      {/* Testimonial Content */}
      <div className="min-h-[100px]  text-sm text-gray-700">{desc}</div>

      {/* Name & Title */}
      <div>
        <div className="font-medium text-primary">{name}</div>
        <div className="text-xs text-gray-500">{title}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
