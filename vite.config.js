import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    // host:'192.168.0.104',
    // port:3001
    // proxy: {
    //   '/api': {
    //     target:'http://127.0.0.1:4002',
    //     changeOrigin:true,
    //     rewrite: path => path.replace(/^\/api/,'')
    //   }
    // }
  }
})
