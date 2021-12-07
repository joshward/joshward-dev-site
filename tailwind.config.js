module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace'],
      sans: ['Raleway'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
