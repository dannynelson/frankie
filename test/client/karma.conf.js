module.exports = function(config) {
  config.set({
    basePath: '../..',

    // sinon-chai includes chai
    frameworks: ['mocha', 'chai-sinon'],

    files: [
      'node_modules/ionic/release/js/ionic.bundle.js',
      // keep a safe version of angular mocks in this directory until they fix the bug
      'test/client/angular-mocks.js',
      'phonegap/www/templates/**/*.js',
      'client/**/*.js',
      // Watched files (reload on change, but don't serve)
      {pattern: 'Gruntfile.js', included: false, served: false}
    ],

    reporters: ['dots'],

    preprocessors: {
      '**/client/**/!(*spec).js': 'coverage'
    },

    coverageReporter: {
      dir: 'coverage',
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    captureTimeout: 60000,

    singleRun: true
  });
};
