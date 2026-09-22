import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// PWA (vite-plugin-pwa injectManifest) is disabled while Tailwind is being restored.
// Re-enable VitePWA + src/sw.ts after the UI is confirmed styled.
export default defineConfig({
  plugins: [react()],
})
