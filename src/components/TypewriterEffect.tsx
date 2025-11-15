"use client";

import { twMerge } from "tailwind-merge";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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
  // prepare characters
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
  const [showCursor, setShowCursor] = useState(false);

  // track if animation should start
  const [shouldStart, setShouldStart] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // added observe scrolling into view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Run animation *only after scrolling into view*
  useEffect(() => {
    if (!shouldStart) return;

    let cursorTimer: number | null = null;
    let animationControls: any;

    cursorTimer = window.setTimeout(() => setShowCursor(true), delay * 1000);

    const animationTimer = window.setTimeout(() => {
      animationControls = animate(count, letters.length, {
        type: "tween",
        duration: 3,
        ease: "easeInOut",
        onUpdate: (latest) => {
          setVisibleCount(Math.round(latest));
        },
        onComplete: () => {
          if (shouldContinue) setShowCursor(false);
        },
      });
    }, delay * 1000);

    return () => {
      if (cursorTimer) clearTimeout(cursorTimer);
      clearTimeout(animationTimer);
      if (animationControls?.stop) animationControls.stop();
    };
  }, [shouldStart, letters.length, delay, shouldContinue]);

  return (
    <div
      ref={containerRef}
      className={twMerge("inline-flex items-center flex-wrap", className)}
    >
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
