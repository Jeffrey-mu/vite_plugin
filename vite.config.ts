import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import myPlugin from './my_plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  myPlugin()]
})
