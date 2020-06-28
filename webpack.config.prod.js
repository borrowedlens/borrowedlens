const webpack = require('webpack');

const browserConfig = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        path: __dirname,
        filename: './functions/src/bundle.js',
    },
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
    mode: 'production',
    entry: './src/index.js',
    target: 'node',
    output: {
        path: __dirname,
        filename: './functions/index.js',
        libraryTarget: 'commonjs2',
    },
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
