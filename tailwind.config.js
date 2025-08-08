// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: "#7300b6",
        brandPurple90: "rgba(115,0,182,0.9)",
        bodyBg: "#f9f9f9",
        cardBorder: "#eeeeee",
        brandGreen: "#00b06f",
        brandOrange: "#ff7a00"
      },
      spacing: {
        container: "1000px"
      }
    }
  },
  plugins: []
};
