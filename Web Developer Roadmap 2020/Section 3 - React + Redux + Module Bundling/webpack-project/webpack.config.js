const path = require('path');

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