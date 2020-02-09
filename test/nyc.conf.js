module.exports = {
  verbose: false,
  instrumentation: {
    excludes: [
      'src/**/*.test.js'
    ]
  },
  'report-dir': './output/coverage',
  reporter: [
    'lcov',
    'json',
    'text-summary'
  ],
  'temp-dir': './output/coverage',
  check: {
    global: {
      statements: 75 /* percent */
    }
  }
};
