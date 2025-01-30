"use client";
import React from "react";
import { useRef } from "react";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { cont, opacityAnimation } from "@/variants";
import Button from "../ui/Button";
import NoiseText from "../NoiseText";
import Mockups from "../ui/Mockups";
import Background from "./Background";
import useLanguageStore from "@/store/languageStore";

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { language } = useLanguageStore();
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id="service"
        className="w-full h-screen relative flex items-center justify-center overflow-hidden  z-10"
        style={{ scrollSnapAlign: "center" }}
      >
        <m.div
          initial="hidden"
          animate={isInView && "visible"}
          variants={cont}
          ref={ref}
          className="w-full max-w-[95%] max-h-[98vh] lg:max-h-[95vh] mx-auto flex flex-col lg:flex-row justify-center items-center gap-4 backdrop-blur-md p-4 overflow-hidden relative rounded-xl"
        >
          <Background isInView={isInView} />
          <m.div className="w-full lg:w-[50%] flex flex-col gap-4 items-center justify-center ">
            <NoiseText
              text={
                language === "en"
                  ? "Your Custom Website"
                  : "Tu Sitio Web Personalizado"
              }
              addClass="tracking-wider font-bold text-center neon font-primary"
              fontSizeClass="text-fluidTitle"
              variantProp={opacityAnimation}
            />

            <m.ul className="lg:ml-6 lg:flex lg:flex-col lg:gap-4 list-disc list-inside w-fit text-fluid font-medium font-secondary text-quinto">
              <NoiseText
                text={
                  <m.li style={{ textShadow: "0px 0px 10px var(--cuarto)" }}>
                    <span className="text-cuarto font-semibold text-fluidBig ">
                      {language === "en"
                        ? "Tailor-Made Designs:"
                        : "Diseños a Medida:"}
                    </span>{" "}
                    {language === "en"
                      ? "Unique, visually stunning layouts that bring your brand to life."
                      : "Diseños únicos y visualmente impactantes que dan vida a tu marca."}
                  </m.li>
                }
                variantProp={opacityAnimation}
              />

              <NoiseText
                text={
                  <m.li style={{ textShadow: "0px 0px 10px var(--cuarto)" }}>
                    <span className="text-cuarto font-semibold text-fluidBig ">
                      {language === "en"
                        ? "Responsive and Mobile-First Development:"
                        : "Desarrollo Responsivo y Prioridad en Móviles:"}
                    </span>{" "}
                    {language === "en"
                      ? "Seamless performance across all devices."
                      : "Rendimiento impecable en todos los dispositivos."}
                  </m.li>
                }
                variantProp={opacityAnimation}
              />

              <NoiseText
                text={
                  <m.li style={{ textShadow: "0px 0px 10px var(--cuarto)" }}>
                    <span className="text-cuarto font-semibold text-fluidBig ">
                      {language === "en"
                        ? "SEO-Optimized Pages:"
                        : "Páginas SEO Optimizadas:"}
                    </span>{" "}
                    {language === "en"
                      ? "Built with search engine best practices to help your audience find you."
                      : "Construidas con las mejores prácticas de SEO para ayudar a tu audiencia a encontrarte."}
                  </m.li>
                }
                variantProp={opacityAnimation}
              />

              <NoiseText
                text={
                  <m.li style={{ textShadow: "0px 0px 10px var(--cuarto)" }}>
                    <span className="text-cuarto font-semibold text-fluidBig ">
                      {language === "en"
                        ? "Fast and Secure Websites:"
                        : "Sitios Web Rápidos y Seguros:"}
                    </span>{" "}
                    {language === "en"
                      ? "Speedy load times and robust security to protect your data."
                      : "Tiempos de carga rápidos y seguridad robusta para proteger tus datos."}
                  </m.li>
                }
                variantProp={opacityAnimation}
              />
            </m.ul>

            <NoiseText
              text={
                <Button
                  title="PLUG IN"
                  href="/#contact"
                  width="w-[160px] md:w-[180px] 850:w-[200px]"
                  height="h-[40px] md:h-[40px]"
                />
              }
              variantProp={opacityAnimation}
            />
          </m.div>

          <Mockups />
        </m.div>
      </m.section>
    </LazyMotion>
  );
};

export default Service;
