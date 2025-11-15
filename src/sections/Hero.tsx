import HeroText from "../components/HeroText";
import HeroGrid from "../components/HeroGrid";
import HeroButtons from "../components/HeroButtons";

import Background from "../components/Background";
import { Spotlight } from "../components/ui/spotlight-new";
import { motion } from 'framer-motion'


// they ran rafce for this, needs plugin
const Hero = () => {
  return ( 
    // previous className (below): "flex items-start md:items-start min-h-screen overflow-hidden "
    <section className = "flex flex-col bg-darkerbackground min-h-screen overscroll-none noscroll"> 
    <div h-screen max-h-screen><Spotlight /> </div>
    <HeroText />
    <div className = "absolute z-20">
      <HeroButtons />
    </div>
    <HeroGrid />
    {/* <div className = "z-0">     
      <BackgroundBeams />
    </div> */}
    
    </section>
  );
};

export default Hero;