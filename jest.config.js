module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  clearMocks: true,
  collectCoverageFrom: ['<root>/src/**/*.ts'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageDirectory: 'coverage'
}
