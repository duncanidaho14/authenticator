module.exports = {
  purge: ['./assets/*.{js,jsx,ts,tsx}', './public/index.php'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  variants: {
    opacity: ({ after }) => after(['disabled']),
    extend: {
      tableLayout: ['hover', 'focus'],
    }
  }
}
