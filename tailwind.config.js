/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0f1b2d", light: "#1a2b45", dark: "#0a1320" },
        brand: { DEFAULT: "#2a7ab9", dark: "#1f5f94" },
        accent: { DEFAULT: "#f47b3c", dark: "#e0652a" },
        teal: "#5fd4d9",
        soft: "#f3f7fb",
        wa: "#5fd4d9",
        wb: "#f47b3c",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
