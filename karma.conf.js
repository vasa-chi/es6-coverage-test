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
      transform: ['babelify', 'istanbulify'],
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
        'src/**/*.js': 'isparta',
        'src/**/*.jsx': 'isparta',
        'test/**/*.js': 'isparta'
      }
    }
  });
};
