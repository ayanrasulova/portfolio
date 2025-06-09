import React from "react";

const HeroText = () => {
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text ">
            {/* desktop, hidden, but shown for desktop */}
            <div className = "flex-col hidden md:flex c-space">
                <h1>front-end software developer. </h1>
            </div>
            {/* mobile */}
        </div>
    )
}

export default HeroText