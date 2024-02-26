import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#8E5BC2",
      primaryHover: "#533370",
      bg: "#0E0F0F",
      sidebar: "#141515",
      grey: "rgb(156 163 175)",
      error: "rgb(220 38 38);",
      white: "#fff",
      black: "rgb(0, 0, 0);",
      transparent: "transparent"
    },
    fontSize: {
      xs: "0.8rem",
      sm: "1.07rem",
      base: "1.18rem",
      lg: "1.24rem",
      xl: "1.38rem",
      "1.5xl": "1.5rem",
      "2xl": "1.82rem",
      "3xl": "2.22rem",
      "4xl": "2.66rem",
      "5xl": "3.56rem",
      "6xl": "4.44rem",
      "7xl": "5.33rem",
      "8xl": "7.1rem",
      "9xl": "9.5rem",
    },
    transitionDuration: {
      DEFAULT: "266ms",
    },
    screens: {
      sm: "576px",
      "sm-max": { max: "576px" },
      md: "768px",
      "md-max": { max: "768px" },
      lg: "992px",
      "lg-max": { max: "992px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1320px",
      "2xl-max": { max: "1320px" },
      "3xl": "1600px",
      "3xl-max": { max: "1600px" },
      "4xl": "1850px",
      "4xl-max": { max: "1850px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
