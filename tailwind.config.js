/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        italyGreen: "#009246",
        italyRed: "#CE2B37",
        accent: "#C29458",
        softWhite: "#EEEBEB",
        softDark: "#242424",
        lightGray: "#ADACAD",
        dark: "#141414",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        accent: ["Nothing You Could Do", "cursive"],
      }
    },
  },
  plugins: [],
}
