// We lint ourselves with our own rules!
const baseConfig = require('./index');

module.exports = {
  ...baseConfig,
  // Because this repository does not have Jest installed (but consumers typically do), we need to
  // explicitly tell eslint-plugin-jest what Jest version to use for its no-deprecated-functions
  // rule.
  settings: {
    jest: {
      version: 26,
    },
  },
};
