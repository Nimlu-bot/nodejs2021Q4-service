import { v4 as uuid } from 'uuid';
import { Column } from '../columns/column.model.js';

export class Board {
  constructor({
    id = uuid(),
    title = 'Board title',
    columns = [new Column()],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((column) => new Column(column));
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static fromRequest(body) {
    return new Board(body);
  }
}
