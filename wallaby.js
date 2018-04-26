module.exports = (wallaby) => {
  process.env.NODE_PATH += 'thing'
  return {

    files: [
      'sum.js',
      'app/javascript/root/utils/url.js',
      'config/jest/*.js',
    ],
    tests: [
      'sum-test.js',
      'app/javascript/root/utils/url.test.js'
    ],
    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony'
      }
    },
    testFramework: 'jest',
    compilers: {
      '**/*.js': wallaby.compilers.babel({})
    }
  }
};
