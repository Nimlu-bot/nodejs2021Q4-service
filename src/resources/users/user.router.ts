import { FastifyRequest, FastifyReply, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { get, getAll, save, remove, update } from './user.service';
import { User } from './user.model';

interface Body {
  id: string;
  name: string;
  login: string;
  password: string;
}

interface Params {
  id: string;
}

export const userRoutes: FastifyPluginAsync = fp(async (fastify) => {
  fastify.get('/users', async (_, res: FastifyReply) => {
    const users = await getAll();
    res.send(users.map(User.toResponse));
    // res.send('hi');
  });
  fastify.get('/users/:id', async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = req.params as Params;
    const user = await get(id);
    res.send(User.toResponse(user));
    res.send(id);
  });
  fastify.post('/users', async (req: FastifyRequest, res: FastifyReply) => {
    const savedUser = await save(req.body as Body);
    res.code(201).send(User.toResponse(savedUser));
  });

  fastify.delete(
    '/users/:id',
    async (req: FastifyRequest, res: FastifyReply) => {
      const { id } = req.params as Params;
      await remove(id);
      res.code(204);
    }
  );

  fastify.put('/users/:id', async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = req.params as Params;
    const user = await update(id, new User(req.body as Body));

    res.code(200).send(User.toResponse(user));
  });
}, '3.x');

// export const userRoutes = fp(routes);
