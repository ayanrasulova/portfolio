import HeroText from "../components/HeroText";

// they ran rafce for this, needs plugin
const Hero = () => {
  return (
    <section className = "flex items-start justify-center md:items-start min-h-screen overflow-hidden c-space"> 
    <HeroText />
    </section>
  );
};

export default Hero;