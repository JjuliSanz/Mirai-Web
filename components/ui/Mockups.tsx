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

const Mockups = () => {
  return (
    <m.div
      variants={opacityAnimation}
      className="w-full min-h-[150px] 360:min-h-[200px] 500:min-h-[280px] 800:min-h-[300px] lg:w-[40%]  xl:scale-100 flex gap-[5%] justify-center items-end relative"
    >
      <m.div className="flex z-10 500:pb-4 lg:pb-0">
        {/* TABLET */}
        <m.div
          variants={imgAnimation}
          className="relative mx-auto border-tercero bg-tercero border-[2px] rounded-[0.4rem] h-[90px] 360:h-[110px] w-[70px] 360:w-[83px] 500:border-[3px] 500:rounded-[0.5rem] 500:h-[140px] 500:w-[105px] 800:border-[4px] 800:rounded-[0.875rem] 800:h-[220px] 800:w-[165px]"
          style={{
            filter: "drop-shadow(0 0 5px var(--quinto))",
          }}
        >
          <div className="absolute bg-tercero rounded-s-lg h-[4px] w-[0.5px] -start-[2.5px] top-[12px] 500:h-[6px] 500:w-[0.65px] 500:-start-[3.5px] 500:top-[15px] 800:h-[10px] 800:w-[0.9px] 800:-start-[5px] 800:top-[22px]"></div>
          <div className="rounded-[0.4rem] overflow-hidden w-full h-full bg-tercero 500:rounded-[0.5rem] 800:rounded-[0.625rem]">
            <Image
              src="/imgs/modern/mustang-menu-tablet.webp"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt="Tablet Mockup Image"
            />
          </div>
        </m.div>

        {/* MOBILE */}
        <m.div
          variants={imgAnimation}
          className="self-end relative -ml-3 -mb-3 border-tercero bg-tercero border-[2px] rounded-[0.5rem] h-[75px] 360:h-[85px] w-[37px] 360:w-[42px] shadow-xl 500:-ml-5 500:-mb-5 500:border-[3px] 500:h-[125px] 500:w-[62.5px] 800:-ml-8 800:-mb-8 800:border-[4px] 800:h-[185px] 800:w-[92.5px]"
          style={{
            filter: "drop-shadow(0 0 5px var(--quinto))",
          }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-tercero rounded-b-[0.2rem] w-[15px] 360:w-[20px] h-[1.5px] 360:h-[2.5px] 500:w-[30px] 500:h-[3.5px] 800:w-[45px] 800:h-[5.5px]"></div>
          <div className="rounded-[0.4rem] overflow-hidden w-full h-full bg-tercero 500:rounded-[0.5rem] 800:rounded-[0.625rem]">
            <Image
              src="/imgs/simple/centenario-about2-mobile.webp"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt="Mobile Mockup Image"
            />
          </div>
        </m.div>
      </m.div>

      {/* LAPTOP */}
      <m.div variants={imgAnimation} className="flex flex-col self-end z-10" style={{
          filter: "drop-shadow(0 0 5px var(--quinto))",
        }}>
        <div className="relative mx-auto border-tercero bg-tercero border-[4px] rounded-t-lg h-[65px] 360:h-[75px] w-[120px] 360:w-[130px] 500:border-[5px] 500:h-[115px] 500:w-[185px] 800:border-[6px] 800:h-[170px] 800:w-[300px]">
          <div className="rounded-lg overflow-hidden w-full h-full bg-tercero">
            <Image
              src="/imgs/gourmet/template-laptop.webp"
              width={500}
              height={500}
              className="h-full w-full object-cover object-top rounded-lg"
              alt="Laptop Mockup Image"
            />
          </div>
        </div>
        <div className="relative mx-auto bg-segundo rounded-b-lg rounded-t-sm h-[4px] 360:h-[8px] w-[145px] 360:w-[150px] 500:h-[10px] 500:w-[225px] 800:h-[15px] 800:w-[350px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[35px] h-[3px] 500:w-[50px] 500:h-[5px] 800:w-[65px] 800:h-[6px] bg-primero"></div>
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
        <div className="relative mx-auto border-tercero bg-tercero border-[8px] rounded-t-lg h-[90px] 360:h-[105px] w-[175px] 360:w-[192px] 500:border-[10px] 500:h-[165px] 500:w-[280px] 800:border-[12px] 800:h-[240px] 800:w-[420px]">
          <div className="rounded-lg overflow-hidden h-[80px] 360:h-[90px] 500:h-[150px] 800:h-[210px]">
            <Image
              src="/imgs/ecommerce/ecommerce-product.webp"
              width={500}
              height={500}
              className="h-full w-full object-cover rounded-lg"
              alt="Desktop Mockup Image"
            />
          </div>
        </div>
        <div className="relative mx-auto bg-purple-700 rounded-b-lg h-[10px] 360:h-[15px] w-[187px] 360:w-[192px] 500:h-[24px] 500:w-[280px] 800:h-[30px] 800:w-[420px]"></div>
        <div className="relative mx-auto bg-segundo rounded-b-lg h-[20px] 360:h-[35px] w-[45px] 360:w-[50px] 500:h-[52px] 500:w-[85px] 800:h-[72px] 800:w-[115px]"></div>
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

export default Mockups;

