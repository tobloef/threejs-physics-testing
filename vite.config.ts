import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";

export default defineConfig({
  root: './src/',
  plugins: [
    wasm()
  ]
})
