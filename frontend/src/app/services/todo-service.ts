import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateTodoRequest} from '../models/create-todo-request.model';
import {Observable, tap} from 'rxjs';
import {Todo} from '../models/todo.model';
import {UpdateTodoStatusRequest} from '../models/update-todo-status-request.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8090/api/todos';
  readonly todos = signal<Todo[]>([]);

  readonly openTodoCount = computed(() =>
    this.todos().filter(todo => !todo.completed).length
  );

  createTodo(request: CreateTodoRequest): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, request).pipe(
      tap(createdTodo => {
        this.todos.update(todos => [...todos, createdTodo]);
      })
    );
  }

  // This saves the retrieved objects to the service's todos.
  // Now it can be accessed from multiple locations and only needs to be saved once.
  getAllTodos(): void {
    this.http.get<Todo[]>(this.apiUrl).subscribe({
      next: todos => this.todos.set(todos)
    });
  }

  getTodo(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${todoId}`);
  }

  // After a successful PATCH, the local Signal becomes exactly the same
  // Todo_ as the one that was modified by the backend, so that all components
  // automatically see the latest data.
  updateTodoStatus(todoId: number, request: UpdateTodoStatusRequest): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${todoId}`, request).pipe(
      tap(updatedTodo => {
        this.todos.update(todos =>
          todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          )
        );
      })
    );
  }

  deleteTodo(todoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${todoId}`).pipe(
      tap(() => {
        this.todos.update(todos =>
          todos.filter(todo => todo.id !== todoId)
        );
      })
    );
  }
}
