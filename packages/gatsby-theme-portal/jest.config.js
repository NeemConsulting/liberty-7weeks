const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  transform: {
    ...tsjPreset.transform,
    '^.+\\.jsx?$': './jest/jest-preprocess.js',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  testMatch: tsjPreset.testMatch,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleNameMapper: {
    'src\\/scss\\/main\\.scss': '<rootDir>/jest/__mocks__/style-mocks.js',
    '^src(.*)$': '<rootDir>/src$1',
    '^integrations/(.*)$': '<rootDir>/integrations/$1',
    '^app-config/(.*)$': '<rootDir>/app-config/$1',
    '^.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './jest/__mocks__/file-mock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['./jest/test-setup.js', './jest/test-shims.js'],
};
