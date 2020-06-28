const webpack = require('webpack');

const browserConfig = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        path: __dirname,
        filename: './dist/src/bundle.js',
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { presets: ['react-app'] },
            },
        ],
    },
};

const serverConfig = {
    mode: 'development',
    entry: './src/index.js',
    target: 'node',
    output: {
        path: __dirname,
        filename: './dist/index.js',
        libraryTarget: 'commonjs2',
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { presets: ['react-app'] },
            },
        ],
    },
};

module.exports = [browserConfig, serverConfig];
