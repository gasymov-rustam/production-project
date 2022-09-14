import HTMLWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import type { BuildOptions } from "./types";

export const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
  ];
};
