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
    extend: {
      opacity: ({ after }) => after(['disabled']),
      tableLayout: ['hover', 'focus'],
    }
  }
}