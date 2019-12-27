module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          // By default, generate a patch release
          { release: 'patch' },
          // allow specifying e.g. 'chore(no-release)' to skip releasing
          { scope: 'no-release', release: false },
        ],
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
