import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { ModuleOptions, RuleSetRule } from "webpack";
import type { BuildOptions } from "./types";

const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev ? "[path][name]--[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [typescriptLoader, cssLoader];
};

export const moduleBuildLoaders = (options: BuildOptions): ModuleOptions => {
  return {
    rules: buildLoaders(options),
  };
};
