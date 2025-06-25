"use client";
import { m } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom, Parallax } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/zoom";

import { imageAnimation, templatesContainer } from "@/variants";
type Image = {
  id: number;
  src: string;
  alt: string;
};
const Modal = ({ images }: { images: Array<Image> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <m.div
        initial="hidden"
        animate="visible"
        variants={templatesContainer}
        className="w-full columns-[12rem] z-10 relative"
      >
        {images.map((image, index) => (
          <m.div
            key={image.id}
            variants={imageAnimation}
            onClick={() => handleImageClick(index)}
            className="block p-2 transition ease-in-out duration-150 hover:scale-[0.98] drop-shadow-[0_1px_3px_var(--quinto)] hover:filter-none cursor-pointer relative "
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
      {/* FULLSCREEN SWIPER */}
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <button
            className="absolute top-4 right-4 text-quinto text-4xl lg:text-6xl z-50"
            onClick={handleClose}
          >
            &times;
          </button>
          <Swiper
            initialSlide={activeIndex}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            speed={1000}
            spaceBetween={50}
            navigation={true}
            parallax={true}
            zoom={{
              maxRatio: 3,
              minRatio: 1,
              toggle: true,
              panOnMouseMove: true,
            }}
            modules={[Navigation, Parallax, Zoom]}
            className="w-full h-full swiperModal"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id} className="">
                <div className="swiper-zoom-container w-full px-12 sm:px-16 py-6 h-full !flex justify-center !relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className="rounded"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-scale="0.6"
                    data-swiper-parallax-duration="800"
                  />

                  {/* Círculo con borde (Imagen 2 -> Imagen 1 -> desaparece) */}
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 1, scale: 0 }} // Empieza como Imagen 2
                    animate={{
                      opacity: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      repeat: 1,
                      // repeat: Infinity,
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full border-quinto border-2"
                  ></motion.div>

                  {/* Círculo interior con fondo (aparece, crece, desaparece) */}
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: 0.9,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.8,
                      ease: "easeOut",
                      repeat: 1,
                      // repeat: Infinity,
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-quinto"
                  ></motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </m.div>
      )}
    </>
  );
};

export default Modal;
