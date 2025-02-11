"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  m,
  useInView,
  LazyMotion,
  domAnimation,
  AnimatePresence,
} from "framer-motion";

const BackgroundPrueba = ({ isInView }: { isInView: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setIsVisible(true);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    if (isVisible) {
      const pixels = document.getElementsByClassName("pixelPrueba");
      Array.from(pixels).forEach((pixel) => {
        const randomDelay = Math.ceil(Math.random() * 1500) + "ms";
        (pixel as HTMLElement).style.animationDelay = randomDelay;
      });
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <m.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.8, 0] }}
          transition={{ times: [0, 0.5, 1], duration: 3.5, ease: "easeInOut" }}
          // duration: 3.5
          onAnimationComplete={() => setIsVisible(false)}
          className="bg-cuarto absolute w-[100%] h-[100%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden z-[100]"
        >
          {[...Array(312)].map((_, index) => (
            <div key={index} className="pixelPrueba"></div>
          ))}
        </m.div>
      )}
    </>
  );
};

export default BackgroundPrueba;
