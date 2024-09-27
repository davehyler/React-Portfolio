import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002, //Still have "JATE" in 3000 and yet no process can seem to even find anything running on 3000... enjoy port 3002...
    open: true
  }
})
