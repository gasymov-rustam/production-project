import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { BuildOptions } from './types';

export const buildPlugins = ({
  paths,
  isDev,
  apiUrl,
  project,
}: BuildOptions): WebpackPluginInstance[] => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
  ];

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerPort: 3002,
      })
    );
  }

  return plugins;
};
