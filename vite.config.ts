import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import { defaultViteF3vConfig } from 'f3v';
import { defu } from 'defu';
import UnoCSS from 'unocss/vite';
import vue from '@vitejs/plugin-vue';
import ssr from 'vike/plugin';
import path from 'node:path';
import { vavite } from 'vavite';

const myConfig = {
  ssr: {
    noExternal: ['@cloudinary/html']
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    exclude: ['functions/*']
  },
  plugins: [
    vavite({
      handlerEntry: '/handler.ts',
      serveClientAssetsInDev: true,
    }),
    ssr({ prerender: true }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    UnoCSS(),
  ],
  resolve: {
    dedupe: ['vue'],
    alias: {
      '#': path.resolve('.'),
      '~/': path.resolve('./'),
      '~/app/': path.resolve('./app/'),
      '#root': path.resolve('./src/'),
      '#pages': path.resolve('./src/pages/')
    },
  },
} satisfies UserConfig

export default defineConfig(defu(defaultViteF3vConfig, myConfig));