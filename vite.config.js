import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
root: '.', // <-- asegúrate de estar en la raíz del proyecto
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
