import React from "react";
import Message from "./message"; // import from message (. means current folder)
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";


//function App() { // self closing syntax
 // return <div><Message /></div>
//}


const App = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
      {/* make sure you add each component into App.tsx */} 
      <Navbar /> 
      <Hero />
    </div>
  )
}

export default App;