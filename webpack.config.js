// const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dest');
const APP_DIR = path.resolve(__dirname, 'webapp');

const config = {
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    entry: `${APP_DIR}/Main.jsx`,
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.less$/,
                include: APP_DIR,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader',
                }],
            },
        ],
    },
};

module.exports = config;
