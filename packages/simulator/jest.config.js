/** @type {import('ts-jest').JestConfigWithTsJest} */

// eslint-disable-next-line import/no-commonjs, no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    'packages/common/dist/index.js$': 'ts-jest',
  },
  coveragePathIgnorePatterns: ['/test/matchers/'],
}
