import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config";
import type { BuildPaths } from "./config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";
const PORT = 3000;
const isOpen = true;

const config: Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
  isOpen,
  port: PORT,
});

export default config;
