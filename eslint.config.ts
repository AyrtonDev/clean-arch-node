import love from 'eslint-config-love'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    files: ['**/*.ts'],
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'import/no-unresolved': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/class-methods-use-this': 'off',
    },
    plugins: {
      import: importPlugin,
    },
  },
  love,
  prettier,
]
