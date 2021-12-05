import {
  bGetAll,
  bGet,
  bRemove,
  bUpdate,
  bSave,
} from './board.memory.repository.js';
import { Board } from './board.model.js';

export const getAll = () => bGetAll();

export const get = (id) => bGet(id);

export const remove = (id) => bRemove(id);

export const update = (id, board) => bUpdate(id, board);

export const save = (board) => bSave(new Board(board));
