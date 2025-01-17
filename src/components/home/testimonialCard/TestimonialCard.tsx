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
    <div className="text-center bg-white p-5 w-[90vw] lg:w-[300px] grid gap-3 rounded-lg shadow-md">
      <div className="m-auto min-h-[100px] text-sm text-gray-700">{desc}</div>
      <Image
        src={img || ''}
        alt="image"
        width={73.18}
        height={71.2}
        className="m-auto rounded-full"
      />
      <div>
        <div className="font-medium text-primary">{name}</div>
        <div className="font-medium text-primary">{title}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
