module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          images: './src/images',
          navigation: './src/navigation',
          screens: './src/screens',
          store: './src/store',
        },
      },
    ],
  ],
};
