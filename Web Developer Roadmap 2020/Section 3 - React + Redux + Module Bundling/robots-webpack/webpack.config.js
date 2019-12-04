const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, './src/index.js'),

  module: {
    rules: [
      { 
        test: /\.js$|jsx/, 
        exclude: /node_modules/,
        include: __dirname + "/",
        use: ['babel-loader'],
      },
      // // Add SASS support  - compile all .global.scss files and pipe it to style.css
      // {
      //   test: /\.global\.scss$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //     {
      //       loader: 'sass-loader'
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$|scss/,
      //   // use: ['style-loader', 'css-loader', 'sass-loader']
      //   use: [
      //     { loader: 'css-loader' },
      //     { loader: 'sass-loader' },
      //     { loader: 'style-loader' }
      //   ],
      //   // test: /\.(css|scss)$/,
      //   // exclude: /node-modules/,
      //   // use: ['style-loader', 'css-loader', 'sass-loader' ]
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
    ],
  },
  resolve: {
    enforceExtension: false,
    // extensions: ['.js','.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
