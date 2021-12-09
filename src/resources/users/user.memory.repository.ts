import {
  getAllEntities,
  getEntity,
  removeEntity,
  updateEntity,
  saveEntity,
} from '../../common/db';

import { User } from './user.model';

const TABLE_NAME = 'Users';

const uGetAll = async () => getAllEntities(TABLE_NAME);

const uGet = async (id: string) => {
  const user = await getEntity(TABLE_NAME, id);
  if (!user) {
    console.error(`get couldn't find a user with id-${id}`);
  }
  return user;
};

const uRemove = async (id: string) => {
  try {
    await removeEntity(TABLE_NAME, id);
  } catch (error) {
    console.error(`remove couldn't find a user with id-${id}`);
  }
};

const uUpdate = async (id: string, user: User) => {
  const entity = await updateEntity(TABLE_NAME, id, user);
  if (!entity) {
    console.error(`update couldn't find a user with id-${id}`);
  }
  return entity;
};

const uSave = async (user: User) => saveEntity(TABLE_NAME, user);

export { uGetAll, uGet, uRemove, uUpdate, uSave };
