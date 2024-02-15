import type { Config } from 'vike/types'
import f3vConfig from 'f3v/renderer/config'
export default {
  passToClient: ['pageProps', 'urlPathname', 'is404', 'urlParsed', 'urlOriginal'],
  extends: f3vConfig
} satisfies Config;