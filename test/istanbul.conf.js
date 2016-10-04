module.exports = {
  verbose: false,
  instrumentation: {
    excludes: [
      'src/**/*.test.js'
    ]
  },
  reporting: {
    print: 'none',
    dir: './output/cover',
    reports: [
      'lcov',
      'json',
      'text-summary'
    ]
  },
  check: {
    global: {
      statements: 75 /* percent */
    }
  }
};
