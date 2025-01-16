import Archieve from "@/components/home/Archieve";
import Brand from "@/components/home/Brand";
import Client from "@/components/home/Client";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Marketing from "@/components/home/Marketing";
import Offer from "@/components/home/Offer";
import Testimony from "@/components/home/Testimony";
import WhoWeAre from "@/components/home/WhoWeAre";


export default function Home() {
  return (
    <>
    <Hero/>
    <Marketing/>
    <WhoWeAre/>
    <Brand img="/Rectangle 6.png" title="Unleashing your brand's full potential with innovative digital marketing strategies"/>
    <Offer/>
    <Archieve/>
    <Experience/>
    <Testimony/>
    <Client/>
    <Contact/>
    </>
    
  );
}
