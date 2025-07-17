const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/renderer.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "." },
        { from: "src/desserts.json", to: "desserts.json" },
        { from: "src/beans.json", to: "beans.json" },
      ],
    }),
  ],
};
