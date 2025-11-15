import React from "react";
import BounceButton from "./ui/bounce-button";

const HeroButtons = () => {
  return (
    <div className="relative w-full text-neutral-300">

      
      <div className="hidden md:flex items-center justify-end gap-6 absolute right-0 left-[27rem] top-[22rem] pointer-events-auto">
        <a href="https://linkedin.com/in/ayan-rasulova-96272123a" target="_blank">
          <BounceButton>in</BounceButton>
        </a>
        <a href="https://github.com/ayanrasulova" target="_blank">
          <BounceButton>gh</BounceButton>
        </a>
        <a href="https://devpost.com/ayanrasulova?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
           target="_blank">
          <BounceButton>dp</BounceButton>
        </a>
      </div>

    </div>
  );
};

export default HeroButtons;
