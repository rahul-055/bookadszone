module.exports = {
  preset: 'ts-jest', 
  testEnvironment: 'jsdom', 
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], 
  testPathIgnorePatterns: ['/node_modules/'], 
  collectCoverage: true,
  coverageReporters: ["html"],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
};
