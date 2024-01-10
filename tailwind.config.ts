import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-green": "#0aff9d",
        "custom-green-play": "rgba(10, 255, 157, 0.75)",
        "custom-green-menu": "rgba(10, 255, 157, 0.8)",
        "custom-black": "#232323",
        "custom-black-main": "#111111",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(255, 255, 255, 0.9)",
      },
      screens: {
        "2100px": "2100px",
        "1700px": "1700px",
        "1400px": "1400px",
        "1300px": "1300px",
        "1200px": "1200px",
        "1100px": "1100px",
        "1024px": "1024px",
        "837px": "837px",
        "700px": "700px",
        "600px": "600px",
        "450px": "450px",
      },
    },
  },
  plugins: [],
};
export default config;
