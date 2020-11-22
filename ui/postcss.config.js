const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const presetEnv = require('postcss-preset-env')({
    features: {
        'nesting-rules': true, // Optional, not necessary. Read details about it  [here](https://tabatkins.github.io/specs/css-nesting/#motivation)
    },
});

const plugins =
    process.env.NODE_ENV === 'production'
        ? [postcssImport, tailwindcss, autoprefixer, presetEnv, cssnano]
        : [postcssImport, tailwindcss, presetEnv];

module.exports = { plugins };
