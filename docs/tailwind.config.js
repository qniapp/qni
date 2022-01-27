module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('postcss-import'), require('tailwindcss')],
}
