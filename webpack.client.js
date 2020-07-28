const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack = require("webpack");

module.exports = {
  entry: {
    bundle: "./client/src/components/index.jsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "bundle"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
    ],
  },
  devtool: "#eval-source-map", // for develop
  devServer: {
    stats: {
      children: false, // cleaner display on terminal
      maxModules: 0, // cleaner display on terminal
      colors: true,
      hot: true,
    },
    writeToDisk: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "client/html/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
