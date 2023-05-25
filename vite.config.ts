import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

export default defineConfig({
  plugins: [react()],
  base:process.env.NODE_ENV === "production" ? "/biconomy-abstraction-wallet/" : "/", // then print to the console: 
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
            buffer: true
        })
    ]
    },
  },
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      util: "util",
    },
  },
});