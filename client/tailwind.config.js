/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      chat: 'rgb(239,242,245)',
      black: 'rgb(45,48,51)',
      blue: 'rgb(28,104,255)',
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
    extend: {},
  },
  plugins: [require('autoprefixer')],
};
