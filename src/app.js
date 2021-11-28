import fastify from 'fastify';
import path from 'path';
import swagger from 'fastify-swagger';
import { userRoutes } from './resources/users/user.router.js';
// const fastify = require('fastify');
// const path = require('path');
// const { userRoutes } = require('./resources/users/user.router');

const api = path.resolve('./doc/api.yaml');
console.log(api);
const app = fastify({
  logger: true,
});

app.register(swagger, {
  exposeRoute: true,
  routePrefix: '/doc',
  mode: 'static',
  specification: {
    path: api,
  },
});

app.get('/', async () => 'Service is running!');

app.register(userRoutes);

export default app;
