import { FastifyPluginAsync } from 'fastify';
import { get, getAll, save, remove, update } from './board.service';
import { Board } from './board.model';

interface Params {
  id: string;
}

export const boardRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/boards', async (_, res) => {
    const boards = await getAll();
    res.send(boards.map(Board.toResponse));
  });
  fastify.get('/boards/:id', async (req, res) => {
    const { id } = req.params as Params;
    const board = await get(id);
    if (board) res.send(Board.toResponse(board));
    else res.code(404).send('not found');
  });

  fastify.post('/boards', async (req, res) => {
    const savedBoard = await save(req.body as Board);
    res.code(201).send(Board.toResponse(savedBoard));
  });

  fastify.delete('/boards/:id', async (req, res) => {
    const { id } = req.params as Params;
    await remove(id);
    res.code(204);
  });

  fastify.put('/boards/:id', async (req, res) => {
    const { id } = req.params as Params;
    const board = await update(id, new Board(req.body as Board));

    res.code(200).send(Board.toResponse(board));
  });
};
