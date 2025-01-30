"use client";
import {
  m,
  LazyMotion,
  domAnimation,
  useInView,
  AnimatePresence,
  Variants,
} from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  imgSrc: string;
  projectHref: string;
  projectAlt: string;
  framerVariants?: Variants;
}
const ImageFilter = ({
  imgSrc,
  projectHref,
  projectAlt,
  framerVariants,
}: Props) => {
  return (
    <LazyMotion features={domAnimation}>
      <Link
        href={projectHref}
        target="_blank"
        className="page w-full lg:w-[45%] h-full max-h-[60%] 600:max-h-[55%] lg:max-h-full rounded-xl flex flex-col items-center justify-center transition ease-in-out duration-300 hover:scale-[0.95]"
        style={{
          filter: "drop-shadow(0 0 5px var(--quinto))",
        }}
      >
        {/* SVG FILTERS */}
        <svg className="filter">
          <filter id="alphaRed">
            <feColorMatrix
              mode="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="joint"
            />
          </filter>
          <filter id="alphaGreen">
            <feColorMatrix
              mode="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="joint"
            />
          </filter>
          <filter id="alphaBlue">
            <feColorMatrix
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="joint"
            />
          </filter>
          <filter id="alpha">
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>
        {/* IMAGE */}
        <m.div
          variants={framerVariants}
          className="imgWrap h-full max-450:w-[400px] 450:w-full max-w-[400px] sm:max-w-[550px] max-h-[400px] sm:max-h-[550px] max-450:scale-[0.8] relative overflow-hidden  "
        >
          <Image
            alt={projectAlt}
            width={1000}
            height={1000}
            className="red w-full h-full object-cover object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={imgSrc}
            style={{
              filter: "url(#alphaRed)",
              mixBlendMode: "lighten",
            }}
          />
          <Image
            alt={projectAlt}
            width={1000}
            height={1000}
            className="green w-full h-full object-cover object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={imgSrc}
            style={{
              filter: "url(#alphaGreen)",
              mixBlendMode: "lighten",
            }}
          />
          <Image
            alt={projectAlt}
            width={1000}
            height={1000}
            className="blue w-full h-full object-cover object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={imgSrc}
            style={{
              filter: "url(#alphaBlue)",
              mixBlendMode: "lighten",
            }}
          />
        </m.div>
      </Link>
    </LazyMotion>
  );
};

export default ImageFilter;
