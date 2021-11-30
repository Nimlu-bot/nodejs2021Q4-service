import { get, getAll, save, remove, update } from './task.service.js';
import { Task } from './task.model.js';

export const taskRoutes = (fastify, options, done) => {
  fastify.get('/boards/:boardId/tasks', async (req, res) => {
    const tasks = await getAll();
    res.send(tasks.map(Task.toResponse));
  });
  fastify.get('/boards/:boardId/tasks/:id', async (req, res) => {
    // const { id } = req.params;

    const task = await get(req.params.id);
    if (task) {
      res.send(Task.toResponse(task));
    } else {
      res.code(404).send('not found');
    }
  });
  fastify.post('/boards/:boardId/tasks', async (req, res) => {
    const boardId = req.url.split('/')[2];
    const savedTask = await save({ ...req.body, boardId });
    res.code(201).send(Task.toResponse(savedTask));
  });

  fastify.delete('/boards/:boardId/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await remove(id);
    res.code(204);
  });

  fastify.put('/boards/:boardId/tasks/:id', async (req, res) => {
    const { id } = req.params;
    console.log(
      `1111111111111111111111111111111111111111111111${JSON.stringify(
        req.body
      )}`
    );
    const task = await update(id, new Task(req.body));

    res.code(200).send(Task.toResponse(task));
  });

  done();
};
