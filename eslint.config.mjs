import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginCypress from 'eslint-plugin-cypress'


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        after: 'readonly',
        afterEach: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      cypress: eslintPluginCypress,
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'warn',
    },
  },
]);