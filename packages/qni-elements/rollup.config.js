import commonjs from "rollup-plugin-commonjs"
import pkg from './package.json'
import replace from "rollup-plugin-replace"
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'dist/index.js',
  output: [
    {
      file: pkg['module'],
      format: 'es'
    }
  ],
  context: 'window',
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    resolve(),
    commonjs({
      namedExports: {
        "fraction.js": ["Fraction"]
      }
    })
  ]
}
