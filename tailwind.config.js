/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bitter'],
        body: ['Raleway'],
      },
      colors: {
        primary: '#047857',
      },
    },
  },
  plugins: [],
}
