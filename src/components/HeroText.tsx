import React from "react";
import {TypewriterEffect} from "./TypewriterEffect";

const words = [
    { text: "passionate"},
    { text: "about"},
    { text: "ui/ux,"},
    { text: "visual"},
    { text: "design,"},
    { text: "and"},
    { text: "the"  },
    { text: "language" },
    { text: "that"  },
    { text: "guides"},
    { text: "user"},
    { text: "experience.",},
  ];
  
  
const HeroText = () => {
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text ">

            {/* --------------- desktop, hidden, but shown for desktop --------------- */}
            <div className = "flex-col hidden md:flex c-space">
                <h1 className = "text-2xl" >front-end software developer. computer science @ uva</h1>
                <div className = "flex flex-col items-start"> 
                    {/* <p className = "text-sm text-neutral-300"> passionate about ui/ux, visual design, and the language that guides user experience </p> */}
                    
                     <div>
                         <TypewriterEffect words={words} className="text-sm text-neutral-300"/>
                    </div>

                </div>
            </div>

            {/*--------------- mobile ---------------*/}
            <div className ="flex- flex-col space-y-0.3 c-space md:hidden">
                <p className = "text-xl">front-end software developer. computer science @ uva</p>
                <div className = "flex flex-col items-start"> 
                    {/* <p className = "text-sm text-neutral-300"> passionate about ui/ux, visual design, and the language that guides user experience </p> */}
                    
                     <div>
                         <TypewriterEffect words={words} className="text-[14px] text-neutral-300"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroText