import { BuildOptions } from '../types';

export const buildBabelLoader = ({ isDev }: BuildOptions) => ({
  test: /\.(js|jsx|tsx)$/,
  exclude: /node-modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          'i18next-extract',
          { nsSeparator: '~', locales: ['en', 'ru'], keyAsDefaultValue: true },
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      ],
    },
  },
});
