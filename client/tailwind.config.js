/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      chat: 'rgb(239,242,245)',
      'gray-opacity': 'rgb(92%, 89%, 89%, 0.3)',
      black:'rgb(0,0,0)',
      blue: 'rgb(13,154,251)',
      'dark-blue': 'rgb(34,51,133)',
      purple: '#7e5bef',
      pink: '#FAEBD7',
      orange: '#ff7849',
      green: 'rgb(66,183,41)',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      white: 'rgb(255,255,255)',
      'gray-light': '#d3dce6',
      red: 'rgb(234,33,25)',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('autoprefixer')],
};
