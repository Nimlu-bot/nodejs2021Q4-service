import fastify from 'fastify';
import path from 'path';
import swagger from 'fastify-swagger';
import { userRoutes } from './resources/users/user.router';
import { boardRoutes } from './resources/boards/board.router';
// import { taskRoutes } from './resources/tasks/task.router.js';

const api = path.resolve('./doc/api.yaml');
const app = fastify({
  logger: false,
});

app.register(swagger, {
  exposeRoute: true,
  routePrefix: '/doc',
  mode: 'static',
  specification: {
    baseDir: '',
    path: api,
  },
});

app.get('/', async () => 'Service is running!');

app.register(userRoutes);
app.register(boardRoutes);
// app.register(taskRoutes);
export default app;
