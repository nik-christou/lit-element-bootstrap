
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        { pattern: config.grep ? config.grep : 'test/**/*.test.js', type: 'module' }
      ],
      plugins: [
        require.resolve('@open-wc/karma-esm'), // load plugin
        'karma-*', // fallback: resolve any karma- plugins
      ],

      frameworks: ['esm'],

      esm: {
        nodeResolve: true, // if you are using 'bare module imports' you will need this option
        compatibility: 'all', // set compatibility mode to all
      },
    }),
  );
  return config;
};
