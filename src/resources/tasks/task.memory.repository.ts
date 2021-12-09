import {
  getAllEntities,
  getEntity,
  removeEntity,
  updateEntity,
  saveEntity,
} from '../../common/db.js';
import { Task } from './task.model';

const TABLE_NAME = 'Tasks';

const tGetAll = async () => getAllEntities(TABLE_NAME);

const tGet = async (id: string) => {
  const task = await getEntity(TABLE_NAME, id);
  if (!task) {
    return null;
  }
  return task;
};

const tRemove = async (id: string) => {
  const task = await removeEntity(TABLE_NAME, id);
  return task;
};

const tUpdate = async (id: string, task: Task) => {
  const entity = await updateEntity(TABLE_NAME, id, task);
  if (!entity) {
    console.error(`update couldn't find a task with id-${id}`);
  }
  return entity;
};

const tSave = async (task: Task) => saveEntity(TABLE_NAME, new Task(task));

export { tGetAll, tGet, tRemove, tUpdate, tSave };
