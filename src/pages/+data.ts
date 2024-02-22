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
          '> Logs from Dev, Tests;\n' +
          '> Api (analytics, remove cache);\n',
        url: '#'
      },
      {
        imageId: 'peov461sq2ldedfscwvc',
        title: 'Design',
        description:
          '> Logs from Dev, Tests;\n' +
          '> Api (analytics, remove cache);\n',
        url: '#'
      },
      {
        imageId: 'peixkmv2kja2o3lpz0xt',
        title: 'Develop',
        description:
          '> API with trace debug mode (health, log, remove cache);\n' +
          '> Types from backend;\n' +
          '> Mark design as unconfirmed;\n' +
          '> Access to test artifacts;\n',
        url: '#'
      },
    ] satisfies IDataRotateCard[]
  }
}