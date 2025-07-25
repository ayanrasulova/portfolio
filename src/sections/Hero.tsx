import HeroText from "../components/HeroText";
import HeroGrid from "../components/HeroGrid";
import Background from "../components/Background";
import { BackgroundBeams } from "../components/ui/background-beams";

// they ran rafce for this, needs plugin
const Hero = () => {
  return ( 
    // previous className (below): "flex items-start md:items-start min-h-screen overflow-hidden"
    <section className = "flex flex-col bg-background min-h-screen overflow-hidden"> 
    <HeroText />
    <HeroGrid />
    <div className = "z-0">     
      <BackgroundBeams />
    </div>
    </section>
  );
};

export default Hero;