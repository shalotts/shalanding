import { Cloudinary } from '@cloudinary/url-gen';
import { inject } from 'vue';
import type { PageContext } from 'vike/types';
import type { IData } from '#pages/+data.ts';

export function usePageContext() {
  return inject('sha_ctx__oOfjIX') as PageContext;
}

export function useData() {
  const pageContext = usePageContext();
  const { data } = pageContext as { data: IData };

  return data;
}

export function useCloudinary() {
  return inject('cloudinary') as Cloudinary;
}

export const cldImageUrl = (publicID: string) => {
  const cld = useCloudinary();
  const id = 'shalotts-landing/' + publicID;
  return removeUrlParams(cld.image(id).toURL());
}

export const removeUrlParams = (url: string) => url.split('?')[0];