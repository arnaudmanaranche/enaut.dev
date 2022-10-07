const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...fontFamily.sans],
      },
      colors: {
        primary: '#047857',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
