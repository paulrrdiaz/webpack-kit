const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/templates/index.html",
    }),
  ],
});
