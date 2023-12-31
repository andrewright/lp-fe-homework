import { defineConfig } from 'vite'
import mkcert from "vite-plugin-mkcert"
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  plugins: [react(), mkcert()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    includeSource: ["src/test**/*.{ts, tsx}"],
    css: true,
  },
})
