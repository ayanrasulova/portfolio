import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import ProjectsText from "../sections/ProjectsText";

//function App() { // self closing syntax
 // return <div><Message /></div>
//}


const Projects = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
        <div className = "z-30"><Navbar /> </div>
        <div className = "z-30"><Footer /> </div>

        <section className = "relative flex flex-col bg-darkerbackground min-h-screen overscroll-none noscroll px-5 sm:px-8 lg:px-16"> 
            <div className = "z-10"> <ProjectsText /> </div>
        </section>
        
    </div>
  )
}

export default Projects;