const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/client.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js',
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
        ],
    },
};