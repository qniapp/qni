import rollupCommonjs from '@rollup/plugin-commonjs'
import rollupPostcss from 'rollup-plugin-postcss'
import rollupReplace from '@rollup/plugin-replace'
import {fromRollup} from '@web/dev-server-rollup'

const commonjs = fromRollup(rollupCommonjs)
const postcss = fromRollup(rollupPostcss)
const replace = fromRollup(rollupReplace)

export default {
  rootDir: '../../',
  mimeTypes: {
    '**/*.css': 'js'
  },
  plugins: [
    commonjs({
      include: ['../../**/node_modules/fraction.js/**/*', '../../**/node_modules/interactjs/**/*']
    }),
    postcss({include: ['dist/qni.css'], modules: true}),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    })
  ]
}
