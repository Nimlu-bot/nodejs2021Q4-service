// const usersRepo = require('./user.memory.repository');
import { userGetAll, userGet } from './user.memory.repository.js';

export const getAll = () => userGetAll();
export const get = (id) => userGet(id);
