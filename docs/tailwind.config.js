module.exports = {
  content: ['./*.html', '_includes/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('postcss-import'), require('tailwindcss')],
}
