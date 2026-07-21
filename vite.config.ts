import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// Pertahankan plugin ini — dipakai untuk resolve asset dari Figma Make
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  ssgOptions: {
  script: 'async',
  formatting: 'minify',
  includedRoutes(paths) {
    const filtered = paths.filter((p) => !p.includes(':'))
    const kotaSlugs = [
      'salatiga', 'semarang', 'ungaran', 'boyolali',
      'demak', 'grobogan', 'sragen', 'temanggung', 'wonogiri',
    ]
    return [...filtered, ...kotaSlugs.map((s) => `/sedot-wc-${s}`)]
  },
},
  server: {
    host: true, // atau '0.0.0.0'
    port: 5173, // opsional
  },
  plugins: [
    figmaAssetResolver(),
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})