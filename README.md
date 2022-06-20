# Properly Base ESLint Config

Largely based on [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base), with some minor modifications.

Also includes:
  - [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) (with its recommended config)
  - [eslint-plugin-jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting) (with its recommended config)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) (with its recommended config)

For a list of the rules/configuration in use, see `index.js`.

## Installation

1. Make sure your project is [configured to use the GitHub Package Registry](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#installing-a-package)
1. Install this package along with `eslint` and `prettier`:

    `npm install --save-dev @goproperly/eslint-config-properly-base eslint prettier`
1. Extend this config in your project's [ESLint configuration](https://eslint.org/docs/user-guide/configuring):
    ```
    {
      "extends": ["@goproperly/eslint-config-properly-base"]
    }
    ```
