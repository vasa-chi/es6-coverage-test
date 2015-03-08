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
      'src/**/*.js': ['browserify', 'coverage'],
      'src/**/*.jsx': ['browserify', 'coverage'],
      'test/**/*.js': ['browserify']
    },

    browserify: {
      transform: ['babelify'],
      debug: true
    },

    browsers: ['Chrome'],

    reporters: ['coverage', 'progress'],

    coverageReporter: {
      reporters: [
        {type: 'text'},
        {type: 'html'}
      ],

      instrumenters: { isparta : require('isparta') },
      instrumenter: {
        '**/*.js': 'isparta'
      }
    }
  });
};
