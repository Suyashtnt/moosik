const sveltePreprocess = require('svelte-preprocess');
const plugins = require('./postcss.config').plugins;

module.exports = {
  preprocess : sveltePreprocess({postcss : {plugins}})
};
