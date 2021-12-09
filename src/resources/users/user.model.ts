import { v4 as uuid } from 'uuid';

import { IUser } from '../../common/interfaces';

export class User implements IUser {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  id: string;

  name: string;

  login: string;

  password: string;

  static toResponse(user: IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
