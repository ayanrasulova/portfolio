import React from "react"
import {useState} from "react"
import {motion} from "motion/react" // npm install motion (framer motion)
import BounceButton from "../components/ui/bounce-button";



const Footer = () => {
  return ( 
    <div className = "justify-center items-center"> 
        <div className = "bottom-0 fixed inset-x-0 ml-5 z-30 h-15 w-full pt-1 backdrop-blur-lg navshadow bg-newnavbar">  
            <a className = "mr-10" href = "https://linkedin.com/in/ayan-rasulova-96272123a" target="_blank"><BounceButton>linkedin</BounceButton></a>
            <a className = "mr-10" href = "https://github.com/ayanrasulova" target="_blank"><BounceButton>github</BounceButton></a>
            <a href = "https://devpost.com/ayanrasulova?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank"><BounceButton>devpost</BounceButton></a>
        </div>
    </div>

    )
}

export default Footer;

