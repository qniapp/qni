module.exports = {
  mode: 'jit',
  content: ['./examples/*.html'],
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
