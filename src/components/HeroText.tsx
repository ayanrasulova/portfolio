import React from "react";
import {TypewriterEffect} from "./TypewriterEffect";
// import { motion } from "motion/react";
import { motion } from "framer-motion";
import BuzzEffect from "./ui/buzz";
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
  
  
const HeroText = () => {
    return ( // added pt-30 for space from top, going to try to change the font size             
        <div className="z-10 mt-15 md:mt-32 items-start md:text-left rounded-3xl bg-clip-text pl-0 ml-0"> 


            {/* --------------- desktop, hidden, but shown for desktop  --------------- */}
            <div className = "mt-50 flex-col justify-center hidden items-center md:flex md:px-15 lg:px-15 "> {/* not using c-space so left aligned, justify start + padding on larger screens */}
  
                <FuzzyText 
                    baseIntensity={0.06}
                    hoverIntensity={0.13}
                    enableHover
                    >
                    hi, i'm ion
                </FuzzyText>

                {/* <h1 className = "text-9xl text-neutral-300"> hi, i'm ion </h1> */}
                {/* <h1 className = "text-3xl text-neutral-300"> (or ayan) </h1> */}

                <div className = "flex flex-col pt-1 items-center"> 
                    
                     <div className = "items-center mt-6">
                         <TypewriterEffect words={wordsLine1} className="text-2xl text-neutral-400" continue/>
                    </div>

                    <div className = "items-center">
                         <TypewriterEffect words={wordsLine2} className="text-2xl text-neutral-400" delay = {2.7}/>
                    </div>

                    <div className = " text-sm  pt-3 mt-3 "> 
                        {/* <button className = "text-sm  hover:bg-neutral-300 hover:text-navbar text-neutral-300 rounded shadow p-1.5 mt-4"> see my projects </button> */}
                        <InteractiveHoverButton>see my projects</InteractiveHoverButton>
                    </div>                    
                </div>
            </div>


            {/*--------------- mobile ---------------*/}
            <div className ="flex flex-col items-center text-center mt-10 space-y-0.3 px-3 pr-10 pl-10 md:hidden"> {/* c-space */}
                <FuzzyText className = "mt-50"
                    baseIntensity={0.06}
                    hoverIntensity={0.13}
                    >
                    hi, i'm ion
                </FuzzyText>

                <div className = "flex flex-col pt-3 items-center"> 
                    {/* <p className = "text-sm text-neutral-300"> passionate about ui/ux, visual design, and the language that guides user experience </p> */}

                    <div className = "items-center mt-2">
                         <TypewriterEffect words={wordsLine1} className=" text-neutral-400" continue/>
                    </div>

                    <div className = "items-center">
                         <TypewriterEffect words={wordsLine2} className=" text-neutral-400" delay = {2.7}/>
                    </div>

                    <div className = " text-sm  pt-3 mt-3 "> 
                        {/* <button className = "text-sm  hover:bg-neutral-300 hover:text-navbar text-neutral-300 rounded shadow p-1.5 mt-4"> see my projects </button> */}
                        <InteractiveHoverButton>see my projects</InteractiveHoverButton>
                    </div>   

                </div>
            </div>
        </div>
    )
}

export default HeroText