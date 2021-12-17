import {
  getAllEntities,
  getEntity,
  removeEntity,
  updateEntity,
  saveEntity,
} from '../../common/db';
import { Board } from './board.model';

const TABLE_NAME = 'Boards';

/**
 * get all boards from database
 * @returns  All entities in specific table  Promise\<Board[]\>
 */

const bGetAll = async () => getAllEntities(TABLE_NAME) as Board[];

/**
 * get board from database with id
 * @param  id - id of board string
 * @returns  board with specific id or undefined  Promise\<Board| undefined\>
 */
const bGet = async (id: string) => {
  const board = await getEntity(TABLE_NAME, id);
  return board as Board | undefined;
};

/**
 * remove board from database with id
 * @param  id - id of board string
 * @returns    Promise<void>
 */
const bRemove = async (id: string) => {
  try {
    await removeEntity(TABLE_NAME, id);
  } catch (error) {
    console.error(`remove couldn't find a board with id-${id}`);
  }
};

/**
 * update board in database with id
 * @param  id - id of board string
 * @param  board - new board data Board
 * @returns    board with specific id or undefined  Promise\<Board| undefined\>
 */

const bUpdate = async (id: string, board: Board) => {
  const entity = await updateEntity(TABLE_NAME, id, board);
  if (!entity) {
    console.error(`update couldn't find a board with id-${id}`);
  }
  return entity as Board | undefined;
};

/**
 * save board in database with id
 * @param  board -  new board data Board
 * @returns  board with specific id or undefined  Promise\<Board| undefined\>
 */
const bSave = async (board: Board) =>
  saveEntity(TABLE_NAME, board) as Board | undefined;

export { bGetAll, bGet, bRemove, bUpdate, bSave };
