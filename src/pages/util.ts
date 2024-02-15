import { Cloudinary } from '@cloudinary/url-gen';
import { inject } from 'vue';
import type { PageContext } from 'vike/types';

export function usePageContext() {
  return inject('sha_ctx__oOfjIX') as PageContext;
}

export function useData() {
  const pageContext = usePageContext();
  const { data } = pageContext;

  return data;
}

export function useCloudinary() {
  return inject('cloudinary') as Cloudinary;
}