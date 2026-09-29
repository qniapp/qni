import js from '@eslint/js'
export * as espree from 'espree'
import github from 'eslint-plugin-github'
import prettier from 'eslint-config-prettier/flat'
import tseslint from 'typescript-eslint'

// Keep the old --ext .js,.ts scope, including ESLint 8's dotfile exclusion.
export const shared = [
  { ignores: ['**/.*', '**/*.mjs', '**/*.cjs'] },
  { files: ['**/*.{js,ts}'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  github.getFlatConfigs().recommended,
  github.getFlatConfigs().browser,
  ...github.getFlatConfigs().typescript,
  { files: ['**/*.ts'], rules: { '@typescript-eslint/explicit-module-boundary-types': 'off' } },
  prettier,
]
