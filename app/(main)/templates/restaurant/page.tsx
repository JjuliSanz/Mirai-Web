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

const imagesByCategory = {
  coffe: [
    {
      id: 1,
      src: "/imgs/coffe/savory-hero-mobile.png",
      alt: "Restaurant Web Design 1",
    },
    {
      id: 2,
      src: "/imgs/coffe/savory-servimos.png",
      alt: "Restaurant Web Design 2",
    },
    {
      id: 3,
      src: "/imgs/coffe/savory-menu.png",
      alt: "Restaurant Web Design 3",
    },
    {
      id: 4,
      src: "/imgs/coffe/savory-about.png",
      alt: "Restaurant Web Design 4",
    },
    {
      id: 5,
      src: "/imgs/coffe/savory-contact.png",
      alt: "Restaurant Web Design 5",
    },
    {
      id: 6,
      src: "/imgs/coffe/savory-gallery.png",
      alt: "Restaurant Web Design 6",
    },
    {
      id: 7,
      src: "/imgs/coffe/savory-contact-mobile.png",
      alt: "Restaurant Web Design 7",
    },
    {
      id: 8,
      src: "/imgs/coffe/savory-cart.png",
      alt: "Restaurant Web Design 8",
    },
  ],
  simple: [
    {
      id: 1,
      src: "/imgs/simple/centenario-home.png",
      alt: "Restaurant Web Design 1",
    },
    {
      id: 2,
      src: "/imgs/simple/centenario-about.png",
      alt: "Restaurant Web Design 2",
    },
    {
      id: 3,
      src: "/imgs/simple/centenario-menu-mobile.png",
      alt: "Restaurant Web Design 3",
    },
    {
      id: 4,
      src: "/imgs/simple/centenario-about-mobile.png",
      alt: "Restaurant Web Design 4",
    },
    {
      id: 5,
      src: "/imgs/simple/centenario-contact.png",
      alt: "Restaurant Web Design 5",
    },
    {
      id: 6,
      src: "/imgs/simple/centenario-checkout.png",
      alt: "Restaurant Web Design 6",
    },
    {
      id: 7,
      src: "/imgs/simple/centenario-about2-mobile.png",
      alt: "Restaurant Web Design 7",
    },
  ],
  modern: [
    {
      id: 1,
      src: "/imgs/modern/mustang-design.png",
      alt: "Restaurant Web Design 1",
    },
    {
      id: 2,
      src: "/imgs/modern/mustang-about.png",
      alt: "Restaurant Web Design 2",
    },
    {
      id: 3,
      src: "/imgs/modern/mustang-gallery.png",
      alt: "Restaurant Web Design 3",
    },
    {
      id: 4,
      src: "/imgs/modern/mustang-history.png",
      alt: "Restaurant Web Design 4",
    },
    {
      id: 5,
      src: "/imgs/modern/mustang-sections.png",
      alt: "Restaurant Web Design 5",
    },
    {
      id: 6,
      src: "/imgs/modern/mustang-menu-page.png",
      alt: "Restaurant Web Design 6",
    },
    {
      id: 7,
      src: "/imgs/modern/mustang-cart.png",
      alt: "Restaurant Web Design 7",
    },
    {
      id: 8,
      src: "/imgs/modern/mustang-sections-mobile.png",
      alt: "Restaurant Web Design 8",
    },
  ],
  gourmet: [
    {
      id: 1,
      src: "/imgs/gourmet/template-hero.png",
      alt: "Restaurant Web Design 1",
    },
    {
      id: 2,
      src: "/imgs/gourmet/template-menu.png",
      alt: "Restaurant Web Design 2",
    },
    {
      id: 3,
      src: "/imgs/gourmet/template-variety.png",
      alt: "Restaurant Web Design 3",
    },
    {
      id: 4,
      src: "/imgs/gourmet/template-gallery.png",
      alt: "Restaurant Web Design 4",
    },
    {
      id: 5,
      src: "/imgs/gourmet/template-booking.png",
      alt: "Restaurant Web Design 5",
    },
    {
      id: 6,
      src: "/imgs/gourmet/template-contact.png",
      alt: "Restaurant Web Design 6",
    },
  ],
};

const Page = () => {
  const { language } = useLanguageStore();
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof imagesByCategory>("coffe");

  const handleCategoryChange = (category: keyof typeof imagesByCategory) => {
    setSelectedCategory(category);
  };

  const images = imagesByCategory[selectedCategory];
  return (
    <LazyMotion features={domAnimation}>
      <m.section className="relative w-full max-w-[94%] ml-[1%] py-4 lg:py-6 overflow-hidden flex flex-col lg:flex-row gap-6 items-center justify-center lg:items-start">
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
            Restaurant Web
          </m.h1>

          {/* VARIANTS */}
          <m.div
            variants={opacityAnimation}
            className="flex flex-wrap items-center justify-center gap-2 500:gap-4"
          >
            {Object.keys(imagesByCategory).map((category) => (
              <m.button
                key={category}
                onClick={() =>
                  handleCategoryChange(
                    category as keyof typeof imagesByCategory
                  )
                }
                className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-secondary font-bold uppercase text-quinto rounded-lg group bg-gradient-to-b from-segundo to-sexto hover:text-segundo hover:scale-[.96] transition-all ease-in-out duration-300 ${
                  selectedCategory === category ? "text-segundo" : ""
                }`}
              >
                <span
                  className={`relative px-1 450:px-2 500:px-5 py-1 500:py-2.5 bg-primero rounded-md group-hover:bg-opacity-0 ${
                    selectedCategory === category ? "bg-opacity-0" : ""
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </m.button>
            ))}
          </m.div>
          {/* DESCRIPTION */}
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
                  ? "Comprehensive Restaurant Information:"
                  : "Información Completa del Restaurante:"}
              </span>{" "}
              {language === "en"
                ? "Includes dedicated sections to detail location, business hours, contact information, and links to social media."
                : "Incluye secciones dedicadas para detallar ubicación, horarios de atención, datos de contacto y enlaces a redes sociales."}
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
                  ? "Optional Shopping Cart:"
                  : "Carrito de Compras Opcional:"}
              </span>{" "}
              <ul className="ml-2 flex flex-col gap-2 font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- Functionality to calculate the total per product and the overall total."
                    : "- Funcionalidad para calcular el total por producto y el total general."}
                </li>
                <li>
                  {language === "en"
                    ? "- Option to send the order directly to the restaurant for customer convenience."
                    : "- Opción de enviar el pedido directamente al restaurante para mayor comodidad del cliente."}
                </li>
              </ul>
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
        <Modal key={selectedCategory} images={images} />
      </m.section>
    </LazyMotion>
  );
};

export default Page;
