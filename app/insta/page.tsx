"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { m, useAnimate, LazyMotion, domAnimation } from "framer-motion";

const images = [
  {
    id: 1,
    src: "/imgs/ecommerce/ecommerce-home.webp",
    alt: "Portfolio Web Design 1",
  },
  {
    id: 2,
    src: "/imgs/ecommerce/ecommerce-product.webp",
    alt: "Portfolio Web Design 2",
  },
  {
    id: 3,
    src: "/imgs/ecommerce/ecommerce-product-tablet.webp",
    alt: "Portfolio Web Design 3",
  },
  {
    id: 4,
    src: "/imgs/ecommerce/ecommerce.webp",
    alt: "Portfolio Web Design 4",
  },
  {
    id: 5,
    src: "/imgs/ecommerce/ecommerce-tablet.webp",
    alt: "Portfolio Web Design 5",
  },
  // {
  //   id: 6,
  //   src: "/imgs/portfolio/portfolio-contact.webp",
  //   alt: "Portfolio Web Design 6",
  // },
  // {
  //   id: 7,
  //   src: "/imgs/portfolio/htmlPortfolio.webp",
  //   alt: "Portfolio Web Design 7",
  // },
  // {
  //   id: 9,
  //   src: "/imgs/portfolio/portfolio-education.webp",
  //   alt: "Portfolio Web Design 9",
  // },
  // {
  //   id: 8,
  //   src: "/imgs/portfolio/portfolio-project.webp",
  //   alt: "Portfolio Web Design 8",
  // },
];

const HeroLogo = () => {
  return (
    <m.h1 className="self-center flex flex-col items-center justify-center gap-[40px] mira-1">
      <span
        className="font-logo text-cuarto leading-none inline-block font-bold z-10 tracking-[10px] glitch layers"
        data-text="未"
        style={{
          fontSize: "300px",
          filter: "drop-shadow(0 1px 3px)",
        }}
      >
        未
      </span>
      <span
        className="font-logo text-cuarto leading-none inline-block font-bold z-10 tracking-[10px] glitch layers"
        data-text="来"
        style={{
          fontSize: "300px",
          filter: "drop-shadow(0 1px 3px)",
        }}
      >
        来
      </span>
    </m.h1>
  );
};

const TitleLetter = ({
  letter,
  data_text,
}: {
  letter: string;
  data_text: string;
}) => {
  return (
    <div
      className="font-logo text-cuarto leading-none inline-block font-bold z-10 tracking-[10px] glitch layers-text"
      data-text={data_text}
      style={{
        fontSize: "300px",
        filter: "drop-shadow(0 1px 3px)",
      }}
    >
      {letter}
    </div>
  );
};

const HeroTitle = () => {
  return (
    <m.h1 className="flex flex-col items-center justify-center gap-[10px] mirai-2">
      <TitleLetter data_text="M" letter="M" />
      <TitleLetter data_text="I" letter="I" />
      <TitleLetter data_text="R" letter="R" />
      <TitleLetter data_text="A" letter="A" />
      <TitleLetter data_text="I" letter="I" />
    </m.h1>
  );
};

const Letter = ({
  letter,
  data_text,
}: {
  letter: string;
  data_text: string;
}) => {
  return (
    <span
      className="font-logo text-cuarto leading-none inline-block font-bold z-10 tracking-[10px] glitch layers-text"
      data-text={data_text}
      style={{
        fontSize: "100px",
        filter: "drop-shadow(0 1px 3px)",
      }}
    >
      {letter}
    </span>
  );
};

const HeroPhrase = () => {
  return (
    <m.h1 className="self-center flex flex-col items-center justify-center gap-[80px] mirai-3">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Letter letter="W" data_text="W" />
        <Letter letter="E" data_text="E" />
        <Letter letter="B" data_text="B" />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <Letter letter="L" data_text="L" />
        <Letter letter="A" data_text="A" />
        <Letter letter="B" data_text="B" />
      </div>
    </m.h1>
  );
};

const Insta = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = async () => {
      // Aparecer el h1
      await animate(".title", { opacity: 1 }, { duration: 1.5 });

      // Desaparecer el h1
      await animate(".title", { opacity: 0 }, { duration: 1 });

      // Aparecer elementos de la lista uno por uno
      for (let i = 0; i < 9; i++) {
        await animate(
          `.list-item-${i}`,
          { opacity: 1, y: 0 },
          { duration: 0.3 }
        );
      }

      // Esperar unos segundos
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Desaparecer elementos de la lista uno por uno
      for (let i = 0; i < 9; i++) {
        await animate(
          `.list-item-${i}`,
          { opacity: 0, y: 20 },
          { duration: 0.3 }
        );
      }

      // Aparecer imágenes una por una
      for (let i = 0; i < images.length; i++) {
        await animate(`.image-${i}`, { opacity: 1 }, { duration: 0.3 });
      }

      // Esperar unos segundos
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Desaparecer imágenes una por una
      for (let i = 0; i < images.length; i++) {
        await animate(`.image-${i}`, { opacity: 0 }, { duration: 0.3 });
      }

      // Aparecer el logo de la agencia
      await animate(".mirai-container", { opacity: 1 }, { duration: 1 });
    };

    sequence();
  }, [animate]);

  return (
    <LazyMotion features={domAnimation}>
      <div ref={scope} className="relative w-full h-screen overflow-hidden ">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/video-static.mp4" type="video/mp4" />
          </video>
        </div>

        <m.h1
          initial={{ opacity: 0 }}
          className="title text-8xl z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 tracking-wider font-bold text-center neon font-primary"
        >
          YOUR ECOMMERCE WEBSITE
        </m.h1>

        {/* TEMPLATE DESCRIPTION */}
        <m.ul className="absolute z-20 w-full max-w-[90%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center gap-[40px]">
          {/* RESPONSIVE DESIGN */}
          <m.li
            initial={{ opacity: 0, y: 20 }}
            className="list-item-0"
            style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
          >
            <h2 className="inline text-cuarto font-semibold text-[80px] leading-none">
              📱 Responsive Design
            </h2>{" "}
          </m.li>
          {/* PROJECTS */}
          <m.li
            initial={{ opacity: 0, y: 20 }}
            className="list-item-1"
            style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
          >
            <h2 className="inline text-cuarto font-semibold text-[80px] leading-none">
              🛍️ Organized by Categories
            </h2>
          </m.li>
          {/* INFORMATION */}
          <m.li
            initial={{ opacity: 0, y: 20 }}
            className="list-item-2"
            style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
          >
            <h2 className="inline text-cuarto font-semibold text-[80px] leading-none">
              📦 Individual Product Pages
            </h2>{" "}
          </m.li>
          <m.li
            initial={{ opacity: 0, y: 20 }}
            className="list-item-3"
            style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
          >
            <h2 className="inline text-cuarto font-semibold text-[80px] leading-none">
              📷 High-quality images to showcase products in detail
            </h2>{" "}
          </m.li>

          {/* WORK EXPERIENCE */}
          <m.li
            initial={{ opacity: 0, y: 20 }}
            className="list-item-4"
            style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
          >
            <h2 className="inline text-cuarto font-semibold text-[80px] leading-none">
              🛒 User-Friendly Shopping Cart
            </h2>
          </m.li>
          {/* SKILLS */}
          <m.li
            initial={{ opacity: 0, y: 20 }}
            className="list-item-5"
            style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
          >
            <h2 className="inline text-cuarto font-semibold text-[80px] leading-none">
              💳 Streamlined Checkout Process
            </h2>
          </m.li>
          {/* CONTACT */}
          <m.li
            initial={{ opacity: 0, y: 20 }}
            className="list-item-6"
            style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
          >
            <h2 className="inline text-cuarto font-semibold text-[80px] leading-none">
              📬 Contact & Social Media
            </h2>
          </m.li>
          {/* RESUME */}
          <m.li
            initial={{ opacity: 0, y: 20 }}
            className="list-item-7"
            style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
          >
            <h2 className="inline text-cuarto font-semibold text-[80px] leading-none">
              ⚡ Optimized User Experience
            </h2>
          </m.li>
          {/* SEO */}
          <m.li
            initial={{ opacity: 0, y: 20 }}
            className="list-item-8"
            style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
          >
            <h2 className="inline text-cuarto font-semibold text-[80px] leading-none">
              🔍 Search Engine Optimization (SEO)
            </h2>
          </m.li>
        </m.ul>

        {/* IMAGES */}
        <m.div className="absolute z-20 w-full max-w-[80%] max-h-screen top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 columns-[300px] gap-[60px]">
          {images.map((image, index) => (
            <m.div
              key={image.id}
              initial={{ opacity: 0 }}
              className={`block p-2 drop-shadow-[0_1px_3px_var(--quinto)] relative image-${index}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="block max-w-full object-cover object-center rounded border-cuarto border"
              />
              <div className="glitch__layers">
                <div
                  className="glitch__layer"
                  style={{
                    backgroundImage: `url(${image.src})`,
                  }}
                ></div>
                <div
                  className="glitch__layer"
                  style={{
                    backgroundImage: `url(${image.src})`,
                  }}
                ></div>
                <div
                  className="glitch__layer"
                  style={{
                    backgroundImage: `url(${image.src})`,
                  }}
                ></div>
              </div>
            </m.div>
          ))}
        </m.div>

        {/* MIRAI */}
        <m.div
          initial={{ opacity: 0 }}
          className="mirai-container z-20 w-full max-w-[90%] h-screen absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-[80px]"
        >
          <HeroLogo />

          <HeroTitle />

          <HeroPhrase />
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default Insta;
