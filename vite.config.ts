import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import { defaultViteF3vConfig } from 'f3v';
import { defu } from 'defu';
import UnoCSS from 'unocss/vite';
import { vavite } from 'vavite';
import vue from '@vitejs/plugin-vue';
import ssr from 'vike/plugin';
import path from "node:path";
import url from 'node:url';

const root = path.dirname(url.fileURLToPath(import.meta.url));

const myConfig = {
  plugins: [
    vavite({
      handlerEntry: '/handler.ts',
      serveClientAssetsInDev: true,
    }),
    ssr(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    UnoCSS(),
  ],
  resolve: {
    dedupe: ['vue'],
    alias: [
      {
        find: '~/',
        replacement: `${ root }/`,
      },
      {
        find: '~/app/',
        replacement: `${ root }/app/`,
      },
      {
        find: '#root',
        replacement: `${ root }/src/`,
      },
    ],
  },
} satisfies UserConfig

export default defineConfig(defu(defaultViteF3vConfig, myConfig));