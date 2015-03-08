var isparta = require("isparta");
var istanbul = require("browserify-istanbul");

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'browserify'],

    files: [
      'src/**/*.js',
      'src/**/*.jsx',
      'test/**/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/**/*.js': ['browserify'],
      'src/**/*.jsx': ['browserify'],
      'test/**/*.js': ['browserify']
    },

    browserify: {
      transform: [istanbul({
        instrumenter: isparta
      })],
      debug: true
    },

    browsers: ['Chrome'],

    reporters: ['coverage', 'progress'],

    coverageReporter: {
      reporters: [
        {type: 'text'},
        {type: 'html'}
      ]
    }
  });
};
