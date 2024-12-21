/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        'soft-orange': '#E9AB53',
        'soft-red': '#F15E50',
        'off-white': '#FFFDFA',
        'grayish-blue': '#C5C6CE',
        'dark-grayish-blue': '#5D5F79',
        'very-dark-blue': '#00001A'
      },
      fontSize: {
        base: '0.9375rem'
      },
      screens: {
        xl: '1144px'
      }
    },
  },
  plugins: [],
}

