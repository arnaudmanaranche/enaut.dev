/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        surfaceHighlight: '#1a1a1a',
        border: '#262626',
        text: {
          primary: '#ededed',
          secondary: '#a1a1a1',
          muted: '#6b6b6b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
