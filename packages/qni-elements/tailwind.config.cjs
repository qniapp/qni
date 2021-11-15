module.exports = {
  mode: 'jit',
  purge: ['./examples/*.html'],
  theme: {
    extend: {
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },
    },
  }
}
