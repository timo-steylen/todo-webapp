import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateTodoRequest} from '../models/create-todo-request.model';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8090/api/todos';

  createTodo(request: CreateTodoRequest): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, request);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  getTodo(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${todoId}`);
  }

  deleteTodo(todoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${todoId}`);
  }

  updateTodoStatus(todoId: number, completed: boolean): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${todoId}`, { completed });
  }
}
