const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('../webpack.config');
config.entry = './src/index.tsx';
config.externals = [];
config.devServer = {
  contentBase: 'src/',
  historyApiFallback: true
};
config.plugins.push(new HtmlWebpackPlugin({
  template: './src/index.html',
  inject: 'body'
}));
module.exports = config;
