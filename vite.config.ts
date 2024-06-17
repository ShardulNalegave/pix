import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import MillionLint from '@million/lint';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

export default defineConfig(async () => ({
  plugins: [
    MillionLint.vite(),
    react(),
    TanStackRouterVite(),
  ],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      ignored: ["**/src-tauri/**"]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));