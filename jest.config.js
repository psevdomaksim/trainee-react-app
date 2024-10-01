module.exports = {
    testEnvironment: 'jsdom', // Required for React components
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform .js and .jsx files using Babel
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Include relevant extensions
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js', // Mock CSS imports
    },

    transformIgnorePatterns: ["/node_modules/(?!axios).+\\.js$"],
  };