import { URL, fileURLToPath } from "node:url";

import Sitemap from "vite-plugin-sitemap";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import zipPack from "vite-plugin-zip-pack";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({ hostname: "https://boekestijn.gxbs.me" }),
    zipPack({ outDir: "zip", outFileName: "boekestijn.zip" }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
