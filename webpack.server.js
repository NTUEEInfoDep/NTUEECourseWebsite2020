const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: {
    server: "./client/server.jsx",
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
