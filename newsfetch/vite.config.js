import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {

        target: 'http://localhost:8080',

//         target: 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=74816c3690434f50b56a475c71cd3b56',

        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react()],
  build:{
    outDir: 'dist',
  },
})
