import HeroText from "../components/HeroText";
import HeroGrid from "../components/HeroGrid";
import Background from "../components/Background";

// they ran rafce for this, needs plugin
const Hero = () => {
  return ( 
    // previous className (below): "flex items-start md:items-start min-h-screen overflow-hidden"
    <section className = "flex flex-col bg-background min-h-screen overflow-hidden"> 
    <HeroText />
    <HeroGrid />
    </section>
  );
};

export default Hero;