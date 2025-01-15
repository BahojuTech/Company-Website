import React from 'react'
import Image from "next/image";

const WhyBahoju = () => {
  return (
    <div className="relative z-20">
        <section className="">
          <div className="px-6 md:px-12 lg:px-24 py-10">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              {/* Text Section */}
              <div className="flex-1">
                <h2 className="text-[#ffff] text-2xl font-bold mb-4">
                  Why Choose Bahoju Tech
                </h2>
                <p className="text-white mb-6 leading-relaxed">
                  Choose Bahoju Tech Ltd for innovative digital marketing,
                  expert IT training, and reliable software development.
                  Empowering businesses with cutting edge solutions,
                  personalized support, and a commitment to excellence in
                  technology and education.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#0088cc]">✓</span>
                    <span className="text-white">
                      Industry-certified experts.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0088cc]">✓</span>
                    <span className="text-white">
                      Real-world projects and mentorship.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0088cc]">✓</span>
                    <span className="text-white">
                      Flexible learning formats.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0088cc]">✓</span>
                    <span className="text-white">
                      Proven success stories from businesses and student
                    </span>
                  </li>
                </ul>
                <button className="bg-[#0088cc] text-white px-4 py-2 rounded text-sm hover:bg-[#006699] transition-colors">
                  View more
                </button>
              </div>

              {/* Image Section */}
              <div className="relative flex-1 transform transition-transform duration-300 hover:scale-105">
                <div className="w-full max-w-md mx-auto aspect-w-4 aspect-h-3">
                  <Image
                    src="/BJT_Rectangle15.png"
                    alt="Digital Marketing Diagram"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image fills the entire container */}
        <div className="absolute inset-0 -z-30">
          <Image
            src="/BJT_rectangle14.png"
            alt="Background Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
  )
}

export default WhyBahoju
