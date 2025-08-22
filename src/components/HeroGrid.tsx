import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
import { Marquee } from "./ui//marquee.tsx";
import { motion } from "framer-motion";
import { cn } from "./ui/utils.ts"; // adjust path if needed


const techstack = [
  {
    name: "java",
    img: "",
  },
  {
    name: "python",
    img: "",
  },
  {
    name: "html/css",
    img: "",
  },
];

const firstRow = techstack.slice(0, techstack.length / 2);
const secondRow = techstack.slice(techstack.length / 2);
const thirdRow = techstack.slice(0, techstack.length / 2);
const fourthRow = techstack.slice(techstack.length / 2);


const TechCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};



        
      
      
 
  





const HeroGrid = () => {
  return (
    <section className="z-20 w-full px-[55px] mb-10 mt-17">
       {/* c-space section-spacing */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[11rem]">  {/* change auto rows based on smaller row height */}
      
        {/* Grid 1 */}
        <div className="relative grid-gradient2 md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">
          <div className="absolute z-30 "> <p>hands-on experience with <span className="text-accent">front-end</span> development</p> </div>
          <div className = "z-20"><img src="src/assets/coding-pov.png" className="scale-[3] hover:scale-[4] duration-200 mt-25 ml-20 object-contain" /> </div> 
          {/* scale scale-[3.5] */}
        </div>

        {/* Grid 2 */}
        <div className="grid-gradient2 md:col-span-1 rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">
          <div className="pt-29 justify-items-end">
            <p>3+ <span className = "text-accent3"> hackathons</span> experience</p>
          </div>
        </div>

        {/* Grid 3 tech stack */}
        <div className="grid-gradient2 md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden hover:-translate-y-1 duration-200">
          <div className="">
            <p>tech stack:</p>
            
            <div className="flex flex-row items-center gap-4" style={{transform: "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",}}>
              <Marquee pauseOnHover vertical className="[--duration:20s]">
                {firstRow.map((techstack) => (
                <TechCard key={techstack.name} {...techstack} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                {secondRow.map((techstack) => (
                <TechCard key={techstack.name} {...techstack} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                {thirdRow.map((review) => (
                <TechCard key={review.name} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" vertical>
                {fourthRow.map((review) => (
                <TechCard key={review.name} {...review} />
                ))}
              </Marquee>
            </div>

          
            
            

            {/* <Marquee pauseOnHover className="[--duration:20s]"></Marquee> */}
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
