"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
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

import { m, useInView, LazyMotion, domAnimation } from "framer-motion";

import { opacityAnimation } from "@/variants";
import Button from "../ui/Button";
import ImageFilter from "../ui/ImageFilter";

const opacityContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      staggerChildren: 0.3,
    },
  },
};

const imageVariant = {
  hidden: { clipPath: "inset(0 100% 0 0%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const Templates = () => {
  const projects = [
    {
      imageSrc: "/imgs/gourmet/template-menu.webp",
      title: "Restaurants",
      id: "1",
      page: "/templates/restaurant",
    },
    {
      imageSrc: "/imgs/dashboard/mustang-dashboard.webp",
      title: "Dashboards",
      id: "2",
      page: "/templates/dashboard",
    },
    {
      imageSrc: "/imgs/portfolio/portfolio-hero.webp",
      title: "Portfolios",
      id: "3",
      page: "/templates/portfolio",
    },
    {
      imageSrc: "/imgs/ecommerce/ecommerce-home.webp",
      title: "Ecommerces",
      id: "4",
      page: "/templates/ecommerce",
    },
    {
      imageSrc: "/imgs/business/business-hero.webp",
      title: "Business",
      id: "5",
      page: "/templates/business",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.realIndex; // Obtiene el índice del slide activo
    setActiveProject(projects[activeIndex]);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        className="h-dvh w-full relative flex items-center justify-center z-10"
        // style={{ scrollSnapAlign: "center" }}
        id="templates"
      >
        <m.div
          initial="hidden"
          animate={isInView && "visible"}
          variants={opacityContainer}
          ref={ref}
          className="w-full max-w-[95%] !h-full mx-auto flex flex-col lg:flex-row justify-between items-center relative rounded-xl"
        >
          <m.div className="z-50 w-full lg:w-[50%] lg:h-full flex flex-col gap-4 lg:gap-0 items-center justify-center lg:justify-between">
            <m.h2
              variants={opacityAnimation}
              className="text-fluidTitle tracking-wider font-bold text-center neon font-primary"
            >
              TEMPLATES
            </m.h2>
            {/* MOBILE SWIPER */}
            <Swiper
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              speed={1000}
              centeredSlides={true}
              navigation={true}
              spaceBetween={0}
              modules={[Navigation]}
              onSlideChange={handleSlideChange}
              className="lg:!hidden w-full !max-w-[450px] !px-12 400:!px-16  !h-[100px] 500:!h-[150px] !overflow-visible mobileNavigation mobileSlide"
            >
              {projects.map((project) => (
                <SwiperSlide
                  key={project.id}
                  className="rounded-xl bg-cover bg-start relative"
                  style={{
                    backgroundImage: `url(${project.imageSrc})`,
                    boxShadow: "0 1px 5px 1px var(--quinto)",
                    textShadow: "0px 0px 5px var(--cuarto)",
                  }}
                  data-swiper-parallax-opacity="0.5"
                  data-swiper-parallax-scale="0.5"
                  data-swiper-parallax-duration="400"
                >
                  <span className="absolute inset-0 flex items-center justify-center p-4 text-fluidTitle font-bold font-secondary text-cuarto bg-primero/80 border-2 border-cuarto rounded-xl uppercase">
                    {project.title}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* LAPTOP SWIPER */}
            <m.div
              variants={opacityAnimation}
              className="hidden lg:block w-[90%] h-full max-h-[70%]"
            >
              <Swiper
                slidesPerView={3}
                loop={true}
                grabCursor={true}
                direction={"vertical"}
                speed={1000}
                centeredSlides={true}
                navigation={true}
                spaceBetween={10}
                modules={[Navigation]}
                onSlideChange={handleSlideChange}
                className="!w-full !h-full !pl-16 !pr-1 tabletNavigation tabletSlide"
              >
                {projects.map((project) => (
                  <SwiperSlide
                    key={project.id}
                    className="rounded-xl bg-cover bg-start relative"
                    style={{
                      backgroundImage: `url(${project.imageSrc})`,
                      boxShadow: "0 1px 5px 1px var(--quinto)",
                      textShadow: "0px 0px 5px var(--cuarto)",
                    }}
                    data-swiper-parallax-opacity="0.5"
                    data-swiper-parallax-scale="0.5"
                    data-swiper-parallax-duration="400"
                  >
                    <span className="absolute inset-0 flex items-center justify-center p-4 text-3xl font-bold font-secondary text-cuarto bg-primero/80 border-2 border-cuarto rounded-xl uppercase">
                      {project.title}
                    </span>
                  </SwiperSlide>
                ))}
              </Swiper>
            </m.div>

            {/* LAPTOP BUTTON */}
            <m.div variants={opacityAnimation} className="w-fit h-fit">
              <Button
                title="Inspect Template"
                href={activeProject.page}
                target="_blank"
                width="w-[350px] hidden lg:flex"
                height="h-[50px]"
              />
            </m.div>
          </m.div>

          <ImageFilter
            key={activeProject.imageSrc}
            imgSrc={activeProject.imageSrc}
            projectAlt={activeProject.title}
            projectHref={activeProject.page}
            framerVariants={imageVariant}
          />
          {/* MOBILE BUTTON */}
          <m.div variants={opacityAnimation} className="w-fit h-fit">
            <Button
              title="Inspect Template"
              href={activeProject.page}
              target="_blank"
              width="w-[250px] md:w-[300px] 900:w-[350px] lg:hidden"
              height="h-[40px]"
            />
          </m.div>
        </m.div>
      </m.section>
    </LazyMotion>
  );
};

export default Templates;
