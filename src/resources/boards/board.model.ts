import { v4 as uuid } from 'uuid';
import { Column } from '../columns/column.model';
import { IBoard, IColumn } from '../../common/interfaces';

export class Board implements IBoard {
  /**
   * create new board
   * @param  board - user data id:string title:string columns: Column[]
   * @returns  board data Board
   */
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

  /**
   * prepare board data to response
   * @param  board - board data Board
   * @returns  board data to response  id:string title:string columns: Column[]
   */

  static toResponse(board: IBoard) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}
