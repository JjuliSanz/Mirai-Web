"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Parallax,
  Scrollbar,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const projects = [
  {
    imageSrc: "/imgs/gourmet/template-menu.png",
    title: "Restaurants",
    id: "1",
    page: "/templates/restaurant",
  },
  {
    imageSrc: "/imgs/dashboard/mustang-dashboard.png",
    title: "Dashboards",
    id: "2",
    page: "/templates/dashboard",
  },
  {
    imageSrc: "/imgs/portfolio/htmlPortfolio.png",
    title: "Portfolios",
    id: "3",
    page: "/templates/portfolio",
  },
  {
    imageSrc: "/imgs/ecommerce/ecommerce-home.png",
    title: "Ecommerces",
    id: "4",
    page: "/templates/ecommerce",
  },
];

const TemplatesSlider = () => {
  const pathname = usePathname();
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Set the active project based on the current pathname
  useEffect(() => {
    const matchedProject = projects.find(
      (project) => project.page === pathname
    );
    setActiveProject(matchedProject || projects[0]);

    // Sincroniza el Swiper con el slide correcto
    const slideIndex = projects.findIndex(
      (project) => project.page === pathname
    );
    if (swiperInstance && slideIndex !== -1) {
      swiperInstance.slideToLoop(slideIndex); // Usa slideToLoop para slides en loop
    }
  }, [pathname, swiperInstance]);

  // Detecta cambio de slide en Swiper
  const handleSlideChange = (swiper: any) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="w-full overflow-hidden py-2"
    >
      <Swiper
        slidesPerView={3}
        loop={true}
        grabCursor={true}
        speed={1000}
        centeredSlides={true}
        navigation={true}
        spaceBetween={0}
        onSwiper={setSwiperInstance} // Captura la instancia de Swiper
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
        className="w-full !max-w-[800px] !h-[50px] md:!h-[70px] !overflow-visible mobileNavigation mobileSlide templates-slides"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={project.id}
            className="rounded-xl bg-cover bg-start relative"
            style={{
              backgroundImage: `url(${project.imageSrc})`,
            }}
            data-swiper-parallax-opacity="0.5"
            data-swiper-parallax-scale="0.5"
            data-swiper-parallax-duration="400"
          >
            <Link
              href={project.page}
              className={`absolute inset-0 flex items-center justify-center p-4 font-bold font-secondary text-cuarto bg-primero/60 border-2 border-cuarto rounded-xl uppercase ${
                activeSlideIndex === index
                  ? "cursor-pointer"
                  : "pointer-events-none cursor-auto"
              }`}
              style={{fontSize: "clamp(0.8rem, max(4vw, 2.3vh), 1.8rem)",}}
            >
              {project.title}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default TemplatesSlider;
