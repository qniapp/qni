module.exports = {
  mode: 'jit',
  content: ['./*.html', '_includes/*.html', '_layouts/*.html', '_plugins/*.rb/'],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss'),
  ],
}
