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