import {
  tGetAll,
  tGet,
  tRemove,
  tUpdate,
  tSave,
} from './task.memory.repository';
import { Task } from './task.model';

export const getAll = () => tGetAll();

export const get = (id: string) => tGet(id);

export const remove = (id: string) => tRemove(id);

export const update = (id: string, task: Task) => tUpdate(id, task);

export const save = (task: Task) => tSave(task as Task);
