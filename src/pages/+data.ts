import type { PageContext } from 'vike/types';

export const data = async (pageContext: PageContext) => {
  return {
    env: import.meta.env
  }
}