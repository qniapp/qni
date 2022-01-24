import {build} from 'esbuild'
import npmDts from 'npm-dts'
import pkg from './package.json'

const {Generator} = npmDts
const entryFile = 'src/index.ts'

build({
  entryPoints: [entryFile],
  outdir: 'dist',
  bundle: true,
  minify: true,
  format: 'esm',
  target: 'es2017',
  external: Object.keys(pkg['dependencies'])
})

new Generator({
  entry: entryFile,
  output: 'dist/index.d.ts'
}).generate()
