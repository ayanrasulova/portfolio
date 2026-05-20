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
          <div className="z-10 mt-15 md:mt-32 items-start md:text-left rounded-3xl bg-clip-text pl-0 ml-0"> 
            <div className = "flex flex-col items-center mt-3"> 
              <p className = "mt-35 text-2xl text-white"> &gt; projects listed below </p>
                <p className = "pl-25 pr-25 mt-10 text-neutral-400"> chill im going to add them. </p>
            </div>
           </div>
        </section>
        
    </div>
  )
}

export default Projects;