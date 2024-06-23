/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"; // Import the plugin here

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ['tests/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
  resolve: {
    alias: {
      '@': '/src',
      "plotly.js-dist": "/tests/mocks/plotly.js",
    }
  }
});