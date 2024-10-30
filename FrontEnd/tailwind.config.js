/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans : ["Afacad Flux", "sans-serif"]
    },
    screens : {
      sm : "640px",
      md : "925px",
      lg : "1024px",
      xl : "1280px"
    },
    extend: {
      fontFamily : {
        poppins  :  ["Poppins", "sans-serif"]
      },
      colors : {
        remotego : "#5325dc"
      }
    },
  },
  plugins: [],
}