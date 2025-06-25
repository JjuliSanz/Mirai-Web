"use client";
import Modal from "@/components/ui/Modal";
import {
  m,
  useInView,
  LazyMotion,
  domAnimation,
  AnimatePresence,
} from "framer-motion";
import {
  gradientAnimation,
  imageAnimation,
  opacityAnimation,
  templatesContainer,
} from "@/variants";
import { useState } from "react";
import NoiseText from "@/components/NoiseText";
import useLanguageStore from "@/store/languageStore";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "/imgs/linkinbio/linkbio-crema.webp",
    alt: "Modern One-Page Website Design 1",
  },
  {
    id: 2,
    src: "/imgs/linkinbio/linkbio-crema-mobile.webp",
    alt: "Modern One-Page Website Design 1 Mobile",
  },
  {
    id: 3,
    src: "/imgs/linkinbio/linkbio-tano.webp",
    alt: "Modern One-Page Website Design 2",
  },
  {
    id: 4,
    src: "/imgs/linkinbio/linkbio-tano-mobile.webp",
    alt: "Modern One-Page Website Design 2 Mobile",
  },
  {
    id: 5,
    src: "/imgs/linkinbio/linkbio-tano-reservas.webp",
    alt: "Modern One-Page Website Design 2",
  },
  {
    id: 6,
    src: "/imgs/linkinbio/linkbio-segundo.webp",
    alt: "Modern One-Page Website Design 3",
  },
  {
    id: 7,
    src: "/imgs/linkinbio/linkbio-segundo-mobile.webp",
    alt: "Modern One-Page Website Design 3 Mobile",
  },
];
const LiveDemos = [
  {
    title: "Demo 1",
    url: "https://link-bio-template2.vercel.app/",
  },
  {
    title: "Demo 2",
    url: "https://link-bio-template3.vercel.app/",
  },
  {
    title: "Demo 3",
    url: "https://link-bio-template1.vercel.app/",
  },
];

const Page = () => {
  const { language } = useLanguageStore();

  return (
    <LazyMotion features={domAnimation}>
      <m.section className="relative w-full max-w-[94%] mx-auto py-4 lg:py-6 overflow-hidden flex flex-col lg:flex-row gap-6 items-center justify-center lg:items-start">
        {/* CONTENT */}
        <m.div
          initial="hidden"
          animate="visible"
          variants={templatesContainer}
          className="backdrop-blur-[5px] bg-primero/70 rounded px-4 py-2 w-full flex flex-col gap-2 items-center justify-center overflow-hidden z-10"
        >
          <m.h1
            variants={opacityAnimation}
            className="text-fluidTitle z-20 tracking-wider font-bold text-center neon font-primary"
          >
            Modern One-Page Website
          </m.h1>

          {/* VARIANTS */}
          <m.div
            variants={opacityAnimation}
            className="flex flex-wrap items-center justify-center gap-2 500:gap-4"
          >
            {LiveDemos.map((demo) => (
              <m.button
                key={demo.title}
                className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-secondary font-bold uppercase text-quinto rounded-lg group bg-gradient-to-b from-segundo to-sexto hover:text-segundo hover:scale-[.96] transition-all ease-in-out duration-300 `}
              >
                <Link
                  href={demo.url}
                  target="_blank"
                  className={`relative px-1 450:px-2 500:px-5 py-1 500:py-2.5 bg-primero rounded-md group-hover:bg-opacity-0 `}
                >
                  {demo.title}
                </Link>
              </m.button>
            ))}
          </m.div>
          {/* TEMPLATE DESCRIPTION */}
          <m.ul className="flex flex-col gap-2 font-medium font-secondary text-sexto text-fluid">
            {/* CUSTOM LANDING PAGE */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🎨 Customizable One-Page Design:"
                  : "🎨 Diseño One Page Personalizable:"}
              </h2>{" "}
              {language === "en"
                ? "A unique and adaptable layout that brings together everything your audience needs — links, services, products, contact info, and more — in one sleek, scrollable page."
                : "Un diseño único y adaptable que reúne todo lo que tu audiencia necesita: enlaces, servicios, productos, información de contacto y más, en una sola página elegante y desplazable."}
            </m.li>
            {/* RESPONSIVE DESIGN */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📱 Responsive Design:"
                  : "📱 Diseño Responsivo:"}
              </h2>{" "}
              {language === "en"
                ? "The page is optimized to adapt to any device, ensuring a smooth and consistent experience on mobile, tablet, and desktop."
                : "Tu sitio web se adapta perfectamente a cualquier dispositivo, garantizando una experiencia fluida y consistente en móviles, tablets y computadoras."}
            </m.li>

            {/* INFORMATION */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📌 All Your Info in One Place:"
                  : "📌 Toda tu Información en un Solo Lugar:"}
              </h2>{" "}
              <ul className="ml-2 flex flex-col gap-2 text-fluid font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- Social media and contact links"
                    : "- Enlaces a redes sociales y contacto"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Business description or bio"
                    : "- Descripción del negocio o biografía"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Service or product highlights"
                    : "- Servicios o productos destacados"}{" "}
                </li>
              </ul>
            </m.li>

            {/* SEO */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🔍 Search Engine Optimization (SEO):"
                  : "🔍 Optimización para Motores de Búsqueda (SEO):"}
              </h2>{" "}
              {language === "en"
                ? "Clean structure and proper metadata setup to increase your visibility on search engines."
                : "Estructura limpia y configuración de metadatos para mejorar tu visibilidad en los motores de búsqueda."}
            </m.li>
          </m.ul>
        </m.div>
        {/* IMAGES */}
        <Modal images={images} />
      </m.section>
    </LazyMotion>
  );
};

export default Page;
