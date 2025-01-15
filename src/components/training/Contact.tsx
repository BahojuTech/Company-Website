"use client"
import React from 'react';
import Image from 'next/image';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-[#f0f7ff] min-h-screen w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 flex justify-center transform transition-transform duration-300 hover:scale-105">
            <div className="w-full max-w-[80%] sm:max-w-[60%] lg:max-w-[90%]">
              <Image
                src="/BJT_Training5.png"
                alt="Contact illustration"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="order-1 lg:order-2 w-full max-w-2xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left mb-6 sm:mb-8">
              <h2 className="text-[#32A0CE] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3">
                Partner with Us or Join Our Training Programs
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Contact us for customized solutions. Enroll today to transform your career.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-[#32A0CE] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                    required
                  />
                  <div className="absolute inset-0 pointer-events-none border border-[#32A0CE] rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50" />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Lastname"
                    className="w-full px-4 py-3 border border-[#32A0CE] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                    required
                  />
                  <div className="absolute inset-0 pointer-events-none border border-[#32A0CE] rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50" />
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Services"
                  className="w-full px-4 py-3 border border-[#32A0CE] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                  required
                />
                <div className="absolute inset-0 pointer-events-none border border-[#32A0CE] rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50" />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-[#32A0CE] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                  required
                />
                <div className="absolute inset-0 pointer-events-none border border-[#32A0CE] rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50" />
              </div>
              
              <div className="relative">
                <textarea
                  placeholder="Comments/Questions"
                  rows={6}
                  className="w-full px-4 py-3 border border-[#32A0CE] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base resize-none"
                  required
                />
                
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#32A0CE] text-white py-3 sm:py-4 px-6 rounded-lg text-base sm:text-lg font-medium hover:bg-[#0088ee] active:bg-[#0077dd] transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;