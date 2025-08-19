// eslint.config.js

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // 1. Global ignore configuration
  {
    ignores: ['dist', 'node_modules'],
  },

  // 2. Base configuration for all JavaScript/JSX files
  {
    files: ['**/*.{js,jsx}'],
    
    // 3. Language options
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript features
      sourceType: 'module',  // Use ES modules
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
      globals: {
        ...globals.browser, // Add all browser global variables
      },
    },

    // 4. Plugins
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    // 5. Rules
    rules: {
      // Start with ESLint's recommended rules
      ...js.configs.recommended.rules,
      
      // Add recommended rules from the React Hooks plugin
      ...reactHooks.configs.recommended.rules,
      
      // Add the specific rule for React Refresh (Vite)
      'react-refresh/only-export-components': 'warn',

      // You can add your own custom rules here, for example:
      'no-unused-vars': ['warn', { args: 'none' }], // Warn about unused variables
      'react/prop-types': 'off', // Turn off prop-types rule if you use TypeScript or prefer not to use it
    },
  },
];