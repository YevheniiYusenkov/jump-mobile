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
        'prettier/prettier': 0,
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
      },
    },
  ],
};
