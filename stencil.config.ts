import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stenciljs-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  watchIgnoredRegex: /\.*\.json$/,
  testing: {
    browserHeadless: "new",
    transform: {
      '^.+\\.svg$': './svg-mock-transformer.js',
    },
    moduleNameMapper: {
      '^tinymce/tinymce$': '<rootDir>/tinymce-mock.js',
      '^tinymce.*\\.(css|scss|less)$': '<rootDir>/module-mock.js',
      '^tinymce/(models|icons|themes|plugins)/.*': '<rootDir>/module-mock.js',
    },
    reporters: [
      'default',
      [
        'jest-junit',
        {
          outputDirectory: './target/reports',
          outputName: 'jest-junit.xml',
        },
      ],
    ],
    transformIgnorePatterns: ['./node_modules/(?!@lmig/.*)'],
    watchPathIgnorePatterns: [
      '<rootDir>/../target/',
      '<rootDir>/src/assets/api-docs/',
    ],
    collectCoverage: true,
    coverageDirectory: '../target/jest/coverage',
    testResultsProcessor: './node_modules/jest-json-reporter',
    coverageThreshold: {
      // @TODO Update!!!!
      global: {
        // branches: 80,
        // functions: 85,
        // lines: 85,
        // statements: 85
      },
    },
  },
};
