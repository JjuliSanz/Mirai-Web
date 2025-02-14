"use client";
import HeroTitle from "../HeroTitle";
import HeroPhrase from "../HeroPhrase";
import HeroLogo from "../HeroLogo";
import {
  m,
  LazyMotion,
  domAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";

export const heroContainer = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <LazyMotion features={domAnimation}>
      <section
        className="w-full h-screen overflow-hidden flex flex-col items-center justify-center relative z-10"
        id="home"
        style={{ scrollSnapAlign: "center" }}
      >
        <m.div
          initial="hidden"
          animate={isInView && "visible"}
          variants={heroContainer}
          className="flex "
          ref={ref}
          style={{ gap: "clamp(24px, 8vw, 80px)" }}
        >
          
          <HeroLogo />

          <HeroTitle />

          <HeroPhrase />
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default Hero;
