import {
  bGetAll,
  bGet,
  bRemove,
  bUpdate,
  bSave,
} from './board.memory.repository';
import { Board } from './board.model';

export const getAll = () => bGetAll();

export const get = (id: string) => bGet(id);

export const remove = (id: string) => bRemove(id);

export const update = (id: string, board: Board) => bUpdate(id, board);

export const save = (board: Board) => bSave(new Board(board));
