import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //Listen on all addresses at port 5173
    host: true,
    port: '5173',
  },
})