export interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
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
