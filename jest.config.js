/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',
  testEnvironment: "node",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>/src'],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  collectCoverage: true, 
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};