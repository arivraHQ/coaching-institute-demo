import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F6F5F0",
        surface: "#FFFFFF",
        text: "#101820",
        primary: "#101820",
        ink: "#101820",
        highlighter: "#FFE14D",
        redpen: "#E5383B",
        muted: "#6B7280",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        margin: ["var(--font-margin)", "cursive"],
      },
      borderRadius: {
        DEFAULT: "10px",
        md: "10px",
        lg: "10px",
        xl: "10px",
      },
      borderWidth: {
        DEFAULT: "2px",
        "2": "2px",
      },
      boxShadow: {
        paper: "3px 3px 0px 0px #101820",
        "paper-lg": "5px 5px 0px 0px #101820",
        "paper-sm": "2px 2px 0px 0px #101820",
      },
    },
  },
  plugins: [],
};

export default config;
