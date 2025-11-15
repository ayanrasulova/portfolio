import React from "react";
import {TypewriterEffect} from "../components/TypewriterEffect";

// for the type writer effect
const ProjectsSubtext = [
    {text: "projects"},
    {text: "that"},
    {text: "intersect", className: "text-accent" },
    {text: "the"},
    {text: "arts"},
    {text: "&"},
    {text: "accessibility"},
    {text: "with tech",  className: "text-accent2" },
];

const Projects = () => {
  return (
    <div className ="z-10 m-15 md:mt-32 items-start md:text-center rounded-3xl bg-clip-text"> 
    
    {/* ------------------ desktop view  --------------*/}
    <div className = "flex-col justify-center items-center hidden md:flex lg:px-15">
        <h1 className = "text-5xl pb-2 mt-0 text-neutral-300 font-bold leading-15" >My Projects </h1>
        <TypewriterEffect words={ProjectsSubtext} className = "text-2xl ext-neutral-400" continue/>

    </div>
    
    {/* ------------------ mobile view ------------------ */}
    </div>
    
    
  );
};

export default Projects;
