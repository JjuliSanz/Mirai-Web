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
import Image from "next/image";

const noiseAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const imgAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

interface NoiseTextProps {
  image: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClass?: string;
  addClass?: string;
  variantProp?: Variants;
}

const NoiseImage = ({
  image,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClass,
  addClass,
  variantProp,
}: NoiseTextProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div className="relative" variants={variantProp}>
        <m.div variants={imgAnimation} className={cn("opacity-0", addClass)}>
          {/* <Image
            alt={imageAlt}
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            loading="lazy"
            className={imageClass}
          /> */}
          {image}
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

export default NoiseImage;
