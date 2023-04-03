/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      // use the font from /fonts/gotthamssm.woff2
      fontFamily: {
        sans: ["GothamSSM", "sans-serif"],
      },
    },
  },
  plugins: [],
};
