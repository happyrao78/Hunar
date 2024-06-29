import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target: 'https://newsapi.org/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      }
    }
  },
  plugins: [react()],
  build:{
    outDir: 'dist',
  },
})
