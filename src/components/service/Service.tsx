import React from "react";
import SplitContent from "./SplitContent";
import WhyBahoju from "./WhyBahoju";
import HeroCarousel from "../hero/HeroCarousel";

const images: string[] = [
    "/carousel1.jpg",
    "/carousel2.png",
    "/carousel3.png",
    "/carousel4.png",
    "/carousel5.png",
  ];
  
const Service = () => {
  return (
    <div className="max-w-1200">
      {/* <div className="relative min-h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-6xl font-semibold text-center z-10">
            Our Services
          </h1>
        </div>

        <div className="absolute inset-0">
          <Image
            src="/BJT_rectangle1.png"
            alt="Background Image"
            fill
            className="object-cover"
          />
        </div>
      </div> */}
      <HeroCarousel
        images={images}
        title="Our Services"
      />

      <SplitContent
        title="Digital Marketing Services"
        description="Upskilling for the Digital Age empowers individuals with modern skills, 
        enhancing adaptability, productivity, and career growth in a rapidly evolving technological landscape. 
        Stay ahead, embrace learning, and thrive in the future."
        items={["SEO", "Google Ads", "Social Media Campaigns"]}
        buttonText="View more"
        imageSrc="/BJT_Rectangle9.png"
        imageAlt="Digital Marketing Diagram"
        backgroundColor="white"
        reverse={false}
        textColor="black"
      />

      <SplitContent
        title="Software & Mobile App Development"
        description="Software and mobile app development involves designing, coding and maintaining applications for various platforms, focusing on functionality, user experiences, and performance to meet user needs and business goals effectively."
        items={[
          "Scalable and secure software tailored to business needs.",
          "Expertise in various industries",
          "End-to-end development from ideation to deployment.",
        ]}
        buttonText="View more"
        imageSrc="/BJT_Rectangle10.png"
        imageAlt="Software & Mobile App Diagram"
        backgroundColor="#023044"
        reverse={true}
        textColor="white"
      />

      <SplitContent 
       title="Cloud Computing & Storage Solutions"
       description="Cloud computing and storage solutions provide scalable, secure ,
                and cost-effective ways to store, manage, and access data and
                applications over the internet, enhancing collaborations and
                efficiency for business and individuals."
       items={[
         "AWS and Google Cloud Management.",
         "Real-time collaboration and accessibility.",
         "Secure and Scalable cloud storage.",
       ]}
       buttonText="View more"
       imageSrc="/BJT_Rectangle11.png"
       imageAlt="Cloud Computing & Storage Solutions"
       backgroundColor="#ffff"
       reverse={false}
       textColor="black"/>

      <SplitContent 
       title="Website & Mobile App Development"
       description="Website and mobile app development involves creating
                user-friendly digital platforms with intuitive designs, seamless
                functionality, and responsive features to enhance user
                experiences across various devices and operating systems."
       items={[
         " Modern website design with a focus on user experience.",
         "Mobile applications optimized for performance and usability."
       ]}
       buttonText="View more"
       imageSrc="/BJT_Rectangle12.png"
       imageAlt="Website & Mobile App Development"
       backgroundColor="#ffff"
       reverse={true}
       textColor="black"/>


      <SplitContent 
       title="Business Branding"
       description="Business branding is the strategic process of creating unique
                identity and image for a company, fostering customer loyalty and
                differentiation through consistent messaging, visuals and
                values."
       items={[
         "Brand strategy.",
         "Positioning and enhancing your brand’s voice.",
       ]}
       buttonText="View more"
       imageSrc="/BJT_Rectangle13.png"
       imageAlt="Business Branding"
       backgroundColor="#ffff"
       reverse={false}
       textColor="black"/>

       <WhyBahoju/>
      
    </div>
  );
};

export default Service;
