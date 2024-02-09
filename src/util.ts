import { Cloudinary } from '@cloudinary/url-gen';
import { inject } from 'vue';
import { contextKey } from 'f3v';
import type { PageContext } from 'vike/types';

export const cld = (CLOUDINARY_NAME: string, CLOUDINARY_KEY: string, CLOUDINARY_SECRET: string) => new Cloudinary({
  cloud: {
    cloudName: CLOUDINARY_NAME,
    apiKey: CLOUDINARY_KEY,
    apiSecret: CLOUDINARY_SECRET
  },
});

export function usePageContext() {
  return inject(contextKey) as PageContext;
}

export function useData() {
  const pageContext = usePageContext();
  const { data } = pageContext;

  return data;
}

export function useCloudinary() {
  return inject('cloudinary') as Cloudinary;
}