import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/tail-wish/' : '/',
  plugins: [react()],
  server: {
    host: true,
  }
}))