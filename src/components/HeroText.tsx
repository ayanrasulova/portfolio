import React from "react";
import {TypewriterEffect} from "./TypewriterEffect";
// import { motion } from "motion/react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import FuzzyText from "./ui/fuzzytext";


  const wordsLine1 = [
    { text: "computer", className: "text-white" },
    { text: "science", className: "text-white" },
    { text: "@" },
    { text: "university", className: "text-white" },
    { text: "of", className: "text-white"},
    { text: "virginia", className: "text-white" },
  ];
  const wordsLine2 = [
    { text: "current" },
    { text: "fullstack" },
    { text: "dev" },
    { text: "@" },
    { text: "thecourseforum", className: "text-white" },
    { text: "&" },
    { text: "fannie", className: "text-white" },
    { text: "mae", className: "text-white" },
  ];
  const project = [
    { text: "see"},
    { text: "my"},
    { text: "projects"},
  ]

  const mobileLine2 = [
    { text: "current" },
    { text: "fullstack" },
    { text: "dev" },
    { text: "@" },
    { text: "thecourseforum", className: "text-white" },
  ]
  
  const mobileLine3 = [
    { text: "&" },
    { text: "fannie", className: "text-white" },
    { text: "mae", className: "text-white" },
  ]
  
  
const HeroText = () => {
    return ( // added pt-30 for space from top, going to try to change the font size             
        <div className="z-10 mt-15 md:mt-32 items-center text-center  rounded-3xl bg-clip-text pl-0 ml-0"> 


            {/* desktop */}
            <div className = "mt-50 flex-col justify-center hidden items-center md:flex md:px-15 lg:px-15 "> {/* not using c-space so left aligned, justify start + padding on larger screens */}
  
                <FuzzyText 
                    baseIntensity={0.06}
                    enableHover={false}
                    >
                    hi, i'm ayan
                </FuzzyText>

                <div className = "flex flex-col items-center"> 
                    
                     <div className = "items-center mt-3">
                         <TypewriterEffect words={wordsLine1} className="text-2xl text-neutral-400" continue/>
                    </div>

                    <div className = "items-center">
                         <TypewriterEffect words={wordsLine2} className="text-2xl text-neutral-400" delay = {2.7}/>
                    </div>

                    <div className = " absolute text-sm  pt-3 mt-24 "> 
                        {/* <button className = "text-sm  hover:bg-neutral-300 hover:text-navbar text-neutral-300 rounded shadow p-1.5 mt-4"> see my projects </button> */}
                        <a href="/projects"><InteractiveHoverButton>see my projects</InteractiveHoverButton></a>
                    </div>                    
                </div>
            </div>


            {/* mobile */}
            <div className ="padded-box flex flex-col items-center text-center mt-10 space-y-0.3 md:hidden"> {/* c-space */}
                <FuzzyText className = "scale-600 mt-50"
                    fontSize="clamp(3rem, 14vw, 5rem)"
                    fontWeight={700}
                    fps={30}
                    baseIntensity={0.05}
                    hoverIntensity={0.1}
                    >
                    ayan
                </FuzzyText>

                <div className = "flex flex-col pt-3 items-center"> 

                    <div className = "items-center text-sm mt-2">
                         <TypewriterEffect words={wordsLine1} className=" text-neutral-400" continue/>
                    </div>

                    <div className = "items-center text-sm">
                         <TypewriterEffect words={mobileLine2} className=" text-neutral-400" delay = {2.7} continue/>
                    </div>

                    <div className = "items-center text-sm">
                         <TypewriterEffect words={mobileLine3} className=" text-neutral-400" delay = {5.4}/>
                    </div>

                    <div className = " text-sm  pt-1 mt-3 "> 
                        <a href = "/projects"> <InteractiveHoverButton>see my projects</InteractiveHoverButton> </a> 
                    </div>   

                </div>
            </div>
        </div>
    )
}

export default HeroText