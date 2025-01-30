import useLanguageStore from "@/store/languageStore";
import React from "react";
import {
  m,
  useInView,
  LazyMotion,
  domAnimation,
  AnimatePresence,
  Variants,
} from "framer-motion";
const LanguageButton = ({ framerVariants }: { framerVariants?: Variants }) => {
  const { language, setLanguage, toggleLanguage } = useLanguageStore();
  return (
    <m.button
      variants={framerVariants}
      
      onClick={toggleLanguage}
      className="flex items-center justify-center py-1 px-3 rounded border border-quinto z-50 relative text-quinto text-fluid"
    >
      {language === "es" ? "ES" : "EN"}
    </m.button>
  );
};

export default LanguageButton;
