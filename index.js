module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
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

    // Allow underscore dangles for private members (e.g. this._foo)
    'no-underscore-dangle': ['error', { allowAfterThis: true }],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // Custom patterns for "dev only" files in our code
          '.storybook/**', // Storybook
          'stories/**', // Storybook
          '**/setupTests.js', // CRA Jest setup
          '**/*.config.js', // Config files
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
  },
};
