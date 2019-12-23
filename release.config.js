module.exports = {
  plugins: [
    ['@semantic-release/commit-analyzer', {
      releaseRules: [
        // All commits produce patch releases
        { release: 'patch' },
      ],
    }],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
