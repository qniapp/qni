module.exports = {
  mode: 'jit',
  purge: ['./examples/*.html'],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
