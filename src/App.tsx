import React from "react"
import Message from "./message"; // import from message (. means current folder)
import Navbar from "./sections/navbar";


//function App() { // self closing syntax
 // return <div><Message /></div>
//}


const App = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
      <Navbar />

    </div>
  )
}

export default App;