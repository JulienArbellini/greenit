/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      // use the font from /fonts/gotthamssm.woff2
      fontFamily: {
        medium: ["GothamSSM", "sans-serif"],
        sans: ["GothamSSM-Light", "sans-serif"],
        big: ["GothamSSM-Big", "sans-serif"],
        huge: ["GothamSSM-Large", "sans-serif"],
      },
    },
  },
  plugins: [],
};
