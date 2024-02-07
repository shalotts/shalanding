import { defineConfig, defaultConfig } from 'f3v'
import { defu } from 'defu'
import type { IAppConfig } from 'f3v';

const shalottsConfig = await defaultConfig();

const myConfig = {
  mode: 'server',
} satisfies Omit<IAppConfig, 'listen'>

export default defineConfig(defu(shalottsConfig, myConfig));