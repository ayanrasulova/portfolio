import React from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";


//function App() { // self closing syntax
 // return <div><Message /></div>
//}


const App = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
      {/* make sure you add each component into App.tsx */} 
      <div className = "z-30"><Navbar /> </div>
      <div className = "z-30"><Footer /> </div>

      <Hero />
    </div>
  )
}

export default App;