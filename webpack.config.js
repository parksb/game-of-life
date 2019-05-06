const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.join(process.cwd(), "dist"),
		libraryTarget: "umd",
		filename: "[name].js"
	},
	externals: ["inferno"],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"]
	},
	module: {
		rules: [{
			test: /\.(js|jsx|tsx|ts)$/,
			loaders: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new CleanWebpackPlugin({})
	],
};
