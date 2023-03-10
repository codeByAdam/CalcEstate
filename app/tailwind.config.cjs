/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  safelist:[],
  theme: {
    extend: {},
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1280px"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}
