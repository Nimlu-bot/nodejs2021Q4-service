import { v4 as uuid } from 'uuid';
import { ITask } from '../../common/interfaces';

export class Task implements ITask {
  constructor(
    {
      id = uuid(),
      title = 'task title',
      order = 0,
      description = 'description',
      userId = 'userId',
      boardId = 'boardId',
      columnId = 'columnId',
    } = {} as ITask
  ) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  id?: string;

  title?: string;

  order?: number;

  description?: string;

  userId?: string | null | undefined;

  boardId?: string;

  columnId?: string;

  static toResponse(task: Task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return {
      id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    };
  }

  // static fromRequest(body: Task) {
  //   return new Task(body);
  // }
}
