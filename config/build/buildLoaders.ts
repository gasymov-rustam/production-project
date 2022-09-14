import type { ModuleOptions, RuleSetRule } from "webpack";

const buildLoaders = (): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader];
};

export const moduleBuildLoaders: ModuleOptions = {
  rules: buildLoaders(),
};
