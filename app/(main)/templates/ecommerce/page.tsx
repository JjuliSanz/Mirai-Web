"use client";
import Modal from "@/components/ui/Modal";
import {
  m,
  useInView,
  LazyMotion,
  domAnimation,
  AnimatePresence,
} from "framer-motion";
import { opacityAnimation, templatesContainer } from "@/variants";
import useLanguageStore from "@/store/languageStore";

const images = [
  {
    id: 1,
    src: "/imgs/ecommerce/ecommerce-home.png",
    alt: "Ecommerce Web Design 1",
  },
  {
    id: 2,
    src: "/imgs/ecommerce/ecommerce-product.png",
    alt: "Ecommerce Web Design 2",
  },
  {
    id: 3,
    src: "/imgs/ecommerce/ecommerce-product-tablet.png",
    alt: "Ecommerce Web Design 3",
  },
  {
    id: 4,
    src: "/imgs/ecommerce/ecommerce.png",
    alt: "Ecommerce Web Design 4",
  },
  {
    id: 5,
    src: "/imgs/ecommerce/ecommerce-tablet.png",
    alt: "Ecommerce Web Design 5",
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
            Ecommerce Web
          </m.h1>
          <m.ul className="list-disc list-inside flex flex-col gap-2 font-medium font-secondary text-sexto text-fluid">
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Responsive Design:"
                  : "Diseño Responsivo:"}
              </h2>{" "}
              {language === "en"
                ? "The page is optimized to adapt to any device, ensuring a smooth and consistent experience."
                : "La página está optimizada para adaptarse a cualquier dispositivo, garantizando una experiencia fluida y consistente."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Enhanced User Experience:"
                  : "Mejora de la Experiencia del Usuario:"}
              </h2>{" "}
              {language === "en"
                ? "Intuitive navigation, fast load times, and an attractive design to captivate your customers from the first moment."
                : "Navegación intuitiva, tiempos de carga rápidos y diseño atractivo para cautivar a tus clientes desde el primer momento."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Organized by Categories:"
                  : "Organizado por Categorías:"}
              </h2>{" "}
              {language === "en"
                ? "Simplify the shopping experience with products grouped into easy-to-navigate categories."
                : "Simplifica la experiencia de compra con productos organizados en categorías fáciles de navegar."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Individual Product Pages:"
                  : "Páginas de Producto Individuales:"}
              </h2>{" "}
              {language === "en"
                ? "Highlight each product with high-quality images, detailed descriptions, and pricing to help customers make informed decisions."
                : "Destaca cada producto con imágenes de alta calidad, descripciones detalladas y precios para ayudar a los clientes a tomar decisiones informadas."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "User-Friendly Shopping Cart:"
                  : "Carrito de Compras Amigable:"}
              </h2>{" "}
              {language === "en"
                ? "A simple interface for customers to review their selections, calculate totals, and proceed with their purchase."
                : "Una interfaz simple para que los clientes revisen sus selecciones, calculen totales y completen su compra."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Streamlined Checkout Process:"
                  : "Proceso de Pago Simplificado:"}
              </h2>{" "}
              {language === "en"
                ? "Secure and intuitive checkout designed to maximize conversions and minimize cart abandonment."
                : "Proceso de pago seguro e intuitivo diseñado para maximizar conversiones y minimizar el abandono del carrito."}
            </m.li>
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "Search Engine Optimization (SEO):"
                  : "Optimización para Motores de Búsqueda (SEO):"}
              </h2>{" "}
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
