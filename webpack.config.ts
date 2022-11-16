import path from 'path';
import { Configuration } from 'webpack';

import type { BuildEnv, BuildPaths } from './config';
import { buildWebpackConfig } from './config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode = env.mode ?? 'development';
  const apiUrl = env.apiUrl ?? 'http://localhost:8000';
  const isDev = mode === 'development';
  const PORT = env.port ?? 3000;
  const isOpen = true;

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    isOpen,
    apiUrl,
    port: PORT,
    project: 'frontend',
  });

  return config;
};
