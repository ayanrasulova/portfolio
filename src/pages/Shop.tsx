import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

//function App() { // self closing syntax
 // return <div><Message /></div>
//}


const Shop = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
        <div className = "z-30"><Navbar /> </div>
        <div className = "z-30"><Footer /> </div>
    </div>
  )
}

export default Shop;