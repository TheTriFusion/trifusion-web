/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xxs': '350px',
      'xs': '450px',
      's': '550px',
      'xxm': '650px',
      'xm': '750px',
      'm': '850px',
      'lg': '950px',
      'xl': '1050px',
      '2xl': '1250px',
      '3xl': '1550px'
    },
    extend: {
      fontFamily: {
        raleway : ['Raleway', 'sans-serif'],
        libre: ['Libre Baskerville', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
