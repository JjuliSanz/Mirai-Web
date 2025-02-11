"use client";
import { imageAnimation, opacityAnimation } from "@/variants";
import {
  m,
  LazyMotion,
  domAnimation,
  useInView,
  AnimatePresence,
  Variants,
} from "framer-motion";
import Image from "next/image";

const staticAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

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

const MockupsPrueba = () => {
  return (
    <m.div
      variants={opacityAnimation}
      className="w-full min-h-[200px] flex gap-[5%] justify-center items-end relative"
    >
      <m.div className="flex z-10 ">
        {/* TABLET */}
        <m.div
          variants={imgAnimation}
          className="relative mx-auto border-tercero bg-tercero border-[2px] rounded-[0.4rem] h-[110px] w-[83px] "
          style={{
            filter: "drop-shadow(0 0 5px var(--quinto))",
          }}
        >
          <div className="absolute bg-tercero rounded-s-lg h-[4px] w-[0.5px] -start-[2.5px] top-[12px] ]"></div>
          <div className="rounded-[0.4rem] overflow-hidden w-full h-full bg-tercero ">
            <Image
              src="/imgs/modern/mustang-menu-tablet.png"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </m.div>

        {/* MOBILE */}
        <m.div
          variants={imgAnimation}
          className="self-end relative -ml-3 -mb-3 border-tercero bg-tercero border-[2px] rounded-[0.5rem] h-[85px] w-[42px] shadow-xl "
          style={{
            filter: "drop-shadow(0 0 5px var(--quinto))",
          }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-tercero rounded-b-[0.2rem] w-[20px] h-[2.5px] "></div>
          <div className="rounded-[0.4rem] overflow-hidden w-full h-full bg-tercero ">
            <Image
              src="/imgs/simple/centenario-about2-mobile.png"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </m.div>
      </m.div>

      {/* LAPTOP */}
      <m.div variants={imgAnimation} className="flex flex-col self-end z-10" style={{
          filter: "drop-shadow(0 0 5px var(--quinto))",
        }}>
        <div className="relative mx-auto border-tercero bg-tercero border-[4px] rounded-t-lg h-[75px] w-[130px] ">
          <div className="rounded-lg overflow-hidden w-full h-full bg-tercero">
            <Image
              src="/imgs/gourmet/template-laptop.png"
              width={500}
              height={500}
              className="h-full w-full object-cover object-top rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div className="relative mx-auto bg-segundo rounded-b-lg rounded-t-sm h-[8px] w-[150px] ">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[35px] h-[3px]  bg-primero"></div>
        </div>
      </m.div>

      {/* DESKTOP */}
      <m.div
        variants={imgAnimation}
        className="flex flex-col absolute z-0 top-0 left-1/2 -translate-x-1/2"
        style={{
          filter: "drop-shadow(0 0 5px var(--quinto))",
        }}
      >
        <div className="relative mx-auto border-tercero bg-tercero border-[8px] rounded-t-lg h-[105px] w-[192px] ">
          <div className="rounded-lg overflow-hidden h-[90px] ]">
            <Image
              src="/imgs/ecommerce/ecommerce-product.png"
              width={500}
              height={500}
              className="h-full w-full object-cover rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div className="relative mx-auto bg-purple-700 rounded-b-lg h-[15px] w-[192px] "></div>
        <div className="relative mx-auto bg-segundo rounded-b-lg h-[35px] w-[50px] "></div>
      </m.div>

      {/* STATIC */}
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
          <feDisplacementMap in="SourceGraphic" scale="10"></feDisplacementMap>
        </filter>
      </svg>
    </m.div>
  );
};

export default MockupsPrueba;