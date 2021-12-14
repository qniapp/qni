const pkg = require('./package.json')
import resolve from '@rollup/plugin-node-resolve'

export default [
  {
    input: 'dist/index.js',
    output: {
      file: pkg['module'],
      format: 'es'
    },
    context: 'window',
    plugins: [
      resolve()
    ]
  }
]
