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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // px and py instead of x and y so its not fixed/cuts off
      className="inline-flex items-center justify-center bg-navbar px-2.5 py-3 md:px-4 md:py-3 text-sm font-medium text-neutral-400 transition hover:text-white"
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
};

export default BounceButton;
