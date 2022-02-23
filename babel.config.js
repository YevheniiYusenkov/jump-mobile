module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@jump/screens': './src/screens/index.ts',
          '@jump/forms': './src/forms/index.ts',
          '@jump/components': './src/components/index.ts',
          '@jump/interfaces': './src/interfaces/index.ts',
          '@jump/contexts': './src/contexts/index.ts',
          '@jump/assets': './assets/index.ts',
          '@jump/themes': './themes/index.ts',
          '@jump/languages': './languages/index.ts',
          '@jump/api': './src/services/API/index.ts',
          '@jump/auth': './src/services/Auth/index.ts',
        },
      },
    ],
  ],
};
