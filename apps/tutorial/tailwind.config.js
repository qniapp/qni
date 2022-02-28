module.exports = {
  mode: 'jit',
  darkMode: 'media',
  content: ['./*.html', '_includes/*.html', '_layouts/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('postcss-import'), require('tailwindcss'), require('@tailwindcss/typography')],
}
