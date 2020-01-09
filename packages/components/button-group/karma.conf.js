
const coverage = process.argv.find(arg => arg.includes('--coverage'));

module.exports = config => {
  config.set({
    basePath: "",
    autoWatch: false,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: true,
    concurrency: Infinity,
    
    frameworks: ['esm', 'mocha'],
    
    plugins: [
      'karma-mocha',
      '@open-wc/karma-esm',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-coverage-istanbul-reporter'
    ],
    
    browsers: ['ChromeHeadlessNoSandbox'],
    
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox'],
      }
    },

    esm: {
      coverage,
      nodeResolve: true
    },

    files: [
      require.resolve('axe-core/axe.min.js'),
      { pattern: "test/**/*.test.js", type: "module", included: true },
      { pattern: "src/**/*.js", type: "module", included: false },
    ],

    reporters: coverage ? ['mocha', 'coverage-istanbul'] : ['mocha'],

    restartOnFileChange: true,

    mochaReporter: {
      showDiff: true,
    },

    client: {
      mocha: {
        reporter: 'html'
      }
    }

  });
};
