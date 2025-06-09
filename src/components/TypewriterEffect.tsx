"use client";

import { twMerge } from "tailwind-merge";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Combine all words into a single string
  const fullText = words.map((word) => word.text).join(" ");
  // Index of the current character being shown
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  // Text to display: from start up to the current character
  const displayText = useTransform(rounded, (latest) => fullText.slice(0, latest));

  // Animation effect
  useEffect(() => {
    const controls = animate(count, fullText.length, {
      type: "tween",
      duration: 3, // Adjust as needed for speed
      ease: "easeInOut",
    });
    return controls.stop;
  }, [fullText]);

  // Apply per-word class (this is a simple approach; for per-character, see below)
  // For per-character classes, you would need a more complex solution
  return (
    <div className={twMerge("inline-flex items-center", className)}>
      <motion.span>
        {displayText}
      </motion.span>
      <motion.span
        className={twMerge(
          "inline-block rounded-sm w-[4px] h-2 md:h-3 lg:h-4 bg-white",
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
    </div>
  );
};

// NOTE: The TypewriterEffectSmooth component is unchanged, but included for completeness.
// If you want to update it with the same logic, do so as above.
export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={twMerge(`dark:text-white text-black`, word.className)}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={twMerge("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div style={{ whiteSpace: "nowrap" }}>
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={twMerge(
          "block rounded-sm w-[4px] h-2 sm:h-3 xl:h-4 bg-white",
          cursorClassName
        )}
      />
    </div>
  );
};