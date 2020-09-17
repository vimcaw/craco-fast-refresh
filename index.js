const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshBabelPlugin = require('react-refresh/babel');

module.exports = {
  overrideCracoConfig: ({ cracoConfig, context: { env } }) => {
    const isDevelopment = env === 'development';
    if (isDevelopment) {
      if (!cracoConfig.babel) cracoConfig.babel = {};
      if (!cracoConfig.babel.plugins) cracoConfig.babel.plugins = [];
      if (!cracoConfig.webpack) cracoConfig.webpack = {};
      if (!cracoConfig.webpack.plugins) cracoConfig.webpack.plugins = [];

      // Configure Babel plugin
      cracoConfig.babel.plugins.push(ReactRefreshBabelPlugin);
      // Configure Webpack plugin
      cracoConfig.webpack.plugins.push(new ReactRefreshWebpackPlugin());
    }

    // Always return the config object.
    return cracoConfig;
  },
};
