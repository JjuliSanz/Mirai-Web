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

const images = [
  {
    id: 1,
    src: "/imgs/club/club-1.webp",
    alt: "Club Web Design 1",
  },
  {
    id: 2,
    src: "/imgs/club/club-2.webp",
    alt: "Club Web Design 2",
  },
  {
    id: 3,
    src: "/imgs/club/club-3.webp",
    alt: "Club Web Design 3",
  },
  {
    id: 4,
    src: "/imgs/club/club-4.webp",
    alt: "Club Web Design 4",
  },
  {
    id: 5,
    src: "/imgs/club/club-5.webp",
    alt: "Club Web Design 5",
  },
  {
    id: 6,
    src: "/imgs/club/club-6.webp",
    alt: "Club Web Design 6",
  },
  {
    id: 7,
    src: "/imgs/club/club-7.webp",
    alt: "Club Web Design 7",
  },
  {
    id: 8,
    src: "/imgs/club/club-8.webp",
    alt: "Club Web Design 8",
  },
  {
    id: 9,
    src: "/imgs/club/club-9.webp",
    alt: "Club Web Design 9",
  },
  {
    id: 10,
    src: "/imgs/club/club-10.webp",
    alt: "Club Web Design 10",
  },
  {
    id: 11,
    src: "/imgs/club/club-11.webp",
    alt: "Club Web Design 11",
  },
  {
    id: 12,
    src: "/imgs/club/club-12.webp",
    alt: "Club Web Design 12",
  },
  {
    id: 13,
    src: "/imgs/club/club-13.webp",
    alt: "Club Web Design 13",
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
            Football Club Web
          </m.h1>

          {/* TEMPLATE DESCRIPTION */}
          <m.ul className="flex flex-col gap-2 font-medium font-secondary text-sexto text-fluid">
            {/* STADIUM SECTION */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🏟️ Section with stadium information:"
                  : "🏟️ Sección con información del estadio:"}
              </h2>{" "}
              {language === "en"
                ? "Discover Royal FC's home ground — a stadium that unites fans, showcases the club's history, and offers an unforgettable matchday atmosphere. Learn about its capacity, facilities, and the place where passion meets football."
                : "Descubre el estadio del Royal FC — un lugar que une a los hinchas, refleja la historia del club y ofrece una atmósfera inigualable en cada partido. Conoce su capacidad, instalaciones y el sitio donde la pasión se encuentra con el fútbol."}
            </m.li>
            {/* TEAM SECTIONS */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "👥 Players Section:"
                  : "👥 Sección de jugadores:"}
              </h2>{" "}
              {language === "en"
                ? "Meet the Royal FC squad — from rising talents to experienced leaders, each player contributes their skills and passion to the team's success."
                : "Conoce al plantel del Royal FC — desde jóvenes promesas hasta líderes experimentados, cada jugador aporta su talento y pasión al éxito del equipo."}
            </m.li>
            {/* SEASON KIT */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "👕 Season Kits:"
                  : "👕 Indumentaria de la temporada:"}
              </h2>{" "}
              {language === "en"
                ? "Discover the latest Royal FC kits — designed with style, comfort, and performance in mind, representing the team's identity on and off the pitch."
                : "Descubre la indumentaria más reciente del Royal FC — diseñada con estilo, comodidad y rendimiento, representando la identidad del equipo dentro y fuera del campo."}
            </m.li>
            {/* FIXTURE */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📊 Recent Results & Upcoming Matches:"
                  : "📊 Últimos Resultados y Próximos Partidos:"}
              </h2>
              {language === "en"
                ? "Stay up to date with Royal FC's latest match results and upcoming fixtures. Track scores, performance, and plan for upcoming games."
                : "Mantente al día con los últimos resultados del Royal FC y los próximos partidos. Consulta los goles, el rendimiento del equipo y planifica los encuentros futuros."}
            </m.li>
            {/* SPONSORS */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🤝 Featured Sponsors"
                  : "🤝 Patrocinadores Destacados"}
              </h2>
              {language === "en"
                ? "Discover the brands and partners that proudly support Royal FC, contributing to the team's success on and off the field."
                : "Conoce las marcas y socios que apoyan orgullosamente al Royal FC, contribuyendo al éxito del equipo dentro y fuera del campo."}
            </m.li>
            {/* CONTACT */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📱 Contact & Social Media"
                  : "📱 Contacto y Redes Sociales"}
              </h2>
              {language === "en"
                ? "All the ways to connect with Royal FC — reach out via phone, email, or follow us on social media to stay updated on team news and events."
                : "Todas las formas de conectarte con Royal FC — contáctanos por teléfono o correo, y síguenos en redes sociales para estar al día con las novedades y eventos del equipo."}
            </m.li>
            {/* ADMIN BUTTONS */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "✏️ Simple buttons to edit, delete, or add content in each section quickly and easily."
                  : "✏️ Botones simples para editar, eliminar o agregar contenido en cada sección de manera rápida y sencilla."}
              </h2>{" "}
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
                ? "Technical setup and structured content to boost your restaurant's visibility on Google and other search engines."
                : "Configuración técnica y contenido estructurado para mejorar la visibilidad del restaurante en Google y otros buscadores."}
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
