import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
import { motion } from "framer-motion";
import SpotlightCard from "./ui/spotlight";


const HeroGrid = () => {
  return (
    <section className="z-20 w-full px-[55px] mb-10 mt-20">
       {/* c-space section-spacing */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[11rem]">  {/* change auto rows based on smaller row height */}
      
        {/* Grid 1 */}
        <div className="relative grid-gradient2 md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">
          <div className=" ">
            <p className ="z-20">
            hands-on experience with <span className="text-accent">front-end</span> development
            </p>
          </div>
          <img src="src/assets/coding-pov.png" className="scale-[3.5] mt-15 ml-20 object-contain" />
        </div>

        {/* Grid 2 */}
        <div className="grid-gradient2 md:col-span-1 rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">
          <div className="pt-29 justify-items-end">
            <p>3+ <span className = "text-accent3"> hackathons</span> experience</p>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-gradient2 md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">
          <div className="">
            <p>tech stack:</p>
          </div>
        </div>

        {/* Grid 4 */}
        <div className="grid-gradient2 md:col-span-1 rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">
          <div className="">
            <p>most recent project: posture pal</p>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-gradient2 md:col-span-1 rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">
          <div className="">
            <p>graphic design & <span className = "text-accent2"> commission </span>experience</p>
          </div>
        </div>

        {/* Grid 6 */}
        <div className="grid-gradient2 md:col-span-1 rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">
          <div className="p-4">
            <p>technical writing & tutoring experience</p>
          </div>
        </div>
      </div>
    
      
    </section>
  );
};

export default HeroGrid;
