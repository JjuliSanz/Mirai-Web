"use client";
import { useEffect, useRef, useState } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { AboutIcon, HomeIcon, MailIcon, ServiceIcon } from "@/assets/icons";
import Link from "next/link";
import useLanguageStore from "@/store/languageStore";

const container = {
  hidden: {
    x: "100%",
  },
  partiallyVisible: {
    x: "40%",
    transition: {
      type: "spring",
      visualDuration: 1,
      bounce: 0.6,
    },
  },
  visible: {
    x: "0%",
    transition: {
      type: "spring",
      visualDuration: 1,
      bounce: 0.6,
    },
  },
};

interface IconProps {
  yProp: string;
  xProp: string;
  icon: React.ReactNode;
  iconKey: string;
  iconHref: string;
}

const item = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 0,
    x: 0,
  },
  visible: (custom: { y: string; x: string }) => ({
    scale: 1,
    opacity: 1,
    y: custom.y,
    x: custom.x,
    transition: {
      type: "spring",
      visualDuration: 1,
      bounce: 0.6,
    },
  }),
  hover: {
    scale: 0.96,
  },
  exit: {
    opacity: 0,
    y: 0,
    x: 0,
  },
};

const Icon = ({ yProp, xProp, icon, iconKey, iconHref }: IconProps) => {
  return (
    <m.div
      variants={item}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="hover"
      exit="exit"
      custom={{ y: yProp, x: xProp }}
      key={iconKey}
      className={`absolute w-fit flex items-center justify-center backdrop-blur bg-primero/10 p-2 rounded-full z-50  border border-quinto`}
    >
      <Link href={iconHref} className="">
        {icon}
      </Link>
    </m.div>
  );
};

const LanguageButton = () => {
  const { language, toggleLanguage } = useLanguageStore();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Valor dinámico del ancho de la pantalla
  const widthMotion = useMotionValue(screenWidth);

  // Proporcionalidad entre los valores iniciales y el crecimiento del width
  const xHidden = useTransform(
    widthMotion,
    [320, 1024],
    [-350, -350 - (1024 - 320)]
  );
  const xVisible = useTransform(
    widthMotion,
    [320, 1024],
    [-270, -270 - (1024 - 320)]
  );

  const languageButtonVariant = {
    hidden: (custom: any) => ({
      scale: 0.8,
      opacity: 0,
      x: xHidden.get(), // Se obtiene el valor dinámicamente
    }),
    visible: (custom: any) => ({
      scale: 1,
      opacity: 1,
      x: xVisible.get(),
    }),
    exit: (custom: any) => ({
      opacity: 0,
      x: xHidden.get(),
    }),
    click: {
      scale: 0.96,
    },
  };

  return (
    <m.button
      variants={languageButtonVariant}
      initial="hidden"
      animate="visible"
      whileTap="click"
      exit="exit"
      key="language-icon"
      onClick={toggleLanguage}
      className="flex items-center justify-center px-2 py-1 rounded backdrop-blur bg-primero/10 border border-quinto z-50 absolute text-quinto text-fluidBig"
    >
      {language === "es" ? "ES" : "EN"}
    </m.button>
  );
};

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      setShowMenu(false);
      lastYRef.current = y;
    }
  });

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setIsVisible((prev) => !prev);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        animate={isVisible ? "visible" : "partiallyVisible"}
        whileHover="visible"
        onClick={handleMenuClick}
        // onFocusCapture={() => setIsHidden(false)}
        variants={container}
        className="block lg:hidden fixed top-[20%] right-0 pl-4 z-50"
      >
        <m.div className="flex flex-col gap-4 items-center justify-center relative">
          <div
            className="backdrop-blur-md bg-primero/10 p-2 rounded-full border border-quinto cursor-pointer hover:scale-[0.9] transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
            // onClick={handleMenuClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-list "
              style={{
                width: "clamp(20px, 5vw, 30px)",
                height: "clamp(20px, 5vw, 30px)",
              }}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <AnimatePresence>
            {showMenu && (
              <>
                <Icon
                  iconKey="home-icon"
                  yProp={"-120%"}
                  xProp={"0%"}
                  icon={
                    <HomeIcon
                      className=""
                      style={{
                        width: "clamp(15px, 5vw, 25px)",
                        height: "clamp(15px, 5vw, 25px)",
                      }}
                    />
                  }
                  iconHref="/#home"
                />
                <Icon
                  iconKey="templates-icon"
                  yProp={"-60%"}
                  xProp={"-110%"}
                  icon={
                    <ServiceIcon
                      className=""
                      style={{
                        width: "clamp(15px, 5vw, 25px)",
                        height: "clamp(15px, 5vw, 25px)",
                      }}
                    />
                  }
                  iconHref="/#templates"
                />
                <Icon
                  iconKey="about-icon"
                  yProp={"60%"}
                  xProp={"-110%"}
                  icon={
                    <AboutIcon
                      className=""
                      style={{
                        width: "clamp(15px, 5vw, 25px)",
                        height: "clamp(15px, 5vw, 25px)",
                      }}
                    />
                  }
                  iconHref="/#about"
                />
                <Icon
                  iconKey="mail-icon"
                  yProp={"120%"}
                  xProp={"0%"}
                  icon={
                    <MailIcon
                      className=""
                      style={{
                        width: "clamp(15px, 5vw, 25px)",
                        height: "clamp(15px, 5vw, 25px)",
                      }}
                    />
                  }
                  iconHref="/#contact"
                />
                <LanguageButton />
              </>
            )}
          </AnimatePresence>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default MobileMenu;
