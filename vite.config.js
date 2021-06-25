import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path";
const srcPath = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: { 'process.env': {} },
  css: {
    preprocessorOptions: {
      sass: { additionalData: `@import "${srcPath}/styles/variables.scss"\n` },
      scss: { additionalData: `@import "${srcPath}/styles/variables.scss";\n` },
    },
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
