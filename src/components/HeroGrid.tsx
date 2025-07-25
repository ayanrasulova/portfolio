import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
import { motion } from "motion/react";

const HeroGrid = () => {
  return (
    <section className="w-full px-[55px] mb-20 mt-20">
       {/* c-space section-spacing*/}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[10rem]">

        {/* GRID 1 - also flex items-end added */}
        <div className="relative grid-gradient2 md:col-span-1 h-[21] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200 md:row-span-2">
          <div className ="z-20">
            <p>hands-on experience with <span className= "text-accent2">front-end </span> development</p>
          </div>

          <img src= "src/assets/coding-pov.png" className = "scale-[3.5] mt-15 ml-20 object-contain">
          </img>
        </div>

        {/* GRID 2 */}
        <div className=" grid-gradient2 md:col-span-1 h-[10rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">2</div>
        {/* GRID 3 */}
        <div className="relative grid-gradient2 md:col-span-1 md:row-span-2 h-[21rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">3</div>
        {/* GRID 4 */}
        <div className=" grid-gradient2 md:col-span-1 h-[10rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">4</div>
        {/* GRID 5 */}
        <div className=" grid-gradient2 md:col-span-1 h-[10rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">5</div>
        {/* GRID 6 */}
        <div className=" grid-gradient2 md:col-span-1 h-[10rem] rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">6</div>
      </div>
    </section>
  );
};

export default HeroGrid;
