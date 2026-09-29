import {shared, espree} from '../../eslint.config.shared.mjs'
import globals from 'globals'

export default [
  {
    ignores: [
      'eslint.config.mjs',
      'app/assets/builds/**',
      'app/assets/javascripts/serviceworker-companion.js',
      'app/javascript/application.js',
      'app/javascript/controllers/index.js',
      '**/docs/**',
      '**/postcss.config.js',
      '**/rollup.config.js',
      '**/storage/**',
      '**/tailwind.config.js',
      '**/tmp/**',
      '**/vendor/**',
    ],
  },
  ...shared,
  {rules: {'github/filenames-match-regex': 'off', 'i18n-text/no-en': 'off', 'import/named': 'off'}},
  {
    files: ['test/**/*.js'],
    languageOptions: {globals: {...globals.mocha, assert: 'writable'}},
    rules: {'github/no-inner-html': 'off'},
  },
  // parserOptions.ecmaVersion makes eslint-plugin-import parse @hotwired/stimulus at ES2017 and fail; languageOptions.ecmaVersion 8 only adds ES2017 globals (SharedArrayBuffer, Atomics) vs ESLint 8's es6 env.
  {files: ['app/**/*.js'], languageOptions: {parser: espree, ecmaVersion: 8}},
]
