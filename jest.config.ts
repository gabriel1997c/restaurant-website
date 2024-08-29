export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^utils$': '<rootDir>/src/utils/index.ts',
    '^data$': '<rootDir>/src/data/index.ts',
    '^fields$': '<rootDir>/src/fields/index.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
