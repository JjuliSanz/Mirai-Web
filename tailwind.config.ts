import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primero: "#1e0412",
        segundo: "#7c1abf",
        tercero: "#b57cff",
        cuarto: "#e323d6",
        quinto: "#ff65f8",
        sexto: "#ffa8c3",
      },
      screens: {
        "360": "360px",
        "900": "900px",
        "850": "850px",
        "500": "500px",
        "400": "400px",
        "450": "450px",
        "600": "600px",
      },
      fontFamily: {
        primary: ["var(--primary-font)"],
        secondary: ["var(--secondary-font)"],
        logo: ["var(--logo-font)"],
      },
      fontSize: {
        fluid: 'clamp(0.9rem, max(4vw, 2.5vh), 1.8rem)', 
        fluidBig: 'clamp(1rem, max(4vw, 2.5vh), 1.9rem)',
        fluidTitle: 'clamp(1rem, max(5vw, 2.5vh), 2.4rem)',
      },
    },
  },
  plugins: [],
};
export default config;
