module.exports = {
  mode: 'jit',
  content: ['./*.html', '_includes/*.html', '_layouts/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('postcss-import'), require('@tailwindcss/typography'), require('tailwindcss')],
}
