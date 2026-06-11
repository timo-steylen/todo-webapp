export interface Todo {
  id: bigint;
  name: string;
  description?: string;
  tags?: string;
  createdAt: string;
  deadlineDate?: string;
  completed: boolean;
}
