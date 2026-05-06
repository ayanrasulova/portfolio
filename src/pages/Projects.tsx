import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import ProjectsText from "../components/HeroText";

//function App() { // self closing syntax
 // return <div><Message /></div>
//}


const Projects = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
        <div className = "z-30"><Navbar /> </div>
        <div className = "z-30"><Footer /> </div>
        <ProjectsText />
    </div>
  )
}

export default Projects;