const { merge } = require("webpack-merge");

const applyPresets = (env) => {
  const { presets } = env;
  const mergedPresets = [].concat(...[presets]);
  let mergedConfig = [];

  mergedConfig = mergedPresets.map((presetName) =>
    require(`./webpack.${presetName}`)(env)
  );

  return merge({}, ...mergedConfig);
};

module.exports = applyPresets;
