module.exports = {
  mode: 'jit',
  content: ['./src/*.ts'],
  theme: {
    extend: {
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
