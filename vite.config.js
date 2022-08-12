// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    global: {},
    'process.env': {}
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "stream": "stream-browserify",
      "util": "util/util.js"
    },
  },
  build: {
    lib: "vue3-plotly",
    outDir: 'dist'
  }
})
