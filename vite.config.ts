import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { resolve } from "path"
import VueSetupExtend from "vite-plugin-vue-setup-extend"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueSetupExtend()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全局引入变量// 给导入的路径最后加上 ;
        additionalData: `@import '@/assets/main.scss';`,
      },
    },
  },
  // 构建为库
  build: {
    lib: {
      // 构建为库。如果指定了 build.lib，build.cssCodeSplit 会默认为 false。
      // __dirname的值是vite.config.ts文件所在目录
      entry: resolve(__dirname, "packages/index.ts"), // entry是必需的，因为库不能使用HTML作为入口。
      name: "q-ui", // 暴露的全局变量
      // fileName: "@jqw755/q-ui", // 输出的包文件名，默认是package.json的name选项
    },
    rollupOptions: {
      // 自定义底层的Rollup打包配置
      // https://rollupjs.org/configuration-options/
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue" /*"swiper", "qrcode", "element-plus" */],
      output: {
        // format: 'es', // 默认es，可选 'amd' 'cjs' 'es' 'iife' 'umd' 'system'
        exports: "named", // https://rollupjs.org/configuration-options/#output-exports
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          // 'vue-router': 'VueRouter', // 引入vue-router全局变量，否则router.push将无法使用
          // swiper: "Swiper",
          // qrcode: "qrcode",
          // "element-plus": "ElementPlus",
        },
      },
    },
    /** 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。
        默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。
        注意，在 lib 模式下使用 'es' 时，build.minify 选项不会缩减空格，因为会移除掉 pure 标注，导致破坏 tree-shaking。
        当设置为 'terser' 时必须先安装 Terser。（npm i terser -D）
    */
    minify: "terser", // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效。vite中已内置移除console的设置，只需此处配置一下
    terserOptions: {
      // 在打包代码时移除 console、debugger 和 注释
      compress: {
        drop_console: true, // 生产环境时移除console
        drop_debugger: true,
      },
      format: {
        comments: false, // 删除注释comments
      },
    },
  },
})
