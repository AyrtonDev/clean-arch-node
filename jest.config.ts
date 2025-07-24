import type { Config } from 'jest'

const config: Config = {
  roots: ['src'],
  preset: '@shelf/jest-mongodb',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/main/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'json'],
}

export default config
