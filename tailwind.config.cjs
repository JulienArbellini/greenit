/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["GothamSSM", "sans-serif"],
        big: ["GothamSSM-Big", "sans-serif"],
        huge: ["GothamSSM-Large", "sans-serif"],
      },
      animation: {
        "fly-in": "fly-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
