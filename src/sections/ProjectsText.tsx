import React from "react";


const ProjectsText = () => {
    return ( // added pt-30 for space from top, going to try to change the font size             
        <div className="z-10 mt-15 md:mt-32 items-start md:text-left rounded-3xl bg-clip-text pl-0 ml-0"> 


            {/* --------------- desktop, hidden, but shown for desktop  --------------- */}
            <div className = "mt-50 flex-col justify-center hidden items-center md:flex md:px-15 lg:px-15 "> {/* not using c-space so left aligned, justify start + padding on larger screens */}
                <h1 className = "text-3xl text-neutral-300"> projects listed below </h1>
            </div>


            {/*--------------- mobile ---------------*/}
            <div className ="flex flex-col items-center text-center mt-10 space-y-0.3 px-3 pr-10 pl-10 md:hidden"> {/* c-space */}
                <h1 className = "text-3xl text-neutral-300"> projects listed below </h1>
            </div>
        </div>
    )
}

export default ProjectsText