import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  root: './src/',
  base: '/threejs-physics-testing/',
  build: {
    outDir: '../docs/'
  },
  plugins: [
    wasm(),
    topLevelAwait()
  ]
})
