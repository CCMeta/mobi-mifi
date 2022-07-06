import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default {
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "font-size-sm": "13px",
          "font-size-md": "15px",
          "font-size-lg": "17px",
          "action-bar-button-danger-color": "#7232dd",
          "action-bar-button-warning-color": "#3eaf7c",
        },
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/less`,
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // assetFileNames: "[name][extname]",
        // entryFileNames: "[name].js",
      }
      // https://rollupjs.org/guide/en/#big-list-of-options
    }
  },
};
