const webpack = require('webpack');

const browserConfig = {
    mode: 'production',
    entry: './src/client.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js',
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
    entry: './src/server.js',
    target: 'node',
    output: {
        path: __dirname,
        filename: './dist/server.js',
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
