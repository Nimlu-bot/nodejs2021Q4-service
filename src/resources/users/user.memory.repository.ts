import {
  getAllEntities,
  getEntity,
  removeEntity,
  updateEntity,
  saveEntity,
} from '../../common/db';

import { User } from './user.model';

const TABLE_NAME = 'Users';

/**
 * get all users from database
 * @returns  All entities in specific table  Promise\<User[]\>
 */

const uGetAll = async () => getAllEntities(TABLE_NAME) as User[];

/**
 * get user in database from id
 * @param  id - id of user string
 * @returns  user with specific id or undefined  Promise\<User[]| undefined\>
 */

const uGet = async (id: string) => {
  const user = await getEntity(TABLE_NAME, id);
  if (!user) {
    console.error(`get couldn't find a user with id-${id}`);
  }
  return user as User | undefined;
};

/**
 * remove user in database from id
 * @param  id - id of user string
 * @returns    Promise<void>
 */

const uRemove = async (id: string) => {
  try {
    await removeEntity(TABLE_NAME, id);
  } catch (error) {
    console.error(`remove couldn't find a user with id-${id}`);
  }
};

/**
 * update user in database from id
 * @param  id - id of user string
 * @param  user - new user data User
 * @returns    user with specific id or undefined  Promise\<User[]| undefined\>
 */

const uUpdate = async (id: string, user: User) => {
  const entity = await updateEntity(TABLE_NAME, id, user);
  if (!entity) {
    console.error(`update couldn't find a user with id-${id}`);
  }
  return entity as User | undefined;
};

/**
 * save user in database from id
 * @param  user -  new user data User
 * @returns  user with specific id or undefined  Promise\<User[]| undefined\>
 */

const uSave = async (user: User) =>
  saveEntity(TABLE_NAME, user) as User | undefined;

export { uGetAll, uGet, uRemove, uUpdate, uSave };
