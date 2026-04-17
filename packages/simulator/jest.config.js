/** @type {import('ts-jest').JestConfigWithTsJest} */

// eslint-disable-next-line import/no-commonjs, no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@qni/common$': '<rootDir>/../common/src/index.ts',
  },
  coveragePathIgnorePatterns: ['/test/matchers/'],
}
