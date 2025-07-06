import love from 'eslint-config-love'
import prettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default [
  {
    files: ['src/**/*.ts'],
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    ...love,
    ...prettier,
  },
]
