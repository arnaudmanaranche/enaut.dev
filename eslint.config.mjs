import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  globalIgnores(['**/tailwind.config.js', '**/*.d.ts']),
  {
    extends: [
      ...nextCoreWebVitals,
      ...compat.extends('plugin:@typescript-eslint/recommended'),
      ...compat.extends('prettier'),
    ],

    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',

      'simple-import-sort/imports': [
        1,
        {
          groups: [['^@?\\w'], ['^(@)(/.*|$)'], ['^\\.'], ['^.+\\.css$']],
        },
      ],

      'simple-import-sort/exports': 2,
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
])
