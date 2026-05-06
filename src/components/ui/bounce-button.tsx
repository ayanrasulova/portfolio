// edited from syntax ui bounce button

//adding text to see if source control works 

"use client";
import { motion } from "framer-motion";
import React from "react";


type BounceButtonProps = {
  children: React.ReactNode;
};

const BounceButton = ({ children }: BounceButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      // rounded-full  bg-black border hover:text-navbar hover:bg-neutral-300 
      className=" p-2  text-neutral-400 hover:text-white w-10 h-10 px-2 py-2 text-sm font-medium"
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
};

export default BounceButton;
