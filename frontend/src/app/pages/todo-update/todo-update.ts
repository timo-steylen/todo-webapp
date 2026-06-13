import {Component, inject, signal} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatButton} from '@angular/material/button';
import {TodoService} from '../../services/todo-service';
import {Todo} from '../../models/todo.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-update',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatChipSet,
    MatChip,
    MatSlideToggle,
    MatButton
  ],
  templateUrl: './todo-update.html',
  styleUrl: './todo-update.scss',
})
export class TodoUpdate {

  private readonly route = inject(ActivatedRoute);
  private todoService = inject(TodoService);
  private router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private todoId: number = 0;

  readonly loading = signal(true);
  readonly todo = signal<Todo | null>(null);

  ngOnInit(): void {
    this.todoId = this.getTodoId();
    this.loadTodo();
  }

  loadTodo() {
    this.todoService.getTodo(this.todoId).subscribe({
      next: todo => {
        console.log(`Todo retrieved: ${todo.name}`);
        this.todo.set(todo);
        this.loading.set(false);
      },
      error: error => {
        console.error('Error during loading Todo: ', error);
        this.loading.set(false);
      }
    });
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todoId).subscribe({
      next: deleteTodo => {
        console.log('To-do successfully deleted: ', this.todoId);
        this.snackBar.open('Todo verwijderd', 'Sluiten', { duration: 2500 });
        this.router.navigate(['/']);
      },
      error: error => {
        console.error('Error during deleting Todo: ', error);
      }
    });
  }

  updateTodo(completed: boolean) {
    const currentTodo = this.todo();

    if (!currentTodo) {
      return;
    }

    // Signals prefer to work with a new immutable object.
    this.todo.set({
      ...currentTodo,
      completed
    });

    this.todoService
      .updateTodoStatus(this.todoId, completed)
      .subscribe({
        next: updatedTodo => {
          this.todo.set(updatedTodo);
          console.log(`Updated Todo successfully saved: ${updatedTodo.name}`);
          this.snackBar.open('Todo aangepast', 'Sluiten', { duration: 2500 });
        },
        error: error => {
          console.error('Error during updating Todo: ', error);
        }
      });
  }

  cancel() {
    this.router.navigate(['/todos']);
  }

  private getTodoId(): number {
    return Number(this.route.snapshot.paramMap.get('todoId'));
  }
}
