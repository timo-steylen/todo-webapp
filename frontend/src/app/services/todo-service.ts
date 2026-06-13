import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateTodoRequest} from '../models/create-todo-request.model';
import {Observable, tap} from 'rxjs';
import {Todo} from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8090/api/todos';
  private readonly todos = signal<Todo[]>([]);

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

  loadTodos(): void {
    this.http.get<Todo[]>(this.apiUrl).subscribe({
    next: todos => {
      this.todos.set(todos);
      console.log('To-do successfully loaded: ', todos);
    },
    error: error => {
      console.error('Error during loading Todos : ', error);
    }
  });
  }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  getTodo(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${todoId}`);
  }

  updateTodoStatus(todoId: number, completed: boolean): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${todoId}`, { completed }).pipe(
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
