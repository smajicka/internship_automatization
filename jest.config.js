/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
  };
  
  
  module.exports = {
      testMatch: [
      '**\\*test.tsx',
      '**/*test.tsx',
      'src\\**\\*.test.tsx',
      'src/**/*.test.tsx',
      '<rootDir>\\tests\\*.test.ts',
      '<rootDir>/src/**/*.test.tsx',
      'src/.*|(.|/)(.test).tsx?$'
    ],
  };
