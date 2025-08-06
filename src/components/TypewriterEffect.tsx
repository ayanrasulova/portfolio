// "use client";

// import { twMerge } from "tailwind-merge";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { useEffect, useState } from "react";

// export const TypewriterEffect = ({
//   words,
//   className,
//   cursorClassName,
//   delay = 0,
//   continue: shouldContinue = false, // NEW: continue prop
// }: {
//   words: {
//     text: string;
//     className?: string;
//   }[];
//   className?: string;
//   cursorClassName?: string;
//   delay?: number;
//   continue?: boolean; // NEW: continue prop
// }) => {
//   const fullText = words.map((word) => word.text).join(" ");
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const displayText = useTransform(rounded, (latest) => fullText.slice(0, latest));

//   // State to control when to show the cursor
//   const [showCursor, setShowCursor] = useState(delay === 0);

//   useEffect(() => {
//     let cursorTimer: number | null = null;
//     let animationControls: any;

//     if (delay > 0) {
//       cursorTimer = window.setTimeout(() => setShowCursor(true), delay * 1000);
//     } else {
//       setShowCursor(true);
//     }

//     const animationTimer = window.setTimeout(() => {
//       animationControls = animate(count, fullText.length, {
//         type: "tween",
//         duration: 3,
//         ease: "easeInOut",
//         onComplete: () => {
//           // If continue is true, hide the cursor after animation ends
//           if (shouldContinue) {
//             setShowCursor(false);
//           }
//         },
//       });
//     }, delay * 1000);

//     return () => {
//       if (cursorTimer) clearTimeout(cursorTimer);
//       clearTimeout(animationTimer);
//       if (animationControls && animationControls.stop) animationControls.stop();
//     };
//   }, [fullText, delay, shouldContinue]);

//   return (
//     <div className={twMerge("inline-flex items-center", className)}>
//       <motion.span>
//         {displayText}
//       </motion.span>
//       {showCursor && (
//         <motion.span
//           className={twMerge(
//             "inline-block rounded-sm w-[4px] h-2 md:h-3 lg:h-4 bg-white",
//             cursorClassName
//           )}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 0.8,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />
//       )}
//     </div>
//   );
// };

"use client";

import { twMerge } from "tailwind-merge";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  delay = 0,
  continue: shouldContinue = false,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  delay?: number;
  continue?: boolean;
}) => {
  // Flatten words into characters (letters), preserving spaces and styling
  const letters: {
    char: string;
    className?: string;
    key: string;
  }[] = [];

  words.forEach((word, wordIndex) => {
    const chars = (wordIndex !== words.length - 1 ? word.text + " " : word.text).split("");
    chars.forEach((char, i) => {
      letters.push({
        char,
        className: word.className,
        key: `w${wordIndex}c${i}`,
      });
    });
  });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCursor, setShowCursor] = useState(delay === 0);

  useEffect(() => {
    let cursorTimer: number | null = null;
    let animationControls: any;

    if (delay > 0) {
      cursorTimer = window.setTimeout(() => setShowCursor(true), delay * 1000);
    } else {
      setShowCursor(true);
    }

    const animationTimer = window.setTimeout(() => {
      animationControls = animate(count, letters.length, {
        type: "tween",
        duration: 3,
        ease: "easeInOut",
        onUpdate: (latest) => {
          setVisibleCount(Math.round(latest));
        },
        onComplete: () => {
          if (shouldContinue) {
            setShowCursor(false);
          }
        },
      });
    }, delay * 1000);

    return () => {
      if (cursorTimer) clearTimeout(cursorTimer);
      clearTimeout(animationTimer);
      if (animationControls && animationControls.stop) animationControls.stop();
    };
  }, [letters.length, delay, shouldContinue]);

  return (
    <div className={twMerge("inline-flex items-center flex-wrap", className)}>
      <span className="whitespace-nowrap">
        {letters.slice(0, visibleCount).map(({ char, className, key }) => (
          <span key={key} className={twMerge("inline-block", className)}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
        {showCursor && (
          <motion.span
            className={twMerge(
              "inline-block rounded-sm w-[4px] h-5 md:h-6 lg:h-7 bg-white",
              cursorClassName
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        )}
      </span>
    </div>

  );
};
