import { v4 as uuid } from 'uuid';
import { IColumn } from '../../common/interfaces';

export class Column implements IColumn {
  constructor({ id = uuid(), title = 'column title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  id: string;

  title: string;

  order: number;
}
