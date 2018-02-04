const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devServer: {
    compress: true,
    historyApiFallback: true,
    overlay: {
      errors: true
    }
  }
});
