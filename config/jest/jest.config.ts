import type { Config } from '@jest/types';
import path from 'path';

const config: Config.InitialOptions = {
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '\\.jpg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports/unit',
        filename: 'report.html',
        // openReport: true,
        inlineSource: true,
      },
    ],
  ],
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
};

export default config;
