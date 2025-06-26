import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    allowedHosts: 'all',
    allowedHosts: ['16d7-152-56-156-95.ngrok-free.app'],
    host: true,
  }
})

