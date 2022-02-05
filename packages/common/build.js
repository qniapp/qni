const {build} = require('esbuild')
const {Generator} = require('npm-dts')
const pkg = require('./package.json')

const entryFile = 'src/index.ts'

build({
  entryPoints: [entryFile],
  outdir: 'dist',
  bundle: true,
  minify: true,
  format: 'esm',
  sourcemap: true,
  target: 'es2017',
  external: Object.keys(pkg['dependencies'])
})

new Generator({
  entry: entryFile,
  output: 'dist/index.d.ts'
}).generate()
