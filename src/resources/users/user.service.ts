import {
  uGetAll,
  uGet,
  uRemove,
  uUpdate,
  uSave,
} from './user.memory.repository';
import { User } from './user.model';

export const getAll = () => uGetAll();
export const get = (id: string) => uGet(id);
export const remove = (id: string) => uRemove(id);
export const update = (id: string, user: User) => uUpdate(id, user);
export const save = (user: User) => uSave(new User(user));
