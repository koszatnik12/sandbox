const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dest');
const APP_DIR = path.resolve(__dirname, 'webapp');

const config = {
    output: {
        publicPath: '/',
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    entry: [
        `${APP_DIR}/Main.jsx`,
        'react-hot-loader/patch',
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        contentBase: BUILD_DIR,
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CopyWebpackPlugin([
            { from: './webapp/static', to: `${BUILD_DIR}/static` },
        ]),
    ],
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
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
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
            {
                test: /\.(html|xml|ico|svg|png|jpg)$/,
                include: APP_DIR,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader', // 'file-loader?name=[path][name].[ext]',
                },
            },
        ],
    },
};

module.exports = config;
