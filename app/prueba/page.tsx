"use client";

import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import NoiseText from "@/components/NoiseText";
import Background from "@/components/sections/Background";
import Button from "@/components/ui/Button";
import Mockups from "@/components/ui/Mockups";
import Image from "next/image";
import React from "react";
import { cont, opacityAnimation } from "@/variants";
import BackgroundPrueba from "./BackgroundPrueba";
import MockupsPrueba from "./MockupsPrueba";

const page = () => {
  const language = "en";
  return (
    <div className="overflow-y-scroll overflow-x-hidden relative w-full  h-screen  scroll-smooth snap-y snap-mandatory ">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          unoptimized
          src="/video-bg-4R.gif"
          width={500}
          height={500}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        // className="fixed inset-0 z-[1] bg-primero/80 pointer-events-none"
        className="fixed inset-0 z-[1] bg-cuarto/30 pointer-events-none"
        style={{ mixBlendMode: "overlay" }}
      />
      <LazyMotion features={domAnimation}>
        <m.section
          id="service"
          className="w-full max-h-screen relative flex p-4 overflow-hidden  z-10"
          style={{ scrollSnapAlign: "center" }}
        >
          <m.div
            initial="hidden"
            animate="visible"
            variants={cont}
            className="w-full max-w-[95%] max-h-[98vh] mx-auto flex flex-col  justify-center items-center gap-4 backdrop-blur-md p-4 overflow-hidden relative rounded-xl"
          >
            <BackgroundPrueba isInView={true} />
            <m.div className="w-full  flex flex-col gap-4 items-center justify-center ">
              <NoiseText
                text={
                  language === "en"
                    ? "Your Custom Website"
                    : "Tu Sitio Web Personalizado"
                }
                addClass="tracking-wider font-bold text-center neon font-primary"
                fontSizeClass="text-3xl"
                variantProp={opacityAnimation}
              />

              <m.ul className="  list-disc list-inside w-fit text-xl font-medium font-secondary text-quinto">
                <NoiseText
                  text={
                    <m.li style={{ textShadow: "0px 0px 10px var(--cuarto)" }}>
                      <span className="text-cuarto font-semibold text-2xl ">
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
                      <span className="text-cuarto font-semibold text-2xl ">
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
                      <span className="text-cuarto font-semibold text-2xl ">
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
                      <span className="text-cuarto font-semibold text-2xl ">
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
                    width="w-[160px] "
                    height="h-[40px] "
                  />
                }
                variantProp={opacityAnimation}
              />
            </m.div>

            <MockupsPrueba />
          </m.div>
        </m.section>
      </LazyMotion>
    </div>
  );
};

export default page;
