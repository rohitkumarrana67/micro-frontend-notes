const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "rohit-microfrontend",
    projectName: "notes",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {});
};
