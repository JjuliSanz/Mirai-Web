"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AboutIcon, HomeIcon, MailIcon, ServiceIcon } from "@/assets/icons";
import { usePathname } from "next/navigation";
import useLanguageStore from "@/store/languageStore";

const container = {
  hidden: {
    x: "100%",
  },
  partiallyVisible: {
    x: "60%",
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
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const itemAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 0.9, // Añadir animación de hover
    transition: {
      duration: 0.3, // Controla la duración del hover
      ease: "easeInOut",
    },
  },
};

const navItems = [
  {
    path: "/#home",
    name: "Home",
    icon: (
      <HomeIcon
        style={{
          width: "clamp(15px, 5vw, 25px)",
          height: "clamp(15px, 5vw, 25px)",
        }}
      />
    ),
  },
  {
    path: "/#about",
    name: "About",
    icon: (
      <AboutIcon
        style={{
          width: "clamp(15px, 5vw, 25px)",
          height: "clamp(15px, 5vw, 25px)",
        }}
      />
    ),
  },
  {
    path: "/#templates",
    name: "Templates",
    icon: (
      <ServiceIcon
        style={{
          width: "clamp(15px, 5vw, 25px)",
          height: "clamp(15px, 5vw, 25px)",
        }}
      />
    ),
  },
  {
    path: "/#contact",
    name: "Contact",
    icon: (
      <MailIcon
        style={{
          width: "clamp(15px, 5vw, 25px)",
          height: "clamp(15px, 5vw, 25px)",
        }}
      />
    ),
  },
];

const LanguageButton = () => {
  const { language, toggleLanguage } = useLanguageStore();
  return (
    <motion.button
      variants={itemAnimation}
      key="language-icon"
      onClick={toggleLanguage}
      className="w-full flex items-center justify-center border-t border-cuarto hover:rounded-l-full hover:rounded-r-full z-50 relative text-cuarto text-fluid hover:text-quinto hover:border-quinto"
    >
      <motion.span layout>{language === "es" ? "ES" : "EN"}</motion.span>
    </motion.button>
  );
};

const Navigation = () => {
  const pathname = usePathname();

  let [selectedItem, setSelectedItem] = useState(navItems[0]);
  const [hoveredItem, setHoveredItem] = useState(selectedItem);

  if (pathname.includes("/templates/")) {
    selectedItem = navItems[2];
  }

  return (
    <motion.div
      initial="hidden"
      animate="partiallyVisible"
      variants={container}
      whileHover="visible"
      className="fixed top-[30%] right-0 z-50 pl-6 pr-2 hidden lg:block"
    >
      <nav className="rounded-full border border-quinto lg:flex flex-col items-center justify-center p-2 bg-primero/50 backdrop-blur">
        {navItems.map((item, index) => {
          const isHovered = hoveredItem === item;
          const isActive = selectedItem === item;
          return (
            <motion.div
              variants={itemAnimation}
              key={item.path}
              className={`flex items-center justify-center p-4 rounded-full z-50 relative hover:text-quinto ${
                isActive ? "text-quinto" : "text-quinto/60"
              }`}
              data-active={isActive}
              onMouseOver={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(selectedItem)}
              onClick={() => setSelectedItem(item)}
            >
              <Link href={item.path}>{item.icon}</Link>
              {/* CIRCULO ANIMADO */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 m-auto w-[80%] h-[80%] border-2 border-quinto rounded-full -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        <LanguageButton />
      </nav>
    </motion.div>
  );
};

export default Navigation;
