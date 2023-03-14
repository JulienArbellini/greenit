/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-model-y': "url('/images/home/hero-model-y.jpg')",
      },
      backgroundSize: {
        'fit': 'fit'
      }
    },
  },
  plugins: [],
};
