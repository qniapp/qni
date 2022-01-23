import commonjs from 'rollup-plugin-commonjs'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'
import replace from 'rollup-plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: './app/javascript/index.ts',
    output: [
      {
        file: pkg['module'],
        format: 'es',
        sourcemap: true
      }
    ],
    context: 'window',
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      resolve(),
      commonjs({
        namedExports: {
          'fraction.js': ['Fraction']
        }
      }),
      typescript({tsconfig: './tsconfig.json'})
    ]
  },
  {
    input: './dist/types/index.d.ts',
    output: [{file: pkg['types'], format: 'es'}],
    plugins: [dts()]
  }
]
