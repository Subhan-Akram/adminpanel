import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import path from "path";
import { fileURLToPath } from "url";
import React from "@vitejs/plugin-react";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  server: {
    port: 3000,
  },

  plugins: [React(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
      constants: path.resolve(__dirname, "./src/constants"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      sullyIcons: path.resolve(__dirname, "./src/sullyIcons"),
      apiTwg: path.resolve(__dirname, "./src/apiTwg"),
      pages: path.resolve(__dirname, "./src/pages"),
      store: path.resolve(__dirname, "./src/store"),
      utils: path.resolve(__dirname, "./src/utils"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      theme: path.resolve(__dirname, "./src/theme"),
      "styles-components": path.resolve(__dirname, "./src/styles-components"),
      "routes-components": path.resolve(__dirname, "./src/routes-components"),
      lib: path.resolve(__dirname, "./src/lib"),
      features: path.resolve(__dirname, "./src/features"),
      assets: path.resolve(__dirname, "./src/assets"),
      helper: path.resolve(__dirname, "./src/helper"),
      apis: path.resolve(__dirname, "./src/apis"),

      slice: path.resolve(__dirname, "./src/slice"),
      globalStyles: path.resolve(__dirname, "./src/styles"),
    },
  },
  optimizeDeps: {
    include: [
      "@emotion/react",
      "@emotion/styled",
      "@mui/material/Tooltip",
      "@mui/material/Unstable_Grid2",
    ],
  },
});
