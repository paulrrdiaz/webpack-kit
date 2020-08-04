const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = () => ({
  output: {
    filename: "[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
})