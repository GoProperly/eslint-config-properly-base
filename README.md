# Properly Base ESLint Config

Largely based on [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base), with some minor modifications.

Also includes:
  - [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) (with its recommended config)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) (with its recommended config)

## Installation

1. Make sure your project is [configured to use the GitHub Package Registry](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#installing-a-package)
1. Install this package along with `eslint` and `prettier`:

    `npm install --save-dev @goproperly/eslint-config-properly-base eslint prettier`
1. Update your project's ESLint configuration to extend this base config:
    ```
    {
      "extends": ["@goproperly/eslint-config-properly-base"]
    }
    ```
