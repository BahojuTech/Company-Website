import React from "react";
import SplitContent from "../service/SplitContent";
import WhyBahoju from "../service/WhyBahoju";
import Contact from "./Contact";
import HeroCarousel from "../hero/HeroCarousel";
import ContactInfo from "../contact/ContactInfo";

const images: string[] = [
  "/carousel1.jpg",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel4.png",
  "/carousel5.png",
];

const Training = () => {
  return (
    <div className="max-w-1200 bg-[#f0f7ff]">
      <HeroCarousel
        image={'/hero/ServiceHero.png'} 
        title="Training"
        description="Driven by Knowledge. Empowered by learning"
      />
      <SplitContent
        title="Upskilling for the Digital Age"
        description="Upskilling for the Digital Age empowers individuals with modern skills, 
        enhancing adaptability, productivity, and career growth in a rapidly evolving technological landscape. 
        Stay ahead, embrace learning, and thrive in the future."
        items={[
          "Practical training and certication for career advancement.",
          "Industry-focused courses tailored to the modern workforce.",
        ]}
        buttonText="View more"
        imageSrc="/BJT_Training1.png"
        imageAlt="Upskilling for the Digital Age"
        backgroundColor="#f0f7ff"
        reverse={false}
        textColor="black"
      />

      <SplitContent
        title="Master Cloud & Networking Skills"
        description="Master Cloud and Networking skills to unlock opportunities in IT infrastructure, 
        enhance efficiency, and drive innovation. Gain expertise in cloud computing, network design, 
        and security to lead the digital transformation"
        items={[
          "AWS Cloud Program",
          "Google Cloud Program",
          "CCNA, CCNP, CEH, and CompTIA A++",
          "Comprehensive hands-on training.",
        ]}
        buttonText="View more"
        imageSrc="/BJT_Training2.png"
        imageAlt="Master Cloud & Networking Skills"
        backgroundColor="#023044"
        reverse={true}
        textColor="white"
      />

      <SplitContent
        title="Programming Courses “Coding Made Simple” "
        description="Learn programming with ease through our ‘Coding Made Simple’ courses. 
        Master essential coding skills, build projects, and unlock your potential for a successful career in technology. 
        Start coding today!"
        items={[
          "Python: The language of data science and AI.",
          "AI Programming: Building intelligent solutions.",
          "JavaScript: The backbone of modern web development.",
        ]}
        buttonText="View more"
        imageSrc="/BJT_Training3.png"
        imageAlt="Programming Courses “Coding Made Simple” "
        backgroundColor="#f0f7ff"
        reverse={false}
        textColor="black"
      />

      <SplitContent
        title="Digital Marketing Training “Excel in Digital Marketing"
        description="Excel in Digital Marketing with our expert training. 
        Master SEO, social media, content marketing, and analytics to drive business growth. 
        Empower your career with cutting-edge digital strategies today!"
        items={[
          " Practical SEO and ad strategies.",
          "Social media marketing techniques.",
          "Certied instructors and real-world projects.",
        ]}
        buttonText="View more"
        imageSrc="/BJT_Training4.png"
        imageAlt="Digital Marketing Training “Excel in Digital Marketing"
        backgroundColor="#f0f7ff"
        reverse={true}
        textColor="black"
      />

      <WhyBahoju />
      {/* <Contact /> */}
      <ContactInfo/>
    </div>
  );
};

export default Training;
