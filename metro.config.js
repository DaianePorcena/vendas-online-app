const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      // Define o alias para a pasta assets
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
