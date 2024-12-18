/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Orbitron",
    },
    extend: {
      colors: {
        primary: "#B809C3",
        secondary: "#ff014f",
        third: "#FEF6C7",
        fourth: "#011eff",
      },
    },
  },
  plugins: [],
}

