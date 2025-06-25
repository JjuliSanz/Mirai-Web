"use client";
import Modal from "@/components/ui/Modal";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { opacityAnimation, templatesContainer } from "@/variants";
import useLanguageStore from "@/store/languageStore";

const images = [
  {
    id: 1,
    src: "/imgs/dashboard/mustang-dashboard.webp",
    alt: "Portfolio Web Design 1",
  },
  {
    id: 2,
    src: "/imgs/dashboard/savory-add.webp",
    alt: "Portfolio Web Design 2",
  },
  {
    id: 3,
    src: "/imgs/dashboard/savory-edit.webp",
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
          className="backdrop-blur-[5px] bg-primero/70 rounded px-4 py-2 w-full flex flex-col gap-2 items-center justify-center overflow-hidden z-10"
        >
          <m.h1
            variants={opacityAnimation}
            className="text-fluidTitle z-20 tracking-wider font-bold text-center neon font-primary"
          >
            Dashboard
          </m.h1>

          {/* DESCRIPTION */}
          <m.ul className="flex flex-col gap-2 font-medium font-secondary text-sexto text-fluid">
            {/* RESTAURANT DASHBOARD */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📊 Comprehensive Restaurant Dashboard:"
                  : "📊 Dashboard Integral del Restaurante:"}
              </h2>{" "}
              {language === "en"
                ? "An intuitive panel that allows you to create, edit, and manage projects with ease. Organize categories, track progress, and maintain full control over your restaurant page content."
                : "Un panel intuitivo que permite crear, editar y gestionar proyectos de manera fácil. Organiza categorías, realiza un seguimiento del progreso y mantén un control total sobre tu contenido del restaurant."}
            </m.li>
            {/* SECURITY */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🔒 Secure and Authorized Access:"
                  : "🔒 Acceso Seguro y Autorizado:"}
              </h2>{" "}
              {language === "en"
                ? "The dashboard includes security measures, ensuring that only authorized emails can access it, keeping your dashboard management safe and secure."
                : "El dashboard cuenta con medidas de seguridad, asegurando que solo los correos electrónicos autorizados puedan acceder, manteniendo segura la gestión de tu dashboard."}
            </m.li>
            {/* MENU PAGE */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📜 Exclusive Menu Page:"
                  : "📜 Página Exclusiva para el Menú:"}
              </h2>
              {language === "en"
                ? "Manage your restaurant's menu with a dedicated section for adding, editing, and organizing dishes effortlessly."
                : "Administra el menú de tu restaurante con una sección dedicada para agregar, editar y organizar platos fácilmente."}
            </m.li>
            {/* MENU CATEGORY */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🍽️ Category-Based Organization:"
                  : "🍽️ Organización por Categorías:"}
              </h2>
              <ul className="ml-2 flex flex-col gap-2 text-fluid font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- Easily group dishes into categories for better navigation"
                    : "- Agrupa los platos en categorías para una mejor navegación"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Easily group dishes into categories for better navigation"
                    : "- Mejora la experiencia del cliente con un diseño estructurado"}{" "}
                </li>
              </ul>
            </m.li>
            {/* PRODUCT IMAGES */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📷 High-quality dish images"
                  : "📷 Imágenes de alta calidad"}
              </h2>{" "}
            </m.li>
            {/* MENU DESCRIPTIONS */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📝 Detailed descriptions, including ingredients and prices."
                  : "📝 Descripciones detalladas, incluyendo ingredientes y precios."}
              </h2>{" "}
            </m.li>
            {/* RESPONSIVE DESIGN */}
            <m.li style={{ textShadow: "0px 0px 10px var(--cuarto)" }}>
              <h2 className="inline text-cuarto font-semibold text-fluidBig ">
                {language === "en"
                  ? "📱 Responsive Design:"
                  : "📱 Diseño Responsivo:"}
              </h2>{" "}
              {language === "en"
                ? "The page is optimized to adapt to any device, ensuring a smooth and consistent experience on mobile, tablet, and desktop."
                : "Tu sitio web se adapta perfectamente a cualquier dispositivo, garantizando una experiencia fluida y consistente en móviles, tablets y computadoras."}
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
