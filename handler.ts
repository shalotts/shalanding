import awsLambdaFastify from '@fastify/aws-lambda';
import { AppModule, HttpModule } from 'f3v';
import { IncomingMessage, ServerResponse } from 'node:http';
import config from './sha.config.ts';
export const App = async () => {
  const http = new HttpModule(config.fastifyInstanceOptions);
  const FastifyInstance = await http.createServer();
  const $sha = new AppModule(FastifyInstance, config);
  await $sha.create();
  await $sha.app.ready();

  return $sha.app;
};

export const proxy = async () => {
  const app = await App();
  return awsLambdaFastify(app);
}

export const handler = async (request: IncomingMessage, reply: ServerResponse) => {
  const app = await App();

  app.server.emit('request', request, reply);
}

export default handler;