import {shared} from '../../eslint.config.shared.mjs'

export default [
  {ignores: ['eslint.config.mjs', '**/build.js', 'coverage/**', 'doc/**', '**/docs/**', '**/dist/**']},
  ...shared,
  {rules: {'github/unescaped-html-literal': 'off', 'i18n-text/no-en': 'off', 'import/named': 'off'}},
]
