import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import type { UserConfig } from "vitest/config";

const test = {
  globals: true,
  environment: "jsdom",
  setupFiles: ["src/__tests__/setupTests.ts"],
  threads: false,
  watch: false,
} as UserConfig["test"];

// @import "./src/client/styles/mixins.scss"
// https://vitejs.dev/config/
const isProd = process.env.NODE_ENV === "production";
export default defineConfig({
  plugins: [react()],
  server: { port: 7456 },
  build: {
    minify: false,
  },
  test,
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/client/styles/mixins.scss";\n `
      }
    }
  }
});
