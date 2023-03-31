module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
  },
  rules: {
    // not worth fixing all these IMO
    'prefer-destructuring': 'off',

    // Enfore a blank line before return statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],

    // Ensure control structures use curly braces rather than inline for single statements
    curly: ['error', 'all'], // multiline is the default from airbnb

    // Allow underscore dangles for private members (e.g. this._foo)
    'no-underscore-dangle': ['error', { allowAfterThis: true }],

    // Prefer it() over test(), unless outside a describe() block
    'jest/consistent-test-it': 'error',

    // Prefer const foo = () => {...} over function foo() {...} (default: "expression")
    'func-style': 'error',
    'func-names': ['error', 'always', { generators: 'as-needed' }],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // Custom patterns for "dev only" files in our code
          '.storybook/**', // Storybook
          'stories/**', // Storybook
          '**/setupTests.js', // CRA Jest setup
          '**/*.config.js', // Config files
          'build/**', // Build/deploy tooling
          // The rest of these are copied from eslint-config-airbnb-base:
          // https://github.com/airbnb/javascript/blob/0375265cbd43635f8062615995a6a86f22fd0fc2/packages/eslint-config-airbnb-base/rules/imports.js#L71
          'test/**',
          'tests/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx}',
          'test-*.{js,jsx}',
          '**/*{.,_}{test,spec}.{js,jsx}',
        ],
        optionalDependencies: false,
      },
    ],
    'import/prefer-default-export': 'off',

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
  },
};
