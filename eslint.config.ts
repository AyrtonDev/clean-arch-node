import love from 'eslint-config-love'
import prettier from 'eslint-config-prettier'

export default [
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      love,
      prettier,
    },
  },
]
