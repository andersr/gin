import type { Options } from "tsup";

export const tsup: Options = {
  outDir: "dist",
  clean: true,
  dts: true,
  sourcemap: true,
  format: ["esm"],
  minify: true,
  entry: ["src/main.ts"],
  target: "node20",
};
