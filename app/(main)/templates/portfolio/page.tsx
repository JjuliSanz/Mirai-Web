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
          <m.ul className="flex flex-col gap-2 font-medium font-secondary text-sexto text-fluid">
            {/* CUSTOM LANDING PAGE */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🎨 Customizable Landing Page:"
                  : "🎨 Landing Page Personalizable:"}
              </h2>{" "}
              {language === "en"
                ? "A unique and adaptable design that reflects your professional identity. Highlight your expertise and services with a sleek and modern style that enhances credibility and engages potential clients."
                : "Un diseño único y adaptable que refleja tu identidad profesional. Destaca tu experiencia y servicios con un estilo moderno y elegante que refuerza tu credibilidad y atrae a clientes potenciales."}
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
            {/* OPTIMIZED EXPERIENCE */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "⚡ Optimized User Experience:"
                  : "⚡ Experiencia de Usuario Optimizada:"}
              </h2>{" "}
              <ul className="ml-2 flex flex-col gap-2 text-fluid font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- Intuitive navigation"
                    : "- Navegación intuitiva"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Fast loading times"
                    : "- Tiempos de carga rápidos"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Engaging design to captivate customers from the first visit"
                    : "- Diseño atractivo para cautivar a tus clientes desde el primer momento"}{" "}
                </li>
              </ul>
            </m.li>
            {/* INFORMATION */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📂 Portfolio Overview:"
                  : "📂 Resumen del Portafolio:"}
              </h2>{" "}
              <ul className="ml-2 flex flex-col gap-2 text-fluid font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- Dedicated sections to showcase your skills, experience, and past projects"
                    : "- Secciones dedicadas para mostrar tus habilidades, experiencia y proyectos anteriores"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Well-structured layout for easy navigation and readability"
                    : "- Diseño estructurado para una navegación fluida y clara"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Integrated links to social media profiles to expand your online presence"
                    : "- Enlaces integrados a perfiles de redes sociales para ampliar tu alcance digital"}{" "}
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
                ? "Technical enhancements and structured content to improve your online visibility, making it easier for clients and recruiters to find you."
                : ""}
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
