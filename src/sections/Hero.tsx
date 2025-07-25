import HeroText from "../components/HeroText";
import HeroGrid from "../components/HeroGrid";
import Background from "../components/Background";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Spotlight } from "../components/ui/spotlight-new";


// they ran rafce for this, needs plugin
const Hero = () => {
  return ( 
    // previous className (below): "flex items-start md:items-start min-h-screen overflow-hidden"
    <section className = "flex flex-col bg-background min-h-screen noscroll"> 
    <div h-screen max-h-screen><Spotlight /> </div>
    <HeroText />
    <HeroGrid />
    <div className = "z-0">     
      <BackgroundBeams />
    </div>
    </section>
  );
};

export default Hero;