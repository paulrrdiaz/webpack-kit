const webpack = require("webpack");
const { merge } = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/presets/load-presets");

module.exports = ({ mode = "production", presets = [] }) =>
  merge(
    {
      mode,
      output: {
        filename: "bundle.js",
      },
      module: {
        rules: [
          {
            test: /\.(jpg|png|webpm|svg)$/,
            use: "url-loader",
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          },
        ],
      },
      plugins: [new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
