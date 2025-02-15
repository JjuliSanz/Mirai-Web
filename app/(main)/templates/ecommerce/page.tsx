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
            {/* PRODUCTS CATEGORY */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🛍️ Organized by Categories:"
                  : "🛍️ Organizado por Categorías:"}
              </h2>{" "}
              {language === "en"
                ? "Easily navigate products with a structured layout, simplifying the shopping experience and helping customers find what they need quickly."
                : "Navegación sencilla con productos estructurados en categorías, facilitando la búsqueda y mejorando la experiencia de compra."}
            </m.li>
            {/* PRODUCT PAGE */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "📦 Individual Product Pages:"
                  : "📦 Páginas de Producto Individuales:"}
              </h2>{" "}
              <ul className="ml-2 flex flex-col gap-2 text-fluid font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- High-quality images to showcase products in detail"
                    : "- Imágenes de alta calidad para destacar cada producto"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Clear and concise descriptions to inform buyers"
                    : "- Descripciones claras y detalladas para informar a los compradores"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Transparent pricing to ensure trust and easy decision-making"
                    : "- Precios transparentes para generar confianza y facilitar decisiones"}{" "}
                </li>
              </ul>
            </m.li>
            {/* SHOPPING CART */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "🛒 User-Friendly Shopping Cart:"
                  : "🛒 Carrito de Compras Amigable:"}
              </h2>{" "}
              <ul className="ml-2 flex flex-col gap-2 text-fluid font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- A seamless interface for reviewing selections"
                    : "- Interfaz intuitiva para revisar selecciones"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Automatic total calculation for a hassle-free experience"
                    : "- Cálculo automático del total para una experiencia sin complicaciones"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Smooth transition to checkout for easy purchasing"
                    : "- Transición fluida al proceso de pago"}{" "}
                </li>
              </ul>
            </m.li>
            {/* CHECKOUT */}
            <m.li
              variants={opacityAnimation}
              style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
            >
              <h2 className="inline text-cuarto font-semibold text-fluidBig">
                {language === "en"
                  ? "💳 Streamlined Checkout Process:"
                  : "💳 Proceso de Pago Simplificado:"}
              </h2>{" "}
              <ul className="ml-2 flex flex-col gap-2 text-fluid font-medium font-secondary text-sexto">
                <li>
                  {language === "en"
                    ? "- Secure and intuitive payment flow to increase conversions"
                    : "- Flujo de pago seguro e intuitivo para maximizar conversiones"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Optimized design to reduce cart abandonment"
                    : "- Diseño optimizado para reducir el abandono del carrito"}{" "}
                </li>
                <li>
                  {language === "en"
                    ? "- Multiple payment options for customer convenience"
                    : "- Opciones de pago múltiples para mayor comodidad del cliente"}{" "}
                </li>
              </ul>
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
                ? "Technical setup and structured content to boost your ecommerce's visibility on Google and other search engines."
                : "Configuración técnica y contenido estructurado para mejorar la visibilidad del ecommerce en Google y otros buscadores."}
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
