import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss"
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'web.config', // path to your web.config
          dest: '' // destination directory, '' means root of the build directory
        }
      ]
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
})
