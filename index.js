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
  },
};
