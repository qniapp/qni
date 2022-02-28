module.exports = {
  mode: 'jit',
  content: ['./*.html', '_includes/*.html', '_layouts/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('postcss-import'), require('tailwindcss')],
}
