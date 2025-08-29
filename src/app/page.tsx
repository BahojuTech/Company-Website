import Archieve from "@/components/home/Archieve";
import Brand from "@/components/home/Brand";
import Client from "@/components/home/Client";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Marketing from "@/components/home/Marketing";
import Mission from "@/components/home/Mission";
import Vision from "@/components/home/Vision";
import Offer from "@/components/home/Offer";
import Testimony from "@/components/home/Testimony";
import WhiteBlock from "@/components/home/WhiteBlock/WhiteBlock";
import WhoWeAre from "@/components/home/WhoWeAre";


export default function Home() {
  return (
    <>
    <Hero/>
    {/* <Marketing/> */}
    <div className="overflow-hidden py-5">
    <Mission/>
    <Vision/>
    </div>
    
    {/* <WhoWeAre/> */}
    <Brand img="/brand.png">
      <p className="mb-6">At BAHOJU, we believe every brand has untapped potentials. By leveraging innovative digital marketing strategies, we help businesses break through the noise, reaching their target audience with precisions from SEO to social management. Our customized approaches ensure your brand stands out, engages customers and drives growth. Unlock the growth, unlock the power of digital marketing and see your brand thrive like never before.
      </p>
      <p>
      Unleash your brand's full potential with AHOJU, our team of experts uses cutting-edge digital marketing techniques to create campaigns that not only attract but also converts. We focus on tailored strategies that resonate with your audiences, increased brand visibility, and drive measurable results. Let us transform your digital presence into a powerhouse of success.
      </p> 
    </Brand>
    
    <Offer/>
    {/* <WhiteBlock/> */}
    {/* <Archieve/> */}
    {/* <WhiteBlock/> */}
    {/* <Experience/> */}
    <Testimony/>
    
    </>
    
  );
}
