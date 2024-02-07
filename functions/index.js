const { proxy } = require.resolve("../dist/server/index.mjs");
export const handler = proxy;