/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#9D0062",
      secondary: "#21213C",
      tertiary: "#D3CFD3",
    },
    screens: {
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      width: {
        primary: "390px",
      },
      height: {
        primary: "812px",
        secondary: "950px",
        tertiary: "1100px",
      },
    },
  },
  plugins: [],
};
