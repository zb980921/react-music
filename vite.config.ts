import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const cwd = process.cwd()
function resolvePath(pathString: string) {
  return path.resolve(cwd, pathString)
}

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${resolvePath(
          'src/assets/css/variable.scss',
        )}';`,
      },
    },
  },
  plugins: [react()],
})
