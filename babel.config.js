module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@jump/common': './src/common/index.ts',
          '@jump/screens': './src/screens/index.ts',
          '@jump/forms': './src/forms/index.ts',
          '@jump/components': './src/components/index.ts',
          '@jump/interfaces': './src/interfaces/index.ts',
          '@jump/assets': './assets/index.ts',
        },
      },
    ],
  ],
};
