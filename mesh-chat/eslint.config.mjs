import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import angular from '@angular-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import angularTemplate from '@angular-eslint/eslint-plugin-template';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@angular-eslint': angular,
      prettier: prettier,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      'no-console': 'error',
      semi: ['error', 'always'],
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['*.html'],
    plugins: {
      '@angular-eslint/template': angularTemplate,
      prettier: prettier,
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
  configPrettier,
];
