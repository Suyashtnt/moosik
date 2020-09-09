let plugins = [
  require('postcss-import')({}),
  require('postcss-nested')({}),
  require('autoprefixer')({}),
  require('precss')({})
];

module.exports = {
  plugins
};
