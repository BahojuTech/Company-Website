"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("mission-section");
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
    <section id="mission-section" className="flex pt-10">
      {/* Left Section */}
      <div
        className={`bg-primary text-white pt-5 pb-14 flex-[43%] relative transition-all duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      >
        <div className="max-w-80 grid gap-4 ml-20">
          <h3 className="text-2xl font-semibold">MISSION</h3>
          <p>
            To redefine brand-audience engagement through advanced technology
            and data-driven strategic solutions.
          </p>
        </div>
        <div className="bg-white p-11 w-fit rounded-full absolute -top-1 -right-24 shadow-md">
          <Image src={"/mission/mission.png"} alt="mission" width={120} height={120} />
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`flex-[57%] pl-28 text-3xl font-semibold text-primary transition-all duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <h2>Our Mission & Vision</h2>
        <div className="h-1 w-[20%] mt-3 bg-black"></div>
      </div>
    </section>
  );
};

export default Mission;
