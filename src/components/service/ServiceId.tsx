'use client'

import React, { useEffect, useState } from 'react'
import HeroCarousel from '../hero/HeroCarousel'
import { services } from '@/constant/servicesOBJ'
import Box from './Box'
import SplitContent from './SplitContent'

const ServiceId = ({service}:{service:string}) => {
    const [image, setImage] = useState<any>()
    const [box, setBox] = useState<any[]>([])
    const [title, setTiltle] = useState('')
    const [desc, setDesc] = useState('')

    useEffect(() => {
      const serv = services.find(serv => serv.id === service);
      if (serv) {
        setTiltle(serv.title);
        setImage(serv.image);
        setBox(serv.extra);
      }
    }, [service]);
    
    return (
    <section >
      <div className='relative'>
      <HeroCarousel
        image={image}
        title={title}
      />
      </div>
        

      {/* boxes */}
      <div className='grid grid-cols-4 max-w-[1200px] w-[85%] mx-auto gap-4 absolute -bottom-24 left-1/2 -translate-x-1/2 '>
      {
        box.map(box => <Box key={box.id} title={box.title} desc={box.desc} />)
      }
        {/* <Box/>
        <Box/>
        <Box/>
        <Box/> */}
      </div>
        
      {/* conditional rendering the content the ting long 
      using this approach because the .ts file is not support jsx file thata why we using a cleaner approach  */}
      <div className='bg-[#2885AB]  py-14' />
      {
        service == 'software' && (
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
        )
      }
      {
        service == 'digital-marketer' && (
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
        buttonText="View more"
        imageSrc="/service/digital.png"
        imageAlt="Digital Marketing Diagram"
        backgroundColor="#2885AB"
        reverse={true}
        textColor="white"
      />
        )
      }
      {
        service == 'cloud-computing' && (
          <SplitContent 
          title="Cloud Computing & Storage Solutions"
          description="Cloud computing and storage solutions provide scalable, secure ,
                   and cost-effective ways to store, manage, and access data and
                   applications over the internet, enhancing collaborations and
                   efficiency for business and individuals."
           items={[
             {
               text: "AWS and Google Cloud Management.",
               color: 'white'
             },
             {
               text: "Real-time collaboration and accessibility.",
               color: 'white'
             },
             {
               text: "Secure and Scalable cloud storage.",
               color: 'white'
             },
           ]}
          buttonText="Download Brochure"
          imageSrc="/service/cloud.png"
          imageAlt="Cloud Computing & Storage Solutions"
          backgroundColor="#2885AB"
          reverse={false}
          textColor="white"/>
        )
      }
      {
        service == 'training' && (
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
        )
      }
      {
        service == 'business-branding' && (
          <SplitContent 
       title="Business Branding"
       description="Business branding is the strategic process of creating unique
                identity and image for a company, fostering customer loyalty and
                differentiation through consistent messaging, visuals and
                values."
      items={[
        {
          text: "Brand strategy,",
          color: 'white'
        },
        {
          text: "Positioning and enhancing your brand's voice",
          color: 'white'
        },
      ]}
       buttonText="Download Brochure"
       imageSrc="/BJT_Rectangle13.png"
       imageAlt="Business Branding"
       backgroundColor="#2885AB"
       reverse={false}
       textColor="white"/>
        )
      }

     
    </section>
  )
}

export default ServiceId