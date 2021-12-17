import {
  getAllEntities,
  getEntity,
  removeEntity,
  updateEntity,
  saveEntity,
} from '../../common/db';
import { Task } from './task.model';

const TABLE_NAME = 'Tasks';

/**
 * get all tasks from database
 * @returns  All entities in specific table  Promise\<Task[]\>
 */

const tGetAll = async () => getAllEntities(TABLE_NAME) as Task[];

/**
 * get task from database with id
 * @param  id - id of task string
 * @returns  task with specific id or undefined  Promise\<Task| undefined\>
 */
const tGet = async (id: string) => {
  const task = await getEntity(TABLE_NAME, id);
  return task as Task | undefined;
};

/**
 * remove task from database with id
 * @param  id - id of task string
 * @returns    true if task deleted false otherwise Promise<boolean>
 */

const tRemove = async (id: string) => {
  const task = await removeEntity(TABLE_NAME, id);
  return task;
};

/**
 * update task in database with id
 * @param  id - id of task string
 * @param  task - new task data Task
 * @returns    task with specific id or undefined  Promise\<Task| undefined\>
 */
const tUpdate = async (id: string, task: Task) => {
  const entity = await updateEntity(TABLE_NAME, id, task);
  if (!entity) {
    console.error(`update couldn't find a task with id-${id}`);
  }
  return entity as Task | undefined;
};

/**
 * save task in database with id
 * @param  task -  new board data Board
 * @returns  task with specific id or undefined  Promise\<Task| undefined\>
 */

const tSave = async (task: Task) =>
  saveEntity(TABLE_NAME, new Task(task)) as Task | undefined;

export { tGetAll, tGet, tRemove, tUpdate, tSave };
