module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'array-bracket-spacing': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single'],
        'prettier/prettier': 0,
      },
    },
  ],
};
