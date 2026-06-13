export interface Todo {
  id: number;
  name: string;
  description?: string;
  tags?: string;
  createdAt: string;
  deadlineDate?: string;
  completed: boolean;
}
