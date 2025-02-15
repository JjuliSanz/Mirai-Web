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
          className="w-full max-w-[98%] sm:max-w-[95%] max-h-[98vh] mx-auto flex flex-col justify-center items-center gap-2 sm:gap-4 backdrop-blur-md  p-6 overflow-hidden relative rounded-xl"
        >
          <Background isInView={isInView} />

          <h2 className="sr-only">About Us</h2>

          <NoiseText
            text={language === "en" ? "ABOUT US" : "SOBRE NOSOTROS"}
            addClass="tracking-wider font-bold text-center neon font-primary"
            fontSizeClass="text-fluidTitle"
            // customStyle={{fontSize: "clamp(0.9rem, max(5vw, 2vh), 2rem",}}
            variantProp={opacityAnimation}
          />

          <NoiseText
            text={
              language === "en" ? (
                <>
                  Inspired by the Japanese word{" "}
                  <span className="font-semibold italic">未来</span> (meaning
                  &quot;future&quot;), Mirai Web Lab is a web development agency
                  dedicated to building cutting-edge digital experiences. We
                  specialize in custom website development, responsive web
                  design, and high-performance web applications that push the
                  boundaries of creativity and technology.
                </>
              ) : (
                <>
                  Inspirados por la palabra japonesa{" "}
                  <span className="font-semibold italic">未来</span> (que
                  significa &quot;futuro&quot;), Mirai Web Lab es una agencia de
                  desarrollo web dedicada a crear experiencias digitales
                  innovadoras. Nos especializamos en desarrollo de sitios web de alto
                  rendimiento, llevando la creatividad y la tecnología al
                  siguiente nivel.
                </>
              )
            }
            addClass="font-secondary font-medium"
            customStyle={{
              textShadow: "0px 0px 10px var(--cuarto)",
              fontSize: "clamp(0.8rem, max(4vw, 2vh), 1.8rem)",
            }}
            // fontSizeClass="text-fluidBig"
            variantProp={opacityAnimation}
          />

          <NoiseText
            text={
              language === "en"
                ? "In an era of rapid innovation, standing out requires more than just good design—it demands bold, pixel-perfect digital solutions. Our expertise spans front-end development, UI/UX design, and digital branding, ensuring that every project is visually stunning, highly responsive, and optimized for growth."
                : "En una era de innovación constante, destacar requiere soluciones digitales audaces y precisas. Nuestra experiencia abarca desarrollo front-end, diseño UI/UX y branding digital, garantizando que cada proyecto sea visualmente impactante, responsivo y optimizado para el crecimiento."
            }
            addClass="font-secondary font-medium"
            customStyle={{
              textShadow: "0px 0px 10px var(--cuarto)",
              fontSize: "clamp(0.8rem, max(4vw, 2vh), 1.8rem)",
            }}
            // fontSizeClass="text-fluidBig"
            variantProp={opacityAnimation}
          />

          <NoiseText
            text={
              language === "en"
                ? "At Mirai Web Lab, we believe that your website is more than just a platform—it's the digital identity of your brand. Our futuristic, user-centered designs not only captivate audiences but also enhance user experience, improve search engine visibility, and drive business success."
                : "En Mirai Web Lab, creemos que tu sitio web es la identidad digital de tu marca. Nuestros diseños futuristas y centrados en el usuario no solo cautivan a tu audiencia, sino que también mejoran la experiencia de usuario, aumentan la visibilidad en los motores de búsqueda y potencian el éxito de tu negocio."
            }
            addClass="font-secondary font-medium"
            customStyle={{
              textShadow: "0px 0px 10px var(--cuarto)",
              fontSize: "clamp(0.8rem, max(4vw, 2vh), 1.8rem)",
            }}
            // fontSizeClass="text-fluidBig"
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
