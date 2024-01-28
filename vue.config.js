const path = require('path');

module.exports = {
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/assets/stylus/_stylebase.styl'),
      ],
    },
  },
};
