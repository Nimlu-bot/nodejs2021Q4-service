import { v4 as uuid } from 'uuid';

import { IUser } from '../../common/interfaces';

export class User implements IUser {
  /**
   * create new user
   * @param  user - user data id:string name:string login:string password:string
   * @returns  user data User
   */

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

  /**
   * remove password from User object
   * @param  user - user data User
   * @returns  user data without password  id:string name:string login:string
   */

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
