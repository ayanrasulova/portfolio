import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
import { motion } from "motion/react";

const HeroGrid = () => {
  return (
    <section className="w-full px-[55px] mb-20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[10rem]">
        <div className=" grid-gradient2 md:col-span-1 h-[20rem] rounded-2xl">1</div>
        <div className=" grid-gradient2 md:col-span-1 h-[20rem] rounded-2xl">2</div>
        <div className=" grid-gradient2 md:col-span-1 h-[20rem] rounded-2xl">3</div>
        <div className=" grid-gradient2 md:col-span-1 h-[20rem] rounded-2xl">4</div>
      </div>
    </section>
  );
};

export default HeroGrid;
