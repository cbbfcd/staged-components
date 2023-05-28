import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  outDir: "lib",
  dts: true,
  splitting: false,
  clean: true,
});
