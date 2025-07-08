/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    scrollbar: false, // optional: remove scrollbars
  },
  plugins: [
     require('tailwind-scrollbar-hide') 
  ],
}

