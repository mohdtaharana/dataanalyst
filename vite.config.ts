import { defineConfig } from 'vite'
import pages from '@hono/vite-cloudflare-pages'
import fs from 'fs'

let localKey = ''
try {
  const raw = fs.readFileSync('.dev.vars', 'utf8')
  const match = raw.match(/POOLSIDE_API_KEY=(.+)/)
  if (match) {
    localKey = match[1].trim()
  }
} catch (e) {}

export default defineConfig({
  plugins: [pages()],
  define: {
    __POOLSIDE_API_KEY__: JSON.stringify(localKey)
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild'
  }
})
