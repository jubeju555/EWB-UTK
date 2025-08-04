// Vite Configuration for EWB-UTK Website
// This file configures the build tool and development server

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Export Vite configuration
export default defineConfig({
  // Plugins extend Vite's functionality
  plugins: [
    react() // Enables React JSX transformation and hot reload
  ],
  
  // Configure module resolution for cleaner imports
  resolve: {
    alias: {
      // Enable @/ imports for src folder (e.g., import Component from '@/components/Component')
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  
  // Development server configuration
  server: {
    host: true,  // Allow external connections (for testing on mobile devices)
    port: 3000,  // Development server port
  },
  
  // Production build configuration
  build: {
    outDir: 'dist',      // Output directory for built files
    assetsDir: 'assets', // Subdirectory for CSS, JS, and other assets
    // Vite automatically optimizes bundle size, code splitting, and compression
  },
})
