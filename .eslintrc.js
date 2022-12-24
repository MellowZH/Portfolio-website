const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:jsx-a11y/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'newline-after-var': 'off',
      },
    },
  ],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    createDefaultProgram: true,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    // 👇🏻 Rules for hooks
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 'off',
    'no-useless-constructor': 'off',
    'no-duplicate-imports': 'off',

    // 👇🏻 `@typescript-eslint` overrides
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,

    'no-undefined': 0,
    complexity: ['error', 20],
    'func-names': 0,
    'class-methods-use-this': 0,
    'id-length': 0,
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    'react/no-array-index-key': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'instance-variables',
          'getters',
          'setters',
          'lifecycle',
          'everything-else',
          'rendering',
        ],
        groups: {
          rendering: ['render', '/^render.+$/'],
        },
      },
    ],
    'react/require-optimization': 0,
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],
    'react/no-did-update-set-state': 0,
    'react/jsx-handler-names': 0,
    'react/prop-types': 0,
    'no-undef': 0,
  },
};
