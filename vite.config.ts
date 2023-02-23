import path from 'path'
import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteImagemin from 'vite-plugin-imagemin'

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
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7,
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9],
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
})
