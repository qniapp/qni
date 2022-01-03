import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const pkg = require('./package.json')

export default [
  {
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
]
