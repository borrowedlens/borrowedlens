const browserConfig = {
    mode: 'development',
    entry: './src/index.js',
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
                query: { presets: ['@babel/preset-react'] },
            },
        ],
    },
};

const serverConfig = {
    mode: 'development',
    entry: './server.js',
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
                query: { presets: ['@babel/preset-react'] },
            },
        ],
    },
};

module.exports = [browserConfig, serverConfig];
