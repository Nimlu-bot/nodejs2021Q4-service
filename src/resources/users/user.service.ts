import {
  uGetAll,
  uGet,
  uRemove,
  uUpdate,
  uSave,
} from './user.memory.repository';
import { User } from './user.model';

/**
 * get all users from database
 * @returns  All entities in specific table  Promise\<User[]\>
 */
export const getAll = () => uGetAll();
/**
 * get user in database from id
 * @param  id - id of user string
 * @returns  user with specific id or undefined  Promise\<User[]| undefined\>
 */
export const get = (id: string): Promise<User | undefined> => uGet(id);
/**
 * remove user in database from id
 * @param  id - id of user string
 * @returns    Promise<void>
 */
export const remove = (id: string): Promise<void> => uRemove(id);
/**
 * update user in database from id
 * @param  id - id of user string
 * @param  user - new user data User
 * @returns    user with specific id or undefined  Promise\<User[]| undefined\>
 */
export const update = (id: string, user: User): Promise<User | undefined> =>
  uUpdate(id, user);
/**
 * save user in database from id
 * @param  user -  new user data User
 * @returns  user with specific id or undefined  Promise\<User[]| undefined\>
 */
export const save = (user: User): Promise<User | undefined> =>
  uSave(new User(user));
