/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        patrick: ["Patrick Hand", "cursive"],
      },
      colors: {
        'primary': "#0b1252"
      
    },
  },
  plugins: [],
}

}