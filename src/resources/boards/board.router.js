import { get, getAll, save, remove, update } from './board.service.js';
import { Board } from './board.model.js';

export const boardRoutes = (fastify, options, done) => {
  fastify.get('/boards', async (req, res) => {
    const boards = await getAll();
    res.send(boards.map(Board.toResponse));
  });
  fastify.get('/boards/:id', async (req, res) => {
    const { id } = req.params;
    const board = await get(id);
    res.send(Board.toResponse(board));
  });
  fastify.post('/boards', async (req, res) => {
    const savedBoard = await save(req.body);
    res.code(201).send(Board.toResponse(savedBoard));
  });

  fastify.delete('/boards/:id', async (req, res) => {
    const { id } = req.params;
    await remove(id);
    res.code(204);
  });

  fastify.put('/boards/:id', async (req, res) => {
    const { id } = req.params;
    const board = await update(id, new Board(req.body));

    res.code(200).send(Board.toResponse(board));
  });

  done();
};
