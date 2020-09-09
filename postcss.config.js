let plugins = [
	require('postcss-import')({}),
	require('postcss-nested')({}),
	require('autoprefixer')({}),
	require('precss')({}),
	require('tailwindcss')(),
];

module.exports = { plugins };
