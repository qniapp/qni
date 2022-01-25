import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
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
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      resolve(),
      commonjs({
        namedExports: {
          'fraction.js': ['Fraction'],
        },
      }),
    ],
  },
]
