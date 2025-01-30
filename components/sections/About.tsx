"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { cont, opacityAnimation } from "@/variants";
import Button from "../ui/Button";
import NoiseText from "../NoiseText";
import Background from "./Background";
import useLanguageStore from "@/store/languageStore";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { language } = useLanguageStore();
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id="about"
        className="w-full h-screen relative flex items-center justify-center overflow-hidden  z-10 "
        style={{ scrollSnapAlign: "center" }}
      >
        <m.div
          initial="hidden"
          animate={isInView && "visible"}
          variants={cont}
          ref={ref}
          className="w-full max-w-[95%] lg:max-w-[70%] max-h-[98vh] mx-auto flex flex-col justify-center items-center gap-4 backdrop-blur-md  p-6 overflow-hidden relative rounded-xl"
        >
          <Background isInView={isInView} />

          <NoiseText
            text={language === "en" ? "ABOUT US" : "SOBRE NOSOTROS"}
            addClass="tracking-wider font-bold text-center neon font-primary"          
            fontSizeClass="text-fluidTitle"
            variantProp={opacityAnimation}
          />

          <NoiseText
            text={
              language === "en" ? (
                <>
                  Inspired by the word{" "}
                  <span className="font-semibold italic">未来</span> meaning
                  &quot;future&quot; in Japanese, our mission is to craft
                  cutting-edge digital experiences that push the boundaries of
                  creativity and technology.
                </>
              ) : (
                <>
                  Inspirado por la palabra{" "}
                  <span className="font-semibold italic">未来</span>, que
                  significa &quot;futuro&quot; en japonés, nuestra misión es
                  crear experiencias digitales de vanguardia que lleven los
                  límites de la creatividad y la tecnología más allá.
                </>
              )
            }
            addClass="font-secondary font-medium"
            customStyle={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            fontSizeClass="text-fluid"
            variantProp={opacityAnimation}
          />
          <NoiseText
            text={
              language === "en"
                ? "We're more than just a web lab, we're digital architects of the future. Whether you need a bold online presence, a customized user experience, or a tech-forward solution that stands out, Mirai Web Lab is here to bring your vision to life."
                : "No somos solo un laboratorio web, somos arquitectos digitales del futuro. Ya sea que necesites una presencia online audaz, una experiencia de usuario personalizada o una solución tecnológica innovadora, Mirai Web Lab está aquí para hacer realidad tu visión."
            }
            addClass="font-secondary font-medium"
            customStyle={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            fontSizeClass="text-fluid"
            variantProp={opacityAnimation}
          />

          <NoiseText
            text={
              language === "en"
                ? "In a world driven by rapid innovation, staying ahead means staying bold. We fuse technology, creativity, and culture to build futuristic, pixel-perfect solutions that leave a lasting impact. Our studio thrives on exploring the edges of digital design, creating experiences that are as visually captivating as they are functional."
                : "En un mundo impulsado por la innovación rápida, estar a la vanguardia significa ser audaz. Fusionamos tecnología, creatividad y cultura para construir soluciones futuristas y precisas que dejan una impresión duradera. Nuestro estudio se destaca en explorar los límites del diseño digital, creando experiencias visualmente cautivadoras y funcionales."
            }
            addClass="font-secondary font-medium "
            customStyle={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            fontSizeClass="text-fluid"
            variantProp={opacityAnimation}
          />

          <NoiseText
            text={
              language === "en"
                ? "At Mirai Web Lab, we understand that your brand is your identity. We craft unique, futuristic designs that not only represent your business but also capture your audience's attention. Our work is bold, vibrant, and memorable, ensuring your project stands out in a crowded digital world."
                : "En Mirai Web Lab, entendemos que tu marca es tu identidad. Creamos diseños únicos y futuristas que no solo representan tu negocio, sino que también capturan la atención de tu audiencia. Nuestro trabajo es audaz, vibrante y memorable, asegurando que tu proyecto destaque en un mundo digital saturado."
            }
            addClass="font-secondary font-medium"
            customStyle={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            fontSizeClass="text-fluid"
            variantProp={opacityAnimation}
          />
          <NoiseText
            text={
              <Button
                title="NEXT LEVEL AWAITS"
                href="/#contact"
                width="w-[250px] 400:w-[350px]"
                height="h-[40px] 500:h-[50px]"
              />
            }
            variantProp={opacityAnimation}
          />
        </m.div>
      </m.section>
    </LazyMotion>
  );
};

export default About;
