import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#5b6678",
        line: "#dbe3ec",
        paper: "#fbfaf7",
        panel: "#ffffff",
        blue: {
          DEFAULT: "#2f6f9f",
          deep: "#1f557d",
          soft: "#e7f1f8",
        },
        warm: {
          DEFAULT: "#c87944",
          soft: "#f8eadf",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 32, 51, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
