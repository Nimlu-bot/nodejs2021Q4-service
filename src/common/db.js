const db = {
  Users: [],
  Boards: [],
  Tasks: [],
};

const fixUsers = (user) => {
  if (user) {
    const newTaskDb = db.Tasks.map((task) => ({
      ...task,
      userId: task.userId === user.id ? null : task.userId,
    }));
    db.Tasks = newTaskDb;
  }
};

const fixBoards = (board) => {
  if (board) {
    const newTaskDb = db.Tasks.filter((task) => task.boardId !== board.id);
    db.Tasks = newTaskDb;
  }
};

export const getAllEntities = (tableName) =>
  db[tableName].filter((entity) => entity);

export const getEntity = (tableName, id) => {
  const entities = db[tableName].filter((entity) => entity.id === id);
  if (entities.lenght > 1) {
    throw Error(`DB data is wrong table-${tableName} id-${id}`);
  }
  return entities[0];
};

export const removeEntity = (tableName, id) => {
  const entity = getEntity(tableName, id);

  if (entity) {
    if (tableName === 'Users') fixUsers(entity);
    if (tableName === 'Boards') fixBoards(entity);
    const index = db[tableName].indexOf(entity);
    delete db[tableName][index];
    return true;
  }
  return false;
};

export const saveEntity = (tableName, entity) => {
  db[tableName].push(entity);
  return getEntity(tableName, entity.id);
};

export const updateEntity = async (tableName, id, entity) => {
  const oldEntity = getEntity(tableName, id);
  const index = db[tableName].indexOf(oldEntity);

  if (oldEntity) db[tableName][index] = { ...entity, id };

  return getEntity(tableName, id);
};
