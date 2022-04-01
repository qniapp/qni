module.exports = {
  mode: 'jit',
  content: ['./src/*.ts'],
  safelist: ['operation-xs', 'operation-sm', 'operation-base', 'operation-lg', 'operation-xl', 'operation-2xl'],
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
