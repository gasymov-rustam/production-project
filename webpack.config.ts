import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config';
import type { BuildEnv, BuildPaths } from './config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const mode = env.mode ?? 'development';
  const isDev = mode === 'development';
  const PORT = env.port ?? 3000;
  const isOpen = true;

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    isOpen,
    port: PORT,
  });

  return config;
};
