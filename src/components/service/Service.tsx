import React from "react";
import SplitContent from "./SplitContent";
import WhyBahoju from "./WhyBahoju";
import HeroCarousel from "../hero/HeroCarousel";
import Work from "../work/Work";

  
const Service = () => {
  return (
    <div className="max-w-1200">
      <HeroCarousel
        image={'/hero/ServiceHero.png'}
        title="WE TURN UNCERTAINITY INTO A STRATEGIC ADVANTAGE."
      />

     

      <SplitContent
        title="Software & Mobile App Development"
        titleColor= {true}
        description="Software and mobile app development involves designing, coding and maintaining applications for various platforms, focusing on functionality, user experiences, and performance to meet user needs and business goals effectively."
        items={[
          {
            text: "Scalable and secure software tailored to business needs.",
            color: 'white'
          },
          {
            text: "Expertise in various industries",
            color: 'white'
          },
          {
            text: "End-to-end development from ideation to deployment.",
            color: 'white'
          },
        ]}
        buttonText="Download Brochure"
        imageSrc="/service/software.png"
        imageAlt="Software & Mobile App Diagram"
        backgroundColor="#2885AB"
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
          {
            text: "AWS and Google Cloud Management.",
            color: 'primary'
          },
          {
            text: "Real-time collaboration and accessibility.",
            color: 'primary'
          },
          {
            text: "Secure and Scalable cloud storage.",
            color: 'primary'
          },
        ]}
       buttonText="Download Brochure"
       imageSrc="/service/cloud.png"
       imageAlt="Cloud Computing & Storage Solutions"
       backgroundColor="#ffff"
       reverse={false}
       textColor="black"/>

      <SplitContent 
       title="Trainings & Internship"
       titleColor= {true}
       description="Our Training and Internship program equips you with the skills and experience needed to launch a successful tech career. With a range of programs tailored to different needs, we help students and career-switchers build expertise and gain hands-on experience to thrive in the industry"
      items={[
        {
          text: " Build skills and gain real-world experience.",
          color: 'white'
        },
        {
          text: "Programs tailored to students and career-switchers",
          color: 'white'
        },
        {
          text: "Hands-on training to thrive in the tech industry",
          color: 'white'
        },
      ]}
       buttonText="Download Brochure"
       imageSrc="/service/website.png"
       imageAlt="Website & Mobile App Development"
       backgroundColor="#2885AB"
       reverse={true}
       textColor="white"
       />


      <SplitContent 
       title="Business Branding"
       description="Business branding is the strategic process of creating unique
                identity and image for a company, fostering customer loyalty and
                differentiation through consistent messaging, visuals and
                values."
      items={[
        {
          text: "Brand strategy,",
          color: 'primary'
        },
        {
          text: "Positioning and enhancing your brand's voice",
          color: 'primary'
        },
      ]}
       buttonText="Download Brochure"
       imageSrc="/BJT_Rectangle13.png"
       imageAlt="Business Branding"
       backgroundColor="#ffff"
       reverse={false}
       textColor="black"/>

        <SplitContent
        title="Digital Marketing Services"
        description="Upskilling for the Digital Age empowers individuals with modern skills, 
        enhancing adaptability, productivity, and career growth in a rapidly evolving technological landscape. 
        Stay ahead, embrace learning, and thrive in the future."
        items={[
          {
            text: "SEO",
            color: 'white'
          },
          {
            text: "Google Ads",
            color: 'white'
          },
          {
            text: "Social Media Campaigns",
            color: 'white'
          },
        ]}
        buttonText="Download Brochure"
        imageSrc="/service/digital.png"
        imageAlt="Digital Marketing Diagram"
        backgroundColor="#2885AB"
        reverse={true}
        textColor="white"
        titleColor='false'      />

       {/* Work */}
       <Work/>

      
    </div>
  );
};

export default Service;
