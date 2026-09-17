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
        ink: "#071B4D",
        muted: "#526077",
        line: "#DCE4F0",
        paper: "#F7F9FC",
        panel: "#ffffff",
        blue: {
          DEFAULT: "#1769FF",
          deep: "#0B245F",
          soft: "#EEF0FF",
        },
        warm: {
          DEFAULT: "#22C7E6",
          soft: "#E8FBFE",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 32, 51, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
