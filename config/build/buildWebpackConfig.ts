import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { moduleBuildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: moduleBuildLoaders(options),
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
