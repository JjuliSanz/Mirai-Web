"use client";
import { m } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
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
            modules={[Navigation, Parallax]}
            className="w-full h-full swiperModal"
          >
            {images.map((image) => (
              <SwiperSlide
                key={image.id}
                className="w-full px-16 py-6 h-full overflow-auto !flex justify-center"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1000}
                  height={1000}
                  className="w-auto object-scale-down rounded"
                  data-swiper-parallax-opacity="0"
                  data-swiper-parallax-scale="0.6"
                  data-swiper-parallax-duration="800"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </m.div>
      )}
    </>
  );
};

export default Modal;
