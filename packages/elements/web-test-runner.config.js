import {fromRollup} from '@web/dev-server-rollup'
import rollupCommonjs from '@rollup/plugin-commonjs'
import rollupReplace from '@rollup/plugin-replace'

const commonjs = fromRollup(rollupCommonjs)
const replace = fromRollup(rollupReplace)

export default {
  rootDir: '../../',
  plugins: [
    commonjs({
      include: ['../../**/node_modules/fraction.js/**/*', '../../**/node_modules/interactjs/**/*']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
