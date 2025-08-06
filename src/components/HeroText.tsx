import React from "react";
import {TypewriterEffect} from "./TypewriterEffect";
// import { motion } from "motion/react";
import { motion } from "framer-motion";
import BuzzEffect from "./ui/buzz";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

  const wordsLine1 = [
    { text: "passionate" },
    { text: "about" },
    { text: "ui/ux,", className: "text-accent" },
    { text: "visual" },
    { text: "design,", className: "text-accent2" },
  ];
  const wordsLine2 = [
    { text: "and" },
    { text: "the" },
    { text: "language" },
    { text: "that" },
    { text: "guides" },
    { text: "user", className: "text-accent3" },
    { text: "experience.", className: "text-accent3" },
  ];
  const project = [
    { text: "see"},
    { text: "my"},
    { text: "projects"},
  ]
  
  
const HeroText = () => {
    return ( // added pt-30 for space from top, going to try to change the font size             
        <div className="z-10 mt-15 md:mt-35 items-start md:text-left rounded-3xl bg-clip-text pl-0 ml-0"> 


            {/* --------------- desktop, hidden, but shown for desktop  --------------- */}
            <div className = "flex-col justify-start items-start hidden md:flex md:px-15 lg:px-15 "> {/* not using c-space so left aligned, justify start + padding on larger screens */}
                <h1 className = "text-4xl pb-2 mt-3 text-neutral-300" >Front-end Software Developer. <br /> Computer Science @ UVA</h1>

                <div className = "flex flex-col pt-1 items-start"> 
                    {/*used to be items-start */}
                    
                     <div className = "absolute">
                         <TypewriterEffect words={wordsLine1} className="text-2xl text-neutral-400" continue/>
                         <br />
                         <TypewriterEffect words={wordsLine2} className="text-2xl text-neutral-400" delay = {2.7}/>
                    </div>
                    <div className = " text-sm  pt-3 mt-20 "> 
                        {/* <button className = "text-sm  hover:bg-neutral-300 hover:text-navbar text-neutral-300 rounded shadow p-1.5 mt-4"> see my projects </button> */}
                        <InteractiveHoverButton>see my projects</InteractiveHoverButton>
                    </div>                    
                </div>
            </div>


            {/*--------------- mobile ---------------*/}
            <div className ="flex flex-col items-center text-center mt-10 space-y-0.3 px-3 pr-10 pl-10 md:hidden"> {/* c-space */}
                <p className = "text-3xl">front-end software developer. <br /> computer science @ uva</p>
                <div className = "flex flex-col items-center"> 
                    {/* <p className = "text-sm text-neutral-300"> passionate about ui/ux, visual design, and the language that guides user experience </p> */}

                     <div className = "pt-2">
                         <TypewriterEffect words={wordsLine1} className="text-[17px] text-neutral-300" continue/>
                         <br />
                         <TypewriterEffect words={wordsLine2} className="text-[17px] text-neutral-300" delay = {2.7} />
                    </div>
                    <div className = "text-sm mt-4 items-center md:hidden"> 
                        {/* <button className = "text-sm  hover:bg-neutral-300 hover:text-navbar text-neutral-300 rounded shadow p-1.5 mt-4"> see my projects </button> */}
                        <InteractiveHoverButton>see my projects</InteractiveHoverButton>
                    </div>   

                </div>
            </div>
        </div>
    )
}

export default HeroText