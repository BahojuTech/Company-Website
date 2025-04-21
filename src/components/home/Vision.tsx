"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("vision-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="vision-section" className="flex pb-10">
      {/* Left Section */}
      <div
        className={`flex-[57%] pl-28 text-2xl font-semibold text-primary transition-all duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      >
        {/* Placeholder for possible content */}
      </div>

      {/* Right Section */}
      <div
        className={`bg-primary text-white pt-5 pb-8 flex-[43%] relative transition-all duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <div className="max-w-96 grid gap-4 ml-36">
          <h3 className="text-2xl font-semibold">VISION</h3>
          <p>
            To provide businesses with scalable, data-driven strategies that
            optimize operational efficiency, enhance customer engagement, and
            foster sustainable growth.
          </p>
        </div>
        <div className="bg-white p-11 w-[202px] h-[202px] flex items-center rounded-full absolute -top-1 -left-24 shadow-md">
          <Image src={"/mission/vision.png"} alt="vision" width={120} height={93} />
        </div>
      </div>
    </section>
  );
};

export default Vision;
