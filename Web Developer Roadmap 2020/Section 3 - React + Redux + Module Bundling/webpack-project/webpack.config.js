const path = require('path');

console.log(__dirname + " " + "smuuuuuut");
module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: path.resolve(__dirname + '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(.js|.jsx)$/,
                use: ["babel-loader"],
                exclude: '/node_modules/'
            },
        ]
    },
    resolve: {
        enforceExtension: false,
        alias: {
            // Components: 
        }
    }
};