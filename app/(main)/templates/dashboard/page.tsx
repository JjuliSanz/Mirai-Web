"use client";
import Modal from "@/components/ui/Modal";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { opacityAnimation, templatesContainer } from "@/variants";
import useLanguageStore from "@/store/languageStore";

const images = [
  {
    id: 1,
    src: "/imgs/dashboard/mustang-dashboard.png",
    alt: "Portfolio Web Design 1",
  },
  {
    id: 2,
    src: "/imgs/dashboard/savory-add.png",
    alt: "Portfolio Web Design 2",
  },
  {
    id: 3,
    src: "/imgs/dashboard/savory-edit.png",
    alt: "Portfolio Web Design 3",
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
            Dashboard
          </m.h1>

          {/* DESCRIPTION */}
          <m.ul className="list-disc list-inside flex flex-col gap-2 font-medium font-secondary text-sexto text-fluid">
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

            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <span className="text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Exclusive Menu Page:"
                  : "Página Exclusiva para el Menú:"}
              </span>{" "}
              <ul className="ml-2 flex flex-col gap-2 font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- Menu organized by categories to make it easier to find dishes."
                    : "- Menú organizado por categorías para facilitar la búsqueda de platos."}
                </li>
                <li>
                  {language === "en"
                    ? "- High-quality images of the dishes to capture customers' attention."
                    : "- Imágenes de alta calidad de los platillos para captar la atención de los clientes."}
                </li>
                <li>
                  {language === "en"
                    ? "- Detailed description of each dish, including ingredients and prices."
                    : "- Descripción detallada de cada platillo, incluyendo ingredientes y precios."}
                </li>
              </ul>
            </m.li>

            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <span className="text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Comprehensive Portfolio Dashboard:"
                  : "Dashboard Integral del Portafolio:"}
              </span>{" "}
              {language === "en"
                ? "An intuitive panel that allows you to create, edit, and manage projects with ease. Organize categories, track progress, and maintain full control over your portfolio."
                : "Un panel intuitivo que permite crear, editar y gestionar proyectos de manera fácil. Organiza categorías, realiza un seguimiento del progreso y mantén un control total sobre tu portafolio."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <span className="text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Secure and Authorized Access:"
                  : "Acceso Seguro y Autorizado:"}
              </span>{" "}
              {language === "en"
                ? "The dashboard includes robust security measures, ensuring that only authorized emails can access it, keeping your portfolio management safe and secure."
                : "El dashboard cuenta con robustas medidas de seguridad, asegurando que solo los correos electrónicos autorizados puedan acceder, manteniendo segura la gestión de tu portafolio."}
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
