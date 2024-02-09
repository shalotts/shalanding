import awsLambdaFastify from '@fastify/aws-lambda'
import { AppModule, HttpModule } from 'f3v';
import config from './sha.config.ts';
export const proxy = async () => {
  const http = new HttpModule(config.fastifyInstanceOptions);
  const FastifyInstance = await http.createServer();
  const $sha = new AppModule(FastifyInstance, config);
  await $sha.create();

  console.log('CREATED');

  return awsLambdaFastify($sha.app)
};

export default { proxy };