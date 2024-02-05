import type { Config } from 'vike/types'
export default {
  onRenderHtml: 'import:f3v/renderer/onRenderHtml:default',
  onRenderClient: 'import:f3v/renderer/onRenderClient:default',
  passToClient: ['pageProps', 'urlPathname', 'is404', 'urlParsed'],
  meta: {
    title: {
      // Make `title` value available on both the server and client
      env: {
        server: true,
        client: true,
      },
    },
    description: {
      // Make `description` value available only on the server-side
      env: { server: true },
    },
  },
} satisfies Config;