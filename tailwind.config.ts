import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-bg": "var(--bg-primary)",
      "secondary-bg": "var(--bg-secondary)",
      "tertiary-bg": "var(--bg-tertiary)",
      "primary-text": "var(--text-primary)",
      "secondary-text": "var(--text-secondary)",
    },
    fontSize: {
      sm: ["16px", "normal"],
      md: ["20px", "normal"],
      lg: ["24px", "normal"],
      xl: ["32px", "normal"],
      "2xl": ["40px", "normal"],
      "3xl": ["48px", "normal"],
      "4xl": ["64px", "normal"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        "section-x": "var(--section-x-padding)",
      },
    },
  },
  plugins: [],
};
export default config;
