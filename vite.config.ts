import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import { defaultViteF3vConfig } from 'f3v';
import { defu } from 'defu';
import UnoCSS from 'unocss/vite';
import vue from '@vitejs/plugin-vue';
import ssr from 'vike/plugin';
import path from 'node:path';
// import { vavite } from 'vavite';
// import topLevelAwait from 'vite-plugin-top-level-await';

const { buildSteps, ...config } = defaultViteF3vConfig;


const myConfig = {
  server: {
    port: 3000,
  },
  optimizeDeps: {
    exclude: ['functions/*']
  },
  plugins: [
    // vavite({
    //   handlerEntry: '/handler.ts',
    //   serveClientAssetsInDev: true,
    // }),
    ssr({ prerender: true }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    UnoCSS(),
    // topLevelAwait()
  ],
  build: {
    rollupOptions: {
      external: ['f3v']
    }
  },
  resolve: {
    dedupe: ['vue'],
    alias: {
      '#': path.resolve('.'),
      '~/': path.resolve('./'),
      '~/app/': path.resolve('./app/')
    },
  },
} satisfies UserConfig

export default defineConfig(defu(config, myConfig));