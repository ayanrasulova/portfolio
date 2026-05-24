import React from "react"
import {useState} from "react"
import {motion} from "motion/react" // npm install motion (framer motion)

// import images 
import close from "../assets/close.svg"
import menu from "../assets/menu.svg"

function Navigation() {
    return <ul className = "nav-ul">
        <li className = "nav-li">
           <a href =  "/" className = "nav-link"> home </a> 
        </li>
        <li className = "nav-li">
           <a href =  "/projects" className = "nav-link"> projects </a> 
        </li>
        <li className = "nav-li">
           <a href =  "/creative-work" className = "nav-link"> creative gallery </a> 
        </li>
        {/* <li className = "nav-li">
            <a href =  "/shop" className = "nav-link"> shop </a>
        </li> */}
        <li className = "nav-li">
           <a href =  "/about" className = "nav-link"> about </a> 
        </li>
    </ul>
}

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false); // call setIsOpen to update to isOpen, default of useState (isOpen) will be false

    return ( // location is fixed, takes full width, over other elements... pt adds padding
    // darker color 12141a lighter color 0f1116
        <div className = "fixed inset-x-0 top-0 z-30 h-13 w-full pt-1 backdrop-blur-lg navshadow bg-navbar"> 
            <div className = "mx-auto c-space max-w-7xl"> 
                <div className ="flex h-11.5 items-center justify-between"> {/* py-2 sm:py-0*/}
                    <a 
                    href =  "/"
                    className = "text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                    &gt; ion
                    </a>  

                    <button onClick={() => setIsOpen(!isOpen)} // when clicked, change isOpen to opposite of what it is
                        className = "flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"> {/* for smaller devices, button becomes hidden */}
                        <img src={isOpen ? close : menu} className = "w-6 h-6" 
                        alt = 'toggle'/> {/* create useState (above) for toggle */}
                    </button>

                    <nav className = "hidden sm:flex"> {/* button will show on smaller devices */}
                        <Navigation />
                    </nav>
                </div>
            </div>

            {/* navigation to show whenever user clicks on the menu icon, otherwise hide it */}
          {isOpen && (
            <motion.div
                className="absolute right-2 top-16 z-50 sm:hidden"
                initial={{ x: 35 }}
                animate={{ x: 0 }}
                exit={{ x: 35 }}
                transition={{
                type: "spring", // springs when opens
                stiffness: 320,
                damping: 20,
                }}
            >
                <div className="terminal-popup">
                <nav className="terminal-body">
                    <ul className="flex flex-col gap-6">
                    <li>
                        <a href="/" className="terminal-link">
                        &gt; home
                        </a>
                    </li>

                    <li>
                        <a href="/projects" className="terminal-link">
                        &gt; projects
                        </a>
                    </li>

                    <li>
                        <a href="/creative-work" className="terminal-link">
                        &gt; creative gallery
                        </a>
                    </li>

                    <li>
                        <a href="/about" className="terminal-link">
                        &gt; about
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </motion.div>
            )}

        </div> 
    ) 
}

export default Navbar;