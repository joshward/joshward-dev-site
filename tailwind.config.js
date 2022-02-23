module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace'],
      sans: ['Raleway'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
