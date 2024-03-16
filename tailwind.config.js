/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      primary: "#141414",
      secondary: "#1F1F1F",
      tertiary: "#333333",
      light: "#FFFFFF",
      link: "#444444",
      accent: "#C4F82A",
    },
    extend: {
      width: {
        88: "88px",
        279: "279px",
        304: "304px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "14px",
        heading: "24px",
        subheading: "14px",
      },
      fontWeight: {
        regular: 300,
        semibold: 500,
        bold: 600,
      },
    },
  },
  plugins: [],
};
