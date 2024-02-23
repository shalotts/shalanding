import type { PageContext } from 'vike/types';
import type { IDataRotateCard } from '#root/component/rotate-card/rotate-card.type.ts';

export interface IData {
  env: ImportMetaEnv
  cards: IDataRotateCard[]
}
export const data = async (pageContext: PageContext): Promise<IData> => {
  return {
    env: import.meta.env,
    cards: [
      {
        imageId: 'peov461sq2ldedfscwvc',
        title: 'DevOps',
        description:
          '> Automatization docker services (no kubes);\n' +
          '> Logs from Dev, Tests;\n' +
          '> Open-source only',
        url: '#'
      },
      {
        imageId: 'peixkmv2kja2o3lpz0xt',
        title: 'Design',
        description:
          '> Media storage (CDN);\n' +
          '> Statistics from app;',
        url: '#'
      },
      {
        imageId: 'm7xpje7ws0sxmh6kpdqc',
        title: 'Develop',
        description:
          '> API with trace debug mode (health, log, remove cache);\n' +
          '> Types from backend;\n' +
          '> Mark design as unconfirmed;\n' +
          '> Access to test artifacts;\n',
        url: '#'
      },
      {
        imageId: 'iqawmkelncqvvsa6ocvn',
        title: 'Testers',
        description:
          '> Statistics from app;\n' +
          '> Access to test artifacts;\n',
        url: '#'
      },
      {
        imageId: 'peov461sq2ldedfscwvc',
        title: 'PM',
        description:
          '> One entry point to all roles. SSO links;\n' +
          '> ...',
        url: '#'
      },
    ] satisfies IDataRotateCard[]
  }
}