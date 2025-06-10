import HeroText from "../components/HeroText";

// they ran rafce for this, needs plugin
const Hero = () => {
  return (
    <section className = "flex items-start md:items-start min-h-screen overflow-hidden"> 
    <HeroText />
    </section>
  );
};

export default Hero;