// const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

// router.route('/').get(async (req, res) => {
//   const users = await usersService.getAll();
//   // map user fields to exclude secret fields like "password"
//   res.json(users.map(User.toResponse));
// });

// module.exports = router;

const userRoutes = (fastify, options, done) => {
  fastify.get('/users', async (req, res) => {
    const users = await usersService.getAll();
    res.send(users.map(User.toResponse));
  });

  done();
};

module.exports = { userRoutes };
