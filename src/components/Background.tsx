import React from "react"

const Background = () => {
    return (
        <section className = "absolute inset-0 bg-black/40"> {/* /40 means 40 opacity */}
            <div className = "relative h-screen overflow-y-hidden">
            <div />
            <div />
            <div />
            <div />
            <div />
            </div>
        </section>
    )
}

export default Background