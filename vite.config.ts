import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import { defaultViteF3vConfig } from 'f3v';
import { defu } from 'defu';
import UnoCSS from 'unocss/vite';
import vue from '@vitejs/plugin-vue';
import ssr from 'vike/plugin';
import path from 'node:path';

const { buildSteps, ...config } = defaultViteF3vConfig;


const myConfig = {
  server: {
    port: 3000,
  },
  plugins: [
    // vavite({
    //   handlerEntry: '/handler.ts',
    //   serveClientAssetsInDev: true,
    // }),
    ssr(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    UnoCSS(),
  ],
  build: {
    rollupOptions: {
      external: [
        'f3v',
        'vike',
        'vavite'
      ]
    }
  },
  resolve: {
    dedupe: ['vue'],
    alias: {
      '#': path.resolve('.'),
    },
  },
} satisfies UserConfig

export default defineConfig(defu(config, myConfig));