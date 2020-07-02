const browserConfig = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './build/src/bundle.js',
    },
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { presets: ['@babel/preset-react'] },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: './build/assets',
                    publicPath: './assets'
                },
            },
        ],
    },
};

const serverConfig = {
    mode: 'production',
    entry: './server.js',
    target: 'node',
    output: {
        path: __dirname,
        filename: './build/index.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { presets: ['@babel/preset-react'] },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: './build/assets',
                    publicPath: './assets'
                },
            },
        ],
    },
};

module.exports = [browserConfig, serverConfig];
