import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output directory for production build
    outDir: 'dist',
    // Generate sourcemaps for production debugging
    sourcemap: false,
    // Minification using esbuild (faster and no extra dependencies)
    minify: 'esbuild',
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Rollup options for code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: false,
    open: true,
  },
})
