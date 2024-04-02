import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        "bmat-styles": "./src/lib.mts"
      },
      formats: ["es", "cjs"]
    }
  }
});
