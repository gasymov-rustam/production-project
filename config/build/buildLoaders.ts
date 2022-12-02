import type { ModuleOptions, RuleSetRule } from 'webpack';

import { buildBabelLoader, buildCssLoader } from './loaders';
import type { BuildOptions } from './types';

const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  const cssLoader = buildCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // typescriptLoader,
    cssLoader,
  ];
};

export const moduleBuildLoaders = (options: BuildOptions): ModuleOptions => ({
  rules: buildLoaders(options),
});
