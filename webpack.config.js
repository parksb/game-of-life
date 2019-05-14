const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (env, arg) => {
  const isProd = (arg.mode === 'production');
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.join(process.cwd(), "docs"),
      filename: "[name].[chunkhash].js",
      crossOriginLoading: false
    },
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    module: {
      rules: [{
        test: /\.scss$/,
        loader: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: 'global'
            }
          },
          {
            loader: "sass-loader",
            options: { includePaths: ["./node_modules"] }
          }
        ]
      }, {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }]
    },
    plugins: [
      isProd && new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: "./src/index.html" })
    ].filter(v => v),
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
  };
};
