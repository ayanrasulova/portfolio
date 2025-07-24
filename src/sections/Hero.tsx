import HeroText from "../components/HeroText";
import Background from "../components/Background";

// they ran rafce for this, needs plugin
const Hero = () => {
  return (
    <section className = "flex items-start md:items-start min-h-screen overflow-hidden"> 
    <HeroText />
    <Background />
    </section>
  );
};

export default Hero;