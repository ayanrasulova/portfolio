import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { LinkPreview } from "../components/ui/link-preview";

// image imports
import email from "src/assets/projects/email.jpg"




const About = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
        <div className = "z-30"><Navbar /> </div>
        <div className = "z-30"><Footer /> </div>

        <section className = "relative flex flex-col bg-darkerbackground min-h-screen overscroll-none noscroll px-5 sm:px-8 lg:px-16"> 
          <div className="z-10 mt-15 md:mt-32 items-start md:text-left rounded-3xl bg-clip-text pl-0 ml-0"> 
            <div className = "flex flex-col items-center mt-3"> 
              <p className = "mt-35 text-2xl text-white"> &gt; about me </p>
              <p className = "pl-25 pr-25 mt-10 text-neutral-400"> hey, i'm ayan (pronounced i-on), and i'm a twenty-year-old rising fourth-year computer science student at the university of virginia! i am double minoring in both data science and english! currently, i am working as a <span className =""> technology intern at{" "} 
                <LinkPreview url="https://www.fanniemae.com/" 
              isStatic={false} className="text-white" width={150} height={80}> fannie mae </LinkPreview>{" "}

                </span>, and also as a <span className = ""> software engineer for uva's </span>{" "}
              <LinkPreview url="https://thecourseforum.com/" 
              isStatic={false} className="text-white" width={150} height={80}> thecourseforum. </LinkPreview>{" "}

              <br></br>
              <br></br>
              i have experience with multiple hackathons (2x mlh winner). in the past, i have interned as a startup accelerator intern for cybersecurity training company skillbit, and as an edtech intern for the nonprofit meducation alliance. i am currently on the executive board for music appreciation club indieheads @ uva (where i work as a creative director), and am a PR committee member for girls who code at uva. 
              <br></br>
              <br></br>
              i am extremely passionate about centering accessiblity within all my projects and volunteer work. feel free to reach out to me at 
              <LinkPreview url="mailto:ayanfairfax@gmail.com" imageSrc = {email}
              isStatic={true} className="text-white" width={20} height={20}> <span className ="text-white">ayanfairfax@gmail.com</span> </LinkPreview>{" "}
              for any questions or inquiries, or reach me at my other socials at the bottom of the page.
              </p>
            </div>
           </div>
        </section>
        
    </div>
  )
}

export default About;