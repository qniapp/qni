module.exports = {
  mode: 'jit',
  content: [
    './app/components/**/*.html.erb',
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      borderWidth: {
        3: '3px'
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
