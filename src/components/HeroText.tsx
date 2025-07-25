import React from "react";
import {TypewriterEffect} from "./TypewriterEffect";
import { motion } from "motion/react";

/* const words = [ // words for typewriter effect
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
  ]; */

  const wordsLine1 = [
    { text: "passionate" },
    { text: "about" },
    { text: "ui/ux," },
    { text: "visual" },
    { text: "design," },
  ];
  const wordsLine2 = [
    { text: "and" },
    { text: "the" },
    { text: "language" },
    { text: "that" },
    { text: "guides" },
    { text: "user" },
    { text: "experience." },
  ];
  const project = [
    { text: "see"},
    { text: "my"},
    { text: "projects"},
  ]
  
  
const HeroText = () => {
    return ( // added pt-30 for space from top, going to try to change the font size 
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text pl-0 ml-0"> 

        {/* <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text "> */}

            {/* --------------- desktop, hidden, but shown for desktop --------------- */}
            <div className = "flex-col justify-start hidden md:flex md:px-10 lg:px-15 "> {/* not using c-space so left aligned, justify start + padding on larger screens */}
                <h1 className = "text-2xl text-neutral-300" >front-end software developer. <br /> computer science @ uva</h1>
                <div className = "flex flex-col items-start"> 
                    {/* <p className = "text-sm text-neutral-300"> passionate about ui/ux, visual design, and the language that guides user experience </p> */}
                    
                     <div>
                         <TypewriterEffect words={wordsLine1} className="text-sm text-neutral-400" continue/>
                         <br />
                         <TypewriterEffect words={wordsLine2} className="text-sm text-neutral-400" delay = {2.7}/>
                    </div>
                    <div> {/* wanted to add projects on hero page */}
                        <button className = "text-sm  hover:bg-neutral-300 hover:text-navbar text-neutral-300 rounded shadow p-1.5 mt-4"> see my projects </button>
                    </div>                    
                </div>
            </div>

            {/*--------------- mobile ---------------*/}
            <div className ="flex flex-col justify-start text-left space-y-0.3 px-3 pl-10 md:hidden"> {/* c-space */}
                <p className = "text-xl">front-end software developer. <br /> computer science @ uva</p>
                <div className = "flex flex-col items-start"> 
                    {/* <p className = "text-sm text-neutral-300"> passionate about ui/ux, visual design, and the language that guides user experience </p> */}

                     <div>
                         <TypewriterEffect words={wordsLine1} className="text-[14px] text-neutral-300" continue/>
                         <br />
                         <TypewriterEffect words={wordsLine2} className="text-[14px] text-neutral-300" delay = {2.7} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroText