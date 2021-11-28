import { get, getAll } from './user.service.js';
import { User } from './user.model.js';

// const User = require('./user.model');

// router.route('/').get(async (req, res) => {
//   const users = await usersService.getAll();
//   // map user fields to exclude secret fields like "password"
//   res.json(users.map(User.toResponse));
// });

// module.exports = router;

export const userRoutes = (fastify, options, done) => {
  fastify.get('/users', async (req, res) => {
    const users = await getAll();
    res.send(users.map(User.toResponse));
  });
  fastify.get('/users?:id', async (req, res) => {
    const { id } = req.param;
    const users = await get(id);
    res.send(users.map(User.toResponse));
  });

  done();
};
