import HeroText from "../components/HeroText";
import HeroGrid from "../components/HeroGrid";
import Background from "../components/Background";

// they ran rafce for this, needs plugin
const Hero = () => {
  return ( 
    // previous className (below): "flex items-start md:items-start min-h-screen overflow-hidden"
    <section className = "flex flex-col items-start min-h-screen overflow-hidden"> 
    <HeroText />
    <HeroGrid />
    <Background />
    </section>
  );
};

export default Hero;