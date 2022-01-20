import {build} from 'esbuild'
import npmDts from 'npm-dts'

const {Generator} = npmDts
const entryFile = 'src/index.ts'

build({
  entryPoints: [entryFile],
  outdir: 'dist',
  bundle: true,
  format: 'esm',
  external: []
})

new Generator({
  entry: entryFile,
  output: 'dist/index.d.ts'
}).generate()
