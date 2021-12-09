export interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}
export interface IColumn {
  id: string;
  title: string;
  order: number;
}
export interface IBoard {
  id?: string;
  title?: string;
  columns: IColumn[];
}
export interface ITask {
  id: string | undefined;
  title: string | undefined;
  order: number | undefined;
  description: string | undefined;
  userId: string | undefined | null;
  boardId: string | undefined;
  columnId: string | undefined;
}
