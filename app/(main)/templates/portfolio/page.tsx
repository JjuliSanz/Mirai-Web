"use client";
import Modal from "@/components/ui/Modal";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { opacityAnimation, templatesContainer } from "@/variants";
import useLanguageStore from "@/store/languageStore";

const images = [
  {
    id: 1,
    src: "/imgs/portfolio/portfolio-hero.png",
    alt: "Portfolio Web Design 1",
  },
  {
    id: 2,
    src: "/imgs/portfolio/portfolio-about.png",
    alt: "Portfolio Web Design 2",
  },
  {
    id: 3,
    src: "/imgs/portfolio/html-portfolio-about.png",
    alt: "Portfolio Web Design 3",
  },
  {
    id: 4,
    src: "/imgs/portfolio/portfolio-projects.png",
    alt: "Portfolio Web Design 4",
  },
  {
    id: 5,
    src: "/imgs/portfolio/portfolio-contact.png",
    alt: "Portfolio Web Design 5",
  },
  {
    id: 6,
    src: "/imgs/portfolio/htmlPortfolio.png",
    alt: "Portfolio Web Design 6",
  },
  {
    id: 7,
    src: "/imgs/portfolio/portfolio-education.png",
    alt: "Portfolio Web Design 7",
  },
  {
    id: 8,
    src: "/imgs/portfolio/portfolio-project.png",
    alt: "Portfolio Web Design 8",
  },
  {
    id: 9,
    src: "/imgs/portfolio/htmlPortfolio-services.png",
    alt: "Portfolio Web Design 9",
  },
];

const Page = () => {
  const { language } = useLanguageStore();
  return (
    <LazyMotion features={domAnimation}>
      <m.section className="relative w-full max-w-[95%] mx-auto py-4 lg:py-6 overflow-hidden flex flex-col lg:flex-row gap-6 items-center justify-center lg:items-start">
        {/* CONTENT */}
        <m.div
          initial="hidden"
          animate="visible"
          variants={templatesContainer}
          className="backdrop-blur-[5px] bg-primero/70 rounded px-4 w-full flex flex-col gap-2 items-center justify-center overflow-hidden z-10"
        >
          <m.h1
            variants={opacityAnimation}
            className="text-fluidTitle z-20 tracking-wider font-bold text-center neon font-primary"
          >
            Portfolio Web
          </m.h1>
          <m.ul className="list-disc list-inside flex flex-col gap-2 font-medium font-secondary text-sexto text-fluid">
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <span className="text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Responsive Design:"
                  : "Diseño Responsivo:"}
              </span>{" "}
              {language === "en"
                ? "The page is optimized to adapt to any device, ensuring a smooth and consistent experience."
                : "La página está optimizada para adaptarse a cualquier dispositivo, garantizando una experiencia fluida y consistente."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <span className="text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Customizable Landing Page:"
                  : "Landing Page Personalizable:"}
              </span>{" "}
              {language === "en"
                ? "A unique and adaptable design that reflects your business identity, highlighting the restaurant's values and services with a sleek and modern style that reinforces a professional image and builds customer trust."
                : "Diseño único y adaptable que refleja la identidad de tu negocio, destacando los valores y servicios del restaurante, con un estilo elegante y moderno que refuerza la imagen profesional y transmite confianza a los clientes."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <span className="text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Enhanced User Experience:"
                  : "Mejora de la Experiencia del Usuario:"}
              </span>{" "}
              {language === "en"
                ? "Intuitive navigation, fast load times, and an attractive design to captivate your customers from the first moment."
                : "Navegación intuitiva, tiempos de carga rápidos y diseño atractivo para cautivar a tus clientes desde el primer momento."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <span className="text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Portfolio Overview:"
                  : "Resumen del Portafolio:"}
              </span>{" "}
              {language === "en"
                ? "Showcases sections highlighting skills, experience, projects, and links to social media profiles."
                : "Incluye secciones destacadas que muestran habilidades, experiencia, proyectos y enlaces a perfiles de redes sociales."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <span className="text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Search Engine Optimization (SEO):"
                  : "Optimización para Motores de Búsqueda (SEO):"}
              </span>{" "}
              {language === "en"
                ? "Technical setup and structured content to improve the restaurant's visibility on Google and other search engines."
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
