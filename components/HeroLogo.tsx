"use client";
import { m } from "framer-motion";
import { opacityAnimation } from "@/variants";

const HeroLogo = () => {
  return (
    <m.h1
      variants={opacityAnimation}
      className="self-center flex flex-col items-center justify-center gap-2"
    >
      <span
        className="font-logo text-cuarto leading-none inline-block font-bold z-10 tracking-[10px] glitch layers"
        data-text="未"
        style={{
          fontSize: "clamp(5rem, 20vw, 8rem)",
          filter: "drop-shadow(0 1px 3px)",
        }}
      >
        未
      </span>
      <span
        className="font-logo text-cuarto leading-none inline-block font-bold z-10 tracking-[10px] glitch layers"
        data-text="来"
        style={{
          fontSize: "clamp(5rem, 20vw, 10rem)",
          filter: "drop-shadow(0 1px 3px)",
        }}
      >
        来
      </span>
    </m.h1>
  );
};

export default HeroLogo;
