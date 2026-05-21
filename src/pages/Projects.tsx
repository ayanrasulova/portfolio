import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import ProjectsText from "../sections/ProjectsText";

//function App() { // self closing syntax
 // return <div><Message /></div>
//}

const projects = [
  {
    index: 1,
    name: "thistle",
    description: "turning your hand movements into brushstrokes with computer vision",
    image: "src/assets/projects/thistle.jpg",
    tags: ["React", "Python", "Bootstrap", "CSS", "Flask", "Javascript", "Mediapipe", "Node.JS", "OpenCV"],
    devpost: "https://devpost.com/software/thistle-m0so3n",
  },
  {
    index: 2,
    name: "big iron",
    description: "computer vision powered prosthetic limb",
    image: "src/assets/projects/bigiron.jpg",
    tags: ["Python", "YoloV5", "C++", "Arduino", "Torch"],
    devpost: "https://devpost.com/software/big-iron",
  },
  {
    index: 3,
    name: "doctor hoo",
    description: "ai medical chatbot",
    image: "src/assets/projects/doctorhoo.jpg",
    tags: ["React", "Python", "OpenAI", "SQL", "JavaScript", "Django", "HTML", "CSS"],
    devpost: "https://devpost.com/software/doctor-hoo",
  },
  {
    index: 4,
    name: "posturepal",
    description: "the smart, wearable posture assistant that uses imu technology to track and correct posture in real-time.",
    image: "src/assets/projects/posturepal.jpg",
    tags: ["React", "Python", "Django", "Flask"],
    devpost: "https://devpost.com/software/posturepal-r42f0l",
  },

];


const Projects = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
        <div className = "z-30"><Navbar /> </div>
        <div className = "z-30"><Footer /> </div>

        <section className = "relative flex flex-col bg-black min-h-screen overscroll-none noscroll px-5 sm:px-8 lg:px-16"> 
          <div className="z-10 my-auto md:my-auto items-start md:text-left rounded-3xl bg-clip-text pl-0 ml-0"> 
            <div className = "flex flex-col items-center"> 
              <p className = "my-auto text-2xl text-white"> &gt; projects </p>
                <p className = "pl-25 pr-25 mt-2 mb-5 text-neutral-400"> highlights from hackathons & independent work </p>
                

                <div className = "container mx-auto max-w-5xl">
                {/* displaying projects */}
                  <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, key) => (
                      <div key={key} 
                      className = "group rounded-xl bg-darkerbackground overflow-hidden"> 
                        
                        {/* project titles */}
                        <div className = "mx-4 my-3 text-white text-xl object-cover transition-transform duration-500 group-hover:scale-101 w-full height-full"> {project.name} </div>
                        <div className = "h-48 relative overflow-hidden"> 

                          {/* image */}
                          <img src={project.image} alt={project.name} 
                          className="object-cover transition-transform duration-500 group-hover:scale-107 width-full height-full" /> 

                          {/* description */}
                          <div className ="absolute mx-4 my-3 inset-0 z-10 text-white opacity-0 group-hover:opacity-100 transition-transform duration-1000 group-hover:scale-101"> {project.description} </div>
                          
                          {/* gray hover */}
                          <div className = "absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-400 group-hover:opacity-100"> </div>

                        </div>

                        {/* tags */}
                          <div className = "p-4"> 
                            <div className = "flex flex-wrap gap-1"> 
                              {project.tags.map((tag) => (
                                <div className = "rounded px-2 py-0.5 border rounded-2xl text-neutral-400 text-xs"> {tag} </div>

                              ))}
                            </div>
                          </div>

                      </div>
                    ))}

                  </div>
                </div>

            </div>
          </div>
        </section>
        
    </div>
  )
}

export default Projects;