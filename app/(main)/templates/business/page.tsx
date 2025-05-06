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
    src: "/imgs/business/business-hero.webp",
    alt: "Business Web Design 1",
  },
  {
    id: 2,
    src: "/imgs/business/business-2.webp",
    alt: "Business Web Design 2",
  },
  {
    id: 3,
    src: "/imgs/business/business-3.webp",
    alt: "Business Web Design 3",
  },
  {
    id: 4,
    src: "/imgs/business/business-4.webp",
    alt: "Business Web Design 4",
  },
  {
    id: 5,
    src: "/imgs/business/business-5.webp",
    alt: "Business Web Design 5",
  },
  {
    id: 6,
    src: "/imgs/business/business-6.webp",
    alt: "Business Web Design 6",
  },
  {
    id: 7,
    src: "/imgs/business/business-7.webp",
    alt: "Business Web Design 7",
  },
  {
    id: 8,
    src: "/imgs/business/business-8.webp",
    alt: "Business Web Design 8",
  },
  {
    id: 9,
    src: "/imgs/business/business-9.webp",
    alt: "Business Web Design 9",
  },
  {
    id: 10,
    src: "/imgs/business/business-10.webp",
    alt: "Business Web Design 10",
  },
];

const Page = () => {
  const { language } = useLanguageStore();

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
            Business Web
          </m.h1>

          {/* TEMPLATE DESCRIPTION */}
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
                ? "A unique and adaptable design that reflects your business's identity — whether you're running a beauty salon, hair studio, dental clinic, wellness center, or any other service-based business. Showcase your values, services, and specialties with a professional, elegant layout that builds trust and reinforces your brand presence."
                : "Un diseño único y adaptable que refleja la identidad de tu negocio — ya sea que tengas un salón de estética, una peluquería, un consultorio dental, un centro de bienestar, o cualquier otro emprendimiento de servicios. Mostrá tus valores, servicios y especialidades con un estilo profesional y elegante que genera confianza y refuerza tu presencia de marca."}
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
                  ? "📍 Comprehensive Business Information:"
                  : "📍 Información Completa sobre tu Negocio"}
              </h2>{" "}
              <ul className="ml-2 flex flex-col gap-2 text-fluid font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- Interactive location map"
                    : "- Mapa interactivo de ubicación"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Up-to-date business hours"
                    : "- Horarios de atención actualizado"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Direct contact options and social media links"
                    : "- Contacto directo y enlaces a redes sociales"}{" "}
                </li>
              </ul>
            </m.li>
            {/* MENU PAGE */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📜 Exclusive Product Catalog Page."
                  : "📜 Página Exclusiva para el Catálogo."}
              </h2>{" "}
            </m.li>
            {/* MENU CATEGORY */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🍽️ Category-based product organization for easy item discovery."
                  : "🍽️ Catálogo organizado por categorías para facilitar la búsqueda de productos."}
              </h2>{" "}
            </m.li>
            {/* PRODUCT IMAGES */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📷 High-quality product images to attract customers."
                  : "📷 Imágenes de alta calidad para atraer la atención de los clientes."}
              </h2>{" "}
            </m.li>
            {/* MENU DESCRIPTIONS */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📝 Detailed product descriptions, including key features and prices."
                  : "📝 Descripciones detalladas, incluyendo características clave y precios."}
              </h2>{" "}
            </m.li>
            {/* CARRITO */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🛒 Optional Shopping Cart:"
                  : "🛒 Carrito de Compras Opcional:"}
              </h2>{" "}
              <ul className="ml-2 flex flex-col gap-2 text-fluid font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- Automatically calculates product totals and final costs"
                    : "- Cálculo automático del total por producto y del costo final"}
                </li>
                <li>
                  {language === "en"
                    ? "- Option to send the order directly to the business for customer convenience"
                    : "- Opción de enviar pedidos directamente al negocio para mayor comodidad"}
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
