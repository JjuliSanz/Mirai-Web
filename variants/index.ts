export const pathVariants = {
  hidden: {
    pathLength: 0,
    stroke: "#AD2831",
    strokeWidth: "0px",
    fill: "transparent", // Comienza transparente
  },
  visible: {
    pathLength: 1,
    stroke: "#AD2831",
    strokeWidth: "5px",
    fill: "#640d14", // Color final
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      strokeWidth: { duration: 0.5, ease: "easeInOut" },
      fill: { duration: 1.5, ease: "easeInOut", delay: 0.5 }, // Animar el fill después
    },
  },
};

export const cont = {
  hidden: {
    backgroundColor: "var(--cuarto)",
    opacity: 0.5,
   
  },
  visible: {
    opacity: 1,
    backgroundColor: "rgba(30, 4, 18, 0.5)",
    transition: {
      delayChildren: 0.3,
      duration: 2,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const templatesContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

export const beforeVariants = {
  hidden: {
    width: "50%",
    height: "50%",
  },
  visible: {
    width: "0%",
    height: "0%",
    transition: { duration: 2, ease: "easeInOut" },
  },
};

export const opacityAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", when: "beforeChildren" },
  },
};

export const gradientAnimation = {
  hidden: {
    backgroundPosition: "0% 50%",
  },
  visible: {
    backgroundPosition: "100% 50%",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const imageAnimation = {
  hidden: { clipPath: "inset(0% 0 100% 0)" },
  visible: {
    clipPath: "inset(0% 0 0% 0)",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export const up = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 150,
      duration: 0.3,
    },
  },
};

export const left = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: "10", mass: 1, stiffness: 150 },
  },
};

export const right = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: "10", mass: 1, stiffness: 150 },
  },
};
