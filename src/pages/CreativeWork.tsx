import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import CreativeGrid from "../sections/CreativeGrid";

//function App() { // self closing syntax
 // return <div><Message /></div>
//}


const CreativeWork = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
        <div className = "z-30"><Navbar /> </div>
        <div className = "z-30"><Footer /> </div>

        <section className = "justify-center align-center items-center flex flex-col overscroll-none noscroll">
          <div className = "z-10"> <CreativeGrid /> </div>
        </section>
    </div>
  )
}

export default CreativeWork;