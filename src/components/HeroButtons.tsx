import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
import { motion } from "framer-motion";
import BounceButton from "./ui/bounce-button";


const HeroButtons = () => {
  return (
    <div className="mt-35 ml-211 mr-30 text-center md:justify-end md:text-right pl-0 md:pl-[220px] lg:pl-[220px] text-neutral-300">


      <div className="space-y-4 text-2xl">
        {/* LinkedIn Row */}
        <div className="hidden md:flex items-center justify-end gap-4"> {/*  items-center keeps in center, justify end so buttons line up */}
          <p>linkedin</p>
          <a href = "https://linkedin.com/in/ayan-rasulova-96272123a" target="_blank"><BounceButton>in</BounceButton></a>
        </div>

        {/* GitHub Row */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <p>github</p>
          <a href = "https://github.com/ayanrasulova" target="_blank"><BounceButton>gh</BounceButton></a>
        </div>

        {/* Devpost Row */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <p>devpost</p>
          <a href = "https://devpost.com/ayanrasulova?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank"><BounceButton>dp</BounceButton></a>
        </div>

      </div>
    </div>
  );
};

export default HeroButtons;