// const usersRepo = require('./user.memory.repository');
import {
  uGetAll,
  uGet,
  uRemove,
  uUpdate,
  uSave,
} from './user.memory.repository.js';
import { User } from './user.model.js';

export const getAll = () => uGetAll();
export const get = (id) => uGet(id);
export const remove = (id) => uRemove(id);
export const update = (id, user) => uUpdate(id, user);
export const save = (user) => uSave(new User(user));
