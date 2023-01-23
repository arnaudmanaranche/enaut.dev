const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  safelist: [
    'bg-gray-500',
    'bg-rose-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-sky-500',
  ],
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
