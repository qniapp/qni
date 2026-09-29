import {shared, espree} from '../../eslint.config.shared.mjs'
import globals from 'globals'

export default [
  {ignores: ['eslint.config.mjs', '**/dist/**', '**/docs/**', '**/icon/**', '**/web-test-runner.config.js']},
  ...shared,
  {
    rules: {
      'i18n-text/no-en': 'off',
      'import/extensions': 'off',
      'import/named': 'off',
      'import/no-named-as-default': 'off',
    },
  },
  {files: ['test/**'], rules: {'import/no-unresolved': 'off'}},
  {
    files: ['test/**/*.js'],
    languageOptions: {globals: {...globals.mocha, assert: 'writable'}},
    rules: {
      'github/no-inner-html': 'off',
      'github/unescaped-html-literal': 'off',
      'import/namespace': 'off',
      'import/no-deprecated': 'off',
    },
  },
  {files: ['**/*.js'], languageOptions: {parser: espree, parserOptions: {ecmaVersion: 2022, sourceType: 'module'}}},
]
