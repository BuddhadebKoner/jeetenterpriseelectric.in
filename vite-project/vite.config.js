import path from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure public assets are copied correctly during build
  publicDir: 'public',
  build: {
    // Copy public assets to dist folder
    copyPublicDir: true,
  },
})
