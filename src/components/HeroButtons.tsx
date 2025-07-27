import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
import { motion } from "framer-motion";
import BounceButton from "./ui/bounce-button";


const HeroButtons = () => {
  return (
    <div className="mt-35 ml-211 mr-30 text-center md:justify-end md:text-right pl-0 md:pl-[220px] lg:pl-[220px] text-neutral-300">


      <div className="space-y-4 text-2xl">
        {/* LinkedIn Row */}
        <div className="hidden md:flex items-center justify-end gap-4"> {/* items-center keeps in center, justify end so buttons line up */}
          <p>linkedin</p>
          <BounceButton>in</BounceButton>
        </div>

        {/* GitHub Row */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <p>github</p>
          <BounceButton>gh</BounceButton>
        </div>

        {/* Devpost Row */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <p>devpost</p>
          <BounceButton>dp</BounceButton>
        </div>
      </div>
    </div>
  );
};

export default HeroButtons;