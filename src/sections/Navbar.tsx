import React from "react"
import {useState} from "react"
import {motion} from "motion/react" // npm install motion (framer motion)

function Navigation() {
    return <ul className = "nav-ul">
        <li className = "nav-li">
           <a className = "nav-link"> Home </a> 
        </li>
        <li className = "nav-li">
           <a className = "nav-link"> Projects </a> 
        </li>
        <li className = "nav-li">
           <a className = "nav-link"> Creative Work </a> 
        </li>
        <li className = "nav-li">
           <a className = "nav-link"> About </a> 
        </li>
    </ul>
}

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false); // call setIsOpen to update to isOpen, default of useState (isOpen) will be false

    return ( // location is fixed, takes full width, over other elements
        <div className = "fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary">
            <div className = "mx-auto c-space max-w-7xl"> 
                <div className ="flex items-center justify-between py-2 sm:py-0">
                    <a 
                    href =  "/"
                    className = "text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                    Ayan
                    </a>  

                    <button onClick={() => setIsOpen(!isOpen)} // when clicked, change isOpen to opposite of what it is
                        className = "flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"> {/* for smaller devices, button becomes hidden */}
                        <img src={isOpen ? "src/assets/close.svg" : "src/assets/menu.svg"} className = "w-6 h-6" 
                        alt = 'toggle'/> {/* create useState (above) for toggle */}
                    </button>

                    <nav className = "hidden sm:flex"> {/* button will show on smaller devices */}
                        <Navigation />
                    </nav>
                </div>
            </div>

            {/* navigation to show whenever user clicks on the menu icon, otherwise hide it */}
          {isOpen && ( // if it is open, this will execute
          <motion.div className = "block overflow-hidden text-center sm:hidden"
          initial={{ opacity:0, x: -10}}
          animate = {{opacity: 1, x:0}}
          style = {{maxHeight:"100vh"}}
          transition = {{ duration:1}}
          >
            <nav className = "pb-5>">
                <Navigation />
            </nav>
          </motion.div> 
          )}

        </div> 
    ) 
}

export default Navbar;