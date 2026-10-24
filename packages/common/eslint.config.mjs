import {shared} from '../../eslint.config.shared.mjs'

export default [
  {ignores: ['eslint.config.mjs', '**/build.js', 'coverage/**', '**/dist/**', 'doc/**', '**/docs/**']},
  ...shared,
  {rules: {'i18n-text/no-en': 'off'}},
]
