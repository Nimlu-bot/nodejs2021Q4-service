import { FastifyPluginAsync } from 'fastify';
import { get, getAll, save, remove, update } from './task.service';
import { Task } from './task.model';

interface Params {
  id: string;
}
export const taskRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/boards/:boardId/tasks', async (_, res) => {
    const tasks = await getAll();
    res.send(tasks.map(Task.toResponse));
  });
  fastify.get('/boards/:boardId/tasks/:id', async (req, res) => {
    const { id } = req.params as Params;
    const task = await get(id);
    if (task) {
      res.send(Task.toResponse(task));
    } else {
      res.code(404).send('task not found');
    }
  });
  fastify.post('/boards/:boardId/tasks', async (req, res) => {
    const boardId = req.url.split('/')[2];
    const savedTask = await save({ ...(req.body as Task), boardId });
    res.code(201).send(Task.toResponse(savedTask as Task));
  });

  fastify.delete('/boards/:boardId/tasks/:id', async (req, res) => {
    const { id } = req.params as Params;
    await remove(id);
    res.code(204);
  });

  fastify.put('/boards/:boardId/tasks/:id', async (req, res) => {
    const { id } = req.params as Params;
    const task = await update(id, req.body as Task);

    res.code(200).send(Task.toResponse(task as Task));
  });
};
