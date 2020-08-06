module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'import/extensions': [2, 'never'],
    'react/jsx-max-props-per-line': [2, { maximum: 3, when: 'always' }],
    'comma-dangle': [2, 'never'],
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/test.tsx', '**/test.ts'] }
    ],
    '@typescript-eslint/indent': [2, 2],
    'react/jsx-one-expression-per-line': [2, { allow: 'none' }],
    'eol-last': [2, 'always'],
    'import/order': [2, {'groups': [
      'builtin', // Built-in types are first
      ['sibling', 'parent'], // Then sibling and parent types. They can be mingled together
      'index', // Then the index file
      'object',
      // Then the rest: internal and external type
    ],
    'newlines-between': 'always',
    'alphabetize': {'order': 'asc'}
  }]
  }
};
