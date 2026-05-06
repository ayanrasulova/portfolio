import HeroText from "../components/HeroText";
import HeroGrid from "../components/HeroGrid";
import HeroButtons from "../components/HeroButtons";

import Background from "../components/Background";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Spotlight } from "../components/ui/spotlight-new";
import FaultyTerminal from "../components/ui/faultyterminal";
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

    <div className="fixed inset-0 z-0">
      <FaultyTerminal
        scale={1.7}
        gridMul={[2, 1]}
        digitSize={2}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.9}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0.29}
        tint="#ffffff"
        mouseReact
        mouseStrength={0.5}
        pageLoadAnimation
        brightness={0.1}
      />
    </div>
    </section>
  );
};

export default Hero;