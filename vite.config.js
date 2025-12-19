import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Assure-toi que 'portfolio-vue' est bien le nom exact de ton dépôt GitHub
  base: '/portfolio-vue/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      // Cette méthode remplace avantageusement path.resolve(__dirname)
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
