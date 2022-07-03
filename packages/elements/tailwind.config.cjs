module.exports = {
  mode: 'jit',
  content: ['./src/*.ts'],
  safelist: [
    'qpu-operation-xs',
    'qpu-operation-sm',
    'qpu-operation-base',
    'qpu-operation-lg',
    'qpu-operation-xl',
    'qpu-operation-2xl'
  ],
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
