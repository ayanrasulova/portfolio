import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
import { motion } from "framer-motion";
import SpotlightCard from "./ui/spotlight";


const HeroGrid = () => {
  return (
    <section className="z-20 w-full px-[55px] mb-10 mt-20">
       {/* c-space section-spacing */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[10rem]">


        {/* GRID 1 - also flex items-end added */}
        <div className="relative grid-gradient2 md:col-span-1 h-[21rem] rounded-2xl overflow-hidden md:row-span-2 hover:-translate-y-1 duration-200">
          <div className ="z-20">
            <p>hands-on experience with <span className= "text-accent2">front-end </span> development</p>
          </div>
          <img src= "src/assets/coding-pov.png" className = "scale-[3.5] mt-15 ml-20 object-contain"></img>
        </div>

        {/* GRID 2 -  3+ hackathons + 1x winner*/}
        <div className="grid-gradient2 md:col-span-1 h-[10rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200"></div>
        
        {/* GRID 3 - tech stack*/}
        <div className="grid-gradient2 md:col-span-1 md:row-span-2 h-[21rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">3</div>
        {/* GRID 4 - most recent project; posture pal*/}
        <div className=" grid-gradient2 md:col-span-1 h-[10rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">4</div>
        {/* GRID 5 -  graphic design + adobe creative suite experience  */}
        <div className=" grid-gradient2 md:col-span-1 h-[10rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">5</div>
        {/* GRID 6 - technical writing + communication skills (be like over 3+ yrs tutoring) */}
        <div className=" grid-gradient2 md:col-span-1 h-[10rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">6</div>


      </div>
    </section>
  );
};

export default HeroGrid;
