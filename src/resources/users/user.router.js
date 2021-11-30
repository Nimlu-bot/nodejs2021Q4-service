import { get, getAll, save, remove, update } from './user.service.js';
import { User } from './user.model.js';

export const userRoutes = (fastify, options, done) => {
  fastify.get('/users', async (req, res) => {
    const users = await getAll();
    res.send(users.map(User.toResponse));
  });
  fastify.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await get(id);
    res.send(User.toResponse(user));
  });
  fastify.post('/users', async (req, res) => {
    const savedUser = await save(req.body);
    res.code(201).send(User.toResponse(savedUser));
  });

  fastify.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    await remove(id);
    res.code(204);
  });

  fastify.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await update(id, new User(req.body));

    res.code(200).send(User.toResponse(user));
  });

  done();
};
