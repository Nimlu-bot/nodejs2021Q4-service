import {
  getAllEntities,
  getEntity,
  removeEntity,
  updateEntity,
  saveEntity,
} from '../../common/db.js';
import { Board } from './board.model';

const TABLE_NAME = 'Boards';

const bGetAll = async () => getAllEntities(TABLE_NAME);

const bGet = async (id: string) => {
  const board = await getEntity(TABLE_NAME, id);
  if (!board) {
    return null;
  }
  return board;
};

const bRemove = async (id: string) => {
  try {
    await removeEntity(TABLE_NAME, id);
  } catch (error) {
    console.error(`remove couldn't find a board with id-${id}`);
  }
};

const bUpdate = async (id: string, board: Board) => {
  const entity = await updateEntity(TABLE_NAME, id, board);
  if (!entity) {
    console.error(`update couldn't find a board with id-${id}`);
  }
  return entity;
};

const bSave = async (board: Board) => saveEntity(TABLE_NAME, board);

export { bGetAll, bGet, bRemove, bUpdate, bSave };
