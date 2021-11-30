import fastify from 'fastify';
import path from 'path';
import swagger from 'fastify-swagger';
import { userRoutes } from './resources/users/user.router.js';


const api = path.resolve('./doc/api.yaml');
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
