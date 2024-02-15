import 'virtual:uno.css';
import '@unocss/reset/normalize.css';
import '@unocss/reset/tailwind-compat.css';
import '@fontsource-variable/jetbrains-mono';

import type { App } from 'vue';
import type { PageContext } from 'vike/types';
import { Cloudinary } from '@cloudinary/url-gen';

export default function onCreateApp(app: App, pageContext: PageContext) {
  const { data } = pageContext;
  const { VITE_CLOUDINARY_NAME, VITE_CLOUDINARY_KEY, VITE_CLOUDINARY_SECRET } = (data as any).env;
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: VITE_CLOUDINARY_NAME,
      apiKey: VITE_CLOUDINARY_KEY,
      apiSecret: VITE_CLOUDINARY_SECRET
    },
  })

  app.provide('cloudinary', cloudinary)
}