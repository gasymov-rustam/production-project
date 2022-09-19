import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types';

export const buildDevServer = ({ port, isOpen }: BuildOptions): DevServerConfiguration => ({
  port,
  open: isOpen,
  historyApiFallback: true,
  hot: true,
});
