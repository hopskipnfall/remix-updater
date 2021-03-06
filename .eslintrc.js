module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    es2017: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      rules: {
        '@angular-eslint/template/banana-in-box': 'error',
        '@angular-eslint/template/no-negated-async': 'error',
      },
    },
  ],
  extends: [
    'airbnb-typescript/base',
    'prettier', // Prettier modules must go last.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: [
      './tsconfig.serve.json',
      './src/tsconfig.app.json',
      './src/tsconfig.spec.json',
      './e2e/tsconfig.e2e.json',
      './src/environments/environments.eslint.json',
    ],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'unicorn', 'prettier'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // Broken for type imports...
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'import/no-extraneous-dependencies': 'warn',
    '@typescript-eslint/indent': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-param-reassign': 'off',
  },
  ignorePatterns: [
    'dist/**',
    'coverage/**',
    'src/**/*.js',
    'main.js',
    'src/polyfills.ts',
  ],
};
