import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { resolve } from "path";
// import styleImport from 'vite-plugin-style-import'
// import viteCompression from 'vite-plugin-compression'
// import externalGlobals from 'rollup-plugin-external-globals'
// import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
// import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      /*      '/images': 'src/assets/images',
      styles: resolve(__dirname, 'src/styles'),
      router: resolve(__dirname, 'src/router'),
      views: resolve(__dirname, 'src/views'),
      components: resolve(__dirname, 'src/components'),
      data: resolve(__dirname, 'src/data'),
      utils: resolve(__dirname, 'src/utils'),
      src: resolve(__dirname, 'src'),
      assets: resolve(__dirname, 'src/assets'),
      mobile: resolve(__dirname, 'src/views/Mobile'),
      PC: resolve(__dirname, 'src/views/PC'),
      '/pic': 'src/assets/images/pic',*/
    },
  },
  plugins: [
    vue(),
    // 按需引入组件
    // ViteComponents({ customComponentResolvers: [ElementPlusResolver()] }),
    // 按需引入样式
    // styleImport({
    //     libs: [
    //         {
    //             libraryName: 'element-plus',
    //             esModule: true,
    //             resolveStyle: name => `element-plus/lib/theme-chalk/${name}.css`,
    //         },
    //     ],
    // }),
    /*    viteCompression({
      //生成压缩包gz
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    html({
      minify: true,
    }),*/
  ],

  // 引入全局scss文件
  css: {
    preprocessorOptions: {
      // scss: {
      //     additionalData: '@import "./src/styles/variables";',
      // },
    },
  },
  build: {
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 取消计算文件大小，加快打包速度
    brotliSize: false,
    sourcemap: true,
    // assetsDir: 'static/img',
    rollupOptions: {
      //     output: {
      //         chunkFileNames: 'static/js/[name]-[hash].js',
      //         entryFileNames: 'static/js/[name]-[hash].js',
      //         // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      //     },

      //     // 配置CDN
      external: ["element-plus", "vue"],
      plugins: [
        // externalGlobals({
        //   vue: 'Vue',
        //   'element-plus': 'ElementPlus',
        //   'element-plus/dist/index.css': 'foo',
        // }),
      ],
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      // 字符串简写写法
      // '/server': 'http://10.194.171.72/server/rest/services/Hosted/XFWWSGX20211215/SceneServer',
      // 选项写法
      "/server": {
        target:
          "http://10.194.171.72/server/rest/services/Hosted/XZWSJ3D/SceneServer",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ""),
      },
    },
  },
});
