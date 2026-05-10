import HeroText from "../components/HeroText";
import HeroButtons from "../components/HeroButtons";

import Background from "../components/Background";
import { motion } from 'framer-motion'


// they ran rafce for this, needs plugin
const Hero = () => {
  return ( 
    // previous className (below): "flex items-start md:items-start min-h-screen overflow-hidden "
    <section className = "relative flex flex-col bg-darkerbackground min-h-screen overscroll-none noscroll px-5 sm:px-8 lg:px-16"> 
    {/* <div h-screen max-h-screen><Spotlight /> </div> */}

    <HeroText />
    {/* <div className = "absolute z-20">
      <HeroButtons />
    </div> */}

    {/* <HeroGrid /> */}
    {/* <div className = "z-0">     
      <BackgroundBeams />
    </div> */}

    </section>
  );
};

export default Hero;