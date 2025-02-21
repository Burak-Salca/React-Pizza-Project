/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FDC913',
        lightGray: '#5F5F5F',
        darkGray: '#292929',
        red: '#CE2829',
        beige: '#FAF7F2',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        satisfy: ['Satisfy', 'sans-serif'],
        roboto: ['"Roboto Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

