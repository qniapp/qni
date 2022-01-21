import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default [
  {
    input: './src/application.js',
    output: [
      {
        file: './public/javascripts/application.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    context: 'window',
    plugins: [
      resolve(),
      commonjs({
        namedExports: {
          'fraction.js': ['Fraction'],
        },
      }),
    ],
  },
]
