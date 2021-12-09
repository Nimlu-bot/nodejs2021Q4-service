import { v4 as uuid } from 'uuid';
import { Column } from '../columns/column.model';
import { IBoard, IColumn } from '../../common/interfaces';

export class Board implements IBoard {
  constructor({
    id = uuid(),
    title = 'Board title',
    columns = [new Column()],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((column) => new Column(column));
  }

  id?: string | undefined;

  title?: string | undefined;

  columns: IColumn[];

  static toResponse(board: IBoard) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static fromRequest(body: IBoard) {
    return new Board(body);
  }
}
