module.exports = {
  content: ['./*.html', '_includes/*.html', '_layouts.html'],
  theme: {
    extend: {},
  },
  plugins: [require('postcss-import'), require('tailwindcss')],
}
