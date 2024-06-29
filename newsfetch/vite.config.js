import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'https://newsapi.org/'
    }
  },
  plugins: [react()],
  build:{
    outDir: 'dist',
  },
})
