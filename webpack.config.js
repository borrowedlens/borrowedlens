const webpack = require('webpack');

const browserConfig = {
    mode: 'development',
    entry: './src/client.js',
    output: {
        path: __dirname,
        filename: './functions/src/client.js',
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { presets: ['@babel/preset-react'] },
            },
        ],
    },
};

const serverConfig = {
    mode: 'development',
    entry: './index.js',
    target: 'node',
    output: {
        path: __dirname,
        filename: './functions/index.js',
        libraryTarget: 'commonjs2',
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { presets: ['@babel/preset-react'] },
            },
        ],
    },
};

module.exports = [browserConfig, serverConfig];
