const path = require('path');

console.log(path.resolve(__dirname, '../src/index.js'));
module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: ['eslint-loader'],
      },
      // This is compiling but just to be safe is the passed loaders are not
      // executed consecutively I will use enforce: 'pre' to be shure that eslint
      // runs before the transpilation
      { test: /\.(.js|.jsx)$/, use: ['babel-loader'] },
    ],
  },
  resolve: {
    enforceExtension: false,
    // extensions: ['.js','.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    // compress: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};
