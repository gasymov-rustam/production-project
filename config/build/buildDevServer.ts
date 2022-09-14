import { BuildOptions } from "./types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = ({ port, isOpen }: BuildOptions): DevServerConfiguration => {
  return {
    port,
    open: isOpen,
  };
};
