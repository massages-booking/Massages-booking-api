import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      nanito: ["Nunito", "sans-serif"],
    },
    colors: {
      textBlue: "#0089FF",
      fillBlue: "#00B0FF",
      light: "#f5f5f5",
      primary: "#3e70b6", // 240,86,199
      primaryDark: "#5891e6", // 80,230,217
    },
    extend: {
      backgroundImage: {
        "gradient-blue-to-teal":
          "linear-gradient(180deg, rgba(4,96,234,1) 0%, rgba(0,176,255,1) 100%)",

        "blue-gradient":
          "linear-gradient(180deg, rgba(250,253,255,1) 0%, rgba(39,155,255,1) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
