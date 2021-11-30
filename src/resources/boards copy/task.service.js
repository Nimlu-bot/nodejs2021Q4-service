import {
  tGetAll,
  tGet,
  tRemove,
  tUpdate,
  tSave,
} from './task.memory.repository.js';
import { Task } from './task.model.js';

export const getAll = () => tGetAll();

export const get = (id) => tGet(id);

export const remove = (id) => tRemove(id);

export const update = (id, task) => tUpdate(id, task);

export const save = (task) => tSave(new Task(task));
