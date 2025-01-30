"use client";
import React from "react";
import { useRef } from "react";
import {
  m,
  useInView,
  LazyMotion,
  domAnimation,
  AnimatePresence,
  Variant,
  Variants,
} from "framer-motion";
import { cn } from "@/utils/cn";

const noiseAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const textAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

interface NoiseTextProps {
  text: React.ReactNode; // Permite JSX o cualquier contenido renderizable
  addClass?: string;
  fontSizeClass?: string;
  variantProp?: Variants;
  customStyle?: React.CSSProperties;
}

const NoiseText = ({
  text,
  addClass,
  fontSizeClass,
  variantProp,
  customStyle,
}: NoiseTextProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={cn("relative z-[50]", fontSizeClass)}
        variants={variantProp}
      >
        <m.div variants={textAnimation} className={cn("text", addClass)} style={customStyle}>
          {" "}
          {text}
        </m.div>
        <m.div variants={noiseAnimation} className="section"></m.div>
        <svg className="w-0 h-0">
          <filter id="noise">
            <feTurbulence id="turbulence">
              <animate
                attributeName="baseFrequency"
                dur="1s"
                values="0.9;0.8"
                repeatCount="indefinite"
              ></animate>
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              scale="10"
            ></feDisplacementMap>
          </filter>
        </svg>
      </m.div>
    </LazyMotion>
  );
};

export default NoiseText;
