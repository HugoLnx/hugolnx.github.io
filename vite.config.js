import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'
import md from "unplugin-vue-markdown/vite";

export default {
  plugins: [
    vike({ prerender: true }),
    vue({ include: [/\.vue$/, /\.md$/] }),
    md(),
  ]
}
