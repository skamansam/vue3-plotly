// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

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
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'vue3-plotly',
      // the proper extensions will be added
      fileName: 'vue3-plotly',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'plotly.js', 'plotly.js-dist-min', 'plotly.js-dist'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          'plotly.js-dist': 'plotly.js-dist',
        },
      },
    },
    outDir: 'dist'
  }
})
