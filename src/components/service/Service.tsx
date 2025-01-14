import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <div className="max-w-1200">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-6xl font-semibold text-center z-10">
            Our Services
          </h1>
        </div>

        {/* Image fills the entire container */}
        <div className="absolute inset-0">
          <Image
            src="/BJT_rectangle1.png"
            alt="Background Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <section className="mb-7">
        <div className="px-6 md:px-12 lg:px-24 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-[#0088cc] text-2xl font-bold mb-4">
                Digital Marketing Services
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Upskilling for the Digital Age empowers individuals with modern
                skills, enhancing adaptability, productivity, and career growth
                in a rapidly evolving technological landscape. Stay ahead,
                embrace learning, and thrive in the future.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span>SEO</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span>Google Ads</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span>Social Media Campaigns</span>
                </li>
              </ul>
              <button className="bg-[#0088cc] text-white px-4 py-2 rounded text-sm hover:bg-[#006699] transition-colors">
                View more
              </button>
            </div>

            {/* Image Section */}
            <div className="relative flex-1">
              <div className="w-full max-w-md mx-auto aspect-w-4 aspect-h-3">
                <Image
                  src="/BJT_Rectangle9.png"
                  alt="Digital Marketing Diagram"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
            {/* <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-md">
          <Image
            src="/BJT_Rectangle9.png"
            alt="Digital Marketing Diagram"
            width={480}
            height={360}
            className="object-cover rounded-3xl w-full"
          />
        </div>
      </div> */}
          </div>
        </div>
      </section>

      <section className="mb-7 bg-[#023044]">
        <div className="px-6 md:px-12 lg:px-24 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Image Section */}
            <div className="relative flex-1">
              <div className="w-full max-w-md mx-auto aspect-w-4 aspect-h-3">
                <Image
                  src="/BJT_Rectangle10.png"
                  alt="Digital Marketing Diagram"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-[#0088cc] text-2xl font-bold mb-4">
                Software & Mobile App Development
              </h2>
              <p className="text-white mb-6 leading-relaxed">
                Software and mobile app development involves designing, coding
                and maintaining applications for various platforms, focusing on
                functionality, user experiences, and performance to meet user
                needs and business goals effectively.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span className="text-white">
                    Scalable and secure software tailored to business needs.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span className="text-white">
                    Expertise in various industries
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span className="text-white">
                    {" "}
                    End-to-end development from ideation to deployment.{" "}
                  </span>
                </li>
              </ul>
              <button className="bg-[#0088cc] text-white px-4 py-2 rounded text-sm hover:bg-[#006699] transition-colors">
                View more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-7">
        <div className="px-6 md:px-12 lg:px-24 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-[#0088cc] text-2xl font-bold mb-4">
                Cloud Computing & Storage Solutions
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cloud computing and storage solutions provide scalable, secure ,
                and cost-effective ways to store, manage, and access data and
                applications over the internet, enhancing collaborations and
                efficiency for business and individuals.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span>AWS and Google Cloud Management.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span>Real-time collaboration and accessibility.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span>Secure and Scalable cloud storage.</span>
                </li>
              </ul>
              <button className="bg-[#0088cc] text-white px-4 py-2 rounded text-sm hover:bg-[#006699] transition-colors">
                View more
              </button>
            </div>

            {/* Image Section */}
            <div className="relative flex-1">
              <div className="w-full max-w-md mx-auto aspect-w-4 aspect-h-3">
                <Image
                  src="/BJT_Rectangle11.png"
                  alt="Digital Marketing Diagram"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-7">
        <div className="px-6 md:px-12 lg:px-24 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Image Section */}
            <div className="relative flex-1">
              <div className="w-full max-w-md mx-auto aspect-w-4 aspect-h-3">
                <Image
                  src="/BJT_Rectangle12.png"
                  alt="Digital Marketing Diagram"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-[#0088cc] text-2xl font-bold mb-4">
                Website & Mobile App Development
              </h2>
              <p className=" mb-6 leading-relaxed">
                Website and mobile app development involves creating
                user-friendly digital platforms with intuitive designs, seamless
                functionality, and responsive features to enhance user
                experiences across various devices and operating systems.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span>
                    Modern website design with a focus on user experience.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span>
                    Mobile applications optimized for performance and usability
                  </span>
                </li>
              </ul>
              <button className="bg-[#0088cc] text-white px-4 py-2 rounded text-sm hover:bg-[#006699] transition-colors">
                View more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-7">
        <div className="px-6 md:px-12 lg:px-24 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-[#0088cc] text-2xl font-bold mb-4">
                Business Branding
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Business branding is the strategic process of creating unique
                identity and image for a company, fostering customer loyalty and
                differentiation through consistent messaging, visuals and
                values.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span>Brand strategy,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0088cc]">✓</span>
                  <span>Positioning and enhancing your brand’s voice</span>
                </li>
              </ul>
              <button className="bg-[#0088cc] text-white px-4 py-2 rounded text-sm hover:bg-[#006699] transition-colors">
                View more
              </button>
            </div>

            {/* Image Section */}
            <div className="relative flex-1">
              <div className="w-full max-w-md mx-auto aspect-w-4 aspect-h-3">
                <Image
                  src="/BJT_Rectangle13.png"
                  alt="Digital Marketing Diagram"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <section className="mb-7 ">
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
              <div className="relative flex-1">
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
    </div>
  );
};

export default Service;
