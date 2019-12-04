const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const BUILD_DIR = path.resolve(__dirname, "public");
const APP_DIR = path.resolve(__dirname, "src");
// console.log(BUILD_DIR);
// console.log(APP_DIR);
// console.log(path.resolve(__dirname, "/src"));
module.exports = {

    entry: path.join(__dirname, "./src/index.js"),
    module: {
      rules: [
        
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
             presets: ['es2015', 'react']
            } 
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              query: {
                modules: true,
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            },
            "postcss-loader"
          ]
        },
        {
          test: /\.md$/,
          use: ["babel!react-markdown"]
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    resolve: {
      enforceExtension: false,
      extensions: ['.js', '.jsx']
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      // compress: true,
      port: 9000
      // hot: true,
      // open: true,
    },
    output: {
      path: path.join(__dirname, "dist"),
      publicPath: "/",
      filename: "bundle.js"
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
};
