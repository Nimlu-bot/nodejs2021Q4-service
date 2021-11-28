const fastify = require('fastify');
const path = require('path');
const { userRoutes } = require('./resources/users/user.router');

const app = fastify({
  logger: true,
});

app.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/doc',
  mode: 'static',
  specification: {
    path: path.join(__dirname, '../doc/api.yaml'),
  },
});

app.get('/', async () => 'Service is running!');

app.register(userRoutes);

module.exports = app;
