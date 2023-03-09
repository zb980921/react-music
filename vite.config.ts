import path from 'path'
import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${normalizePath(path.resolve('src/assets/css/variable.scss'))}';`,
      },
    },
  },
  plugins: [
    react(),
    viteEslint(),
    svgr(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve('src/assets/icons')],
    }),
  ],
})
