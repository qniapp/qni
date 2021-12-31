import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'dist/index.js',
  output: {
    file: pkg['module'],
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        'fraction.js': ['Fraction']
      }
    })
  ]
}
