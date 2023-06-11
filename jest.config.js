module.exports = {
  setupFiles: [
    '<rootDir>/jest/commonMocks.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  preset: 'react-native',
};
