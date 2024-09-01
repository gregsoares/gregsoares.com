const path = require('path');
const MiniCssExtractPluginLoader = require('mini-css-extract-plugin').loader;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        MiniCssExtractPlugin: MiniCssExtractPluginLoader,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
