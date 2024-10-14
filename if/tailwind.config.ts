
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eac100",
        secondary: "#6a737b",
        tertiary: "#FFF6EC"
      },
      screens: {
        "msm": "0px"
      }
    }
  },
  plugins: [],
};
export default config;
