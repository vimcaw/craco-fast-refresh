const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshBabelPlugin = require('react-refresh/babel');

module.exports = {
  overrideCracoConfig: ({ cracoConfig, context: { env } }) => {
    const isDevelopment = env === 'development';
    if (isDevelopment) {
      // Configure Babel plugin
      cracoConfig.babel.plugins.push(ReactRefreshBabelPlugin);
      // Configure Webpack plugin
      cracoConfig.webpack.plugins.push(new ReactRefreshWebpackPlugin());
    }

    // Always return the config object.
    return cracoConfig;
  },
};
