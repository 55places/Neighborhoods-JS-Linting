module.exports = {
  extends: [
    './rules/react',
    './rules/react-a11y',
    './rules/react-hooks',
  ].map(require.resolve),
  rules: {},
};
