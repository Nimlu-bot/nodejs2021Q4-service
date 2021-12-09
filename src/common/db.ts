import { User } from '../resources/users/user.model';
import { Task } from '../resources/tasks/task.model';
import { Board } from '../resources/boards/board.model';

const db: { Users: Array<User>; Boards: Array<Board>; Tasks: Array<Task> } = {
  Users: [],
  Boards: [],
  Tasks: [],
};

const findIndex = (
  tableName: 'Users' | 'Boards' | 'Tasks',
  entity: User | Board | Task
): number => {
  let index;
  if (tableName === 'Users') {
    index = db['Users'].indexOf(entity as User);
  } else if (tableName === 'Boards') {
    index = db['Boards'].indexOf(entity as Board);
  } else index = db['Tasks'].indexOf(entity as Task);
  return index;
};

const fixUsers = (user: User) => {
  if (user) {
    const newTaskDb = db.Tasks.map((task) => ({
      ...task,
      userId: task.userId === user.id ? null : task.userId,
    }));
    db.Tasks = newTaskDb;
  }
};

const fixBoards = (board: Board) => {
  if (board) {
    const newTaskDb = db.Tasks.filter((task) => task.boardId !== board.id);
    db.Tasks = newTaskDb;
  }
};

export const getAllEntities = (
  tableName: 'Users' | 'Boards' | 'Tasks'
): User[] | Board[] | Task[] => {
  if (tableName === 'Users')
    return db['Users'].filter((entity: User) => entity);
  if (tableName === 'Boards')
    return db['Boards'].filter((entity: Board) => entity);
  return db['Tasks'].filter((entity: Task) => entity);
};

export const getEntity = (
  tableName: 'Users' | 'Boards' | 'Tasks',
  id: string | undefined
): User | Board | Task | undefined => {
  let entities;
  if (tableName === 'Users') {
    entities = db['Users'].filter((entity: User) => entity.id === id);
  } else if (tableName === 'Boards') {
    entities = db['Boards'].filter((entity: Board) => entity.id === id);
  } else entities = db['Tasks'].filter((entity: Task) => entity.id === id);
  return entities[0];
};

export const removeEntity = (
  tableName: 'Users' | 'Boards' | 'Tasks',
  id: string
): boolean => {
  const entity = getEntity(tableName, id);

  if (entity) {
    if (tableName === 'Users') fixUsers(entity as User);
    if (tableName === 'Boards') fixBoards(entity as Board);
    const index = findIndex(tableName, entity);
    delete db[tableName][index];
    return true;
  }
  return false;
};

export const saveEntity = (
  tableName: 'Users' | 'Boards' | 'Tasks',
  entity: User | Board | Task
): User | Board | Task | undefined => {
  if (tableName === 'Users') {
    db[tableName].push(entity as User);
  } else if (tableName === 'Boards') {
    db[tableName].push(entity as Board);
  } else db[tableName].push(entity as Task);
  // db[tableName].push(entity);
  return getEntity(tableName, entity.id);
};

export const updateEntity = (
  tableName: 'Users' | 'Boards' | 'Tasks',
  id: string | undefined,
  entity: User | Board | Task
): User | Board | Task | undefined => {
  let oldEntity;
  if (id) {
    oldEntity = getEntity(tableName, id);

    if (oldEntity) {
      const index = findIndex(tableName, oldEntity);
      db[tableName][index] = { ...entity, id };
    }
  }
  return getEntity(tableName, id as string);
};
