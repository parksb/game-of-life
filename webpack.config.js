const fs = require('fs');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {NoEmitOnErrorsPlugin, NamedModulesPlugin} = require('webpack');

// const {CommonsChunkPlugin, UglifyJsPlugin} = require('webpack').optimize;
// const nodeModules = path.join(process.cwd(), 'node_modules');
// const realNodeModules = fs.realpathSync(nodeModules);
// const genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');

const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];

module.exports = {
    entry: {
        main: './src/test.tsx'
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].chunk.js',
        crossOriginLoading: false
    },
    module: {
        rules: [/*{
            test: /\.less$/,
            use: [{
                loader: 'raw-loader'
            }, {
                loader: 'less-loader',
                options: {
                    sourceMap: false
                }
            }]
        }, */{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    },
    plugins: [
        new ProgressPlugin(),
        new NamedModulesPlugin({}),
        new NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(['dist']),
        new CircularDependencyPlugin({
            failOnError: false,
            exclude: /(\\|\/)node_modules(\\|\/)/
        }),
        new HtmlWebpackPlugin({
            template: 'src/layout.html',
            filename: './index.html',
            hash: false,
            inject: true,
            compile: true,
            favicon: false,
            minify: false,
            cache: true,
            showErrors: true,
            chunks: 'all',
            excludeChunks: [],
            title: 'React-Lab',
            xhtml: true,
            chunksSortMode: function sort(left, right) {
                let leftIndex = entryPoints.indexOf(left.names[0]),
                    rightIndex = entryPoints.indexOf(right.names[0]),
                    index = (leftIndex - rightIndex)
                ;
                return (index / Math.abs(index));
            }
        }),
        /*new UglifyJsPlugin({
            include: [
                /^vendor\.\w*\.js$/,
                /^inline\.\w*\.js$/,
                /^polyfills\.\w*\.js$/
            ]
        }),*/
        /*new CommonsChunkPlugin({
            name: ['inline'],
            minChunks: null
        }),
        new CommonsChunkPlugin({
            name: ['vendor'],
            minChunks: (module) => {
                return module.resource
                    && (module.resource.startsWith(nodeModules)
                        || module.resource.startsWith(genDirNodeModules)
                        || module.resource.startsWith(realNodeModules));
            },
            chunks: ['main']
        }),
        new CommonsChunkPlugin({
            name: ['main'],
            minChunks: 2,
            async: 'common'
        })*/
    ],
    devServer: {
        port: 4200,
        historyApiFallback: true
    },
    resolve: {
        symlinks: true,
        modules: ['node_modules'],
        extensions: [".ts", ".tsx", ".js", ".json"],
        mainFields: ['browser', 'module', 'main']
    }
};
