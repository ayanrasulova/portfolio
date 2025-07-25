import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
import { motion } from "motion/react";

const HeroGrid = () => {
  return (
    <section className="w-full px-[55px] mb-20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[10rem]">
        <div className="relative grid-gradient2 md:col-span-1 h-[20rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">
          <div className ="z-20">
            <p>hands-on experience with <span className= "text-accent2">front-end </span> development</p>
          </div>

          <img src= "src/assets/coding-pov.png" className = "scale-[3.5] mt-15 ml-20 object-contain">
          </img>
        </div>

        <div className=" grid-gradient2 md:col-span-1 h-[20rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">2</div>
        <div className=" grid-gradient2 md:col-span-1 h-[20rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">3</div>
        <div className=" grid-gradient2 md:col-span-1 h-[20rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">4</div>
      </div>
    </section>
  );
};

export default HeroGrid;
