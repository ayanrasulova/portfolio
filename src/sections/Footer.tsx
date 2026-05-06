import React from "react"
import {useState} from "react"
import {motion} from "motion/react" // npm install motion (framer motion)
import BounceButton from "../components/ui/bounce-button";



const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 h-15 pt-1 backdrop-blur-lg navshadow bg-newnavbar">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-center gap-4 px-4">
        <a href="https://linkedin.com/in/ayan-rasulova-96272123a" target="_blank" rel="noreferrer">
          <BounceButton>linkedin</BounceButton>
        </a>
        <a href="https://github.com/ayanrasulova" target="_blank" rel="noreferrer">
          <BounceButton>github</BounceButton>
        </a>
        <a href="https://devpost.com/ayanrasulova?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noreferrer">
          <BounceButton>devpost</BounceButton>
        </a>
      </div>
    </div>
  )
}

export default Footer;

