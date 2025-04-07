module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
      ],
      plugins: [
        [
          'module:react-native-dotenv',
          {
            envName: 'APP_ENV',
            moduleName: '@env',
            path: '.env',
          },
        ],
        [
          'module-resolver', 
            {
            root: ['./'],
            alias: {
              '@': './',
              '@tailWindGlobalCss' : './app/',
              '@components': './src/components/',
              '@images' : './src/assets/images',
              '@fonts' : './src/assets/fonts',
              '@styles' : './src/assets/styles/',
              '@utils' : './src/utils/',
              '@screens' : './src/screens/',
              '@services' : './src/services/'
            },
          }
        ],
        ['react-native-paper/babel']
      ],
    };
  };