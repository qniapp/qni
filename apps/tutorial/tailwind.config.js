module.exports = {
  mode: 'jit',
  content: ['./*.html', '_includes/*.html', '_layouts/*.html', '_plugins/*.rb/'],
  safelist: ['w-20', 'w-12', 'w-11', 'h-12', '-mt-2.5'],
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
