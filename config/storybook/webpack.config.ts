import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

import type { BuildPaths } from '../build';
import { buildCssLoader } from '../build';

export default ({ config }: { config: Configuration }) => {
  const paths: Pick<BuildPaths, 'src'> = { src: path.resolve(__dirname, '..', '..', 'src') };
  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoader(true));
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify('https://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};
