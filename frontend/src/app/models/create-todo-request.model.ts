export interface CreateTodoRequest {
  name: string;
  description?: string;
  tags?: string;
  deadlineDate?: string;
}
