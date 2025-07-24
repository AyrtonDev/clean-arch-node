import baseConfig from './jest.config'
import type { Config } from 'jest'

const config: Config = {
  ...baseConfig,
  testMatch: ['**/*.test.ts'],
}

export default config
