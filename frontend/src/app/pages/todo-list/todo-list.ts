import {Component, inject} from '@angular/core';
import {TodoService} from '../../services/todo-service';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  private todoService = inject(TodoService);

  todos: Todo[] = [];

  ngOnInit(): void {
    console.log("Todo's geladen");
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getAllTodos().subscribe({
      next: todos => this.todos = todos
    });
  }

}
