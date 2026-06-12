import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {TodoService} from '../../services/todo-service';
import {CreateTodoRequest} from '../../models/create-todo-request.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-create',
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatButtonModule,
  ],
  templateUrl: './todo-create.html',
  styleUrl: './todo-create.scss',
})
export class TodoCreate {

  private fb = inject(FormBuilder);
  private todoService = inject(TodoService);
  private router = inject(Router);

  todoForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    description: [''],
    tags: [''],
    deadlineDate: [null as Date | null]
  });

  saveTodo(): void {
    const formValue = this.todoForm.getRawValue();

    if (this.todoForm.invalid) {
      console.log("Invalid Todo form: " + JSON.stringify(this.todoForm.getRawValue()));
      this.todoForm.markAllAsTouched();
      return;
    }
    console.log(formValue.deadlineDate);

    const request: CreateTodoRequest = {
      name: formValue.name,
      description: formValue.description,
      tags: formValue.tags,
      deadlineDate: formValue.deadlineDate
        ? formValue.deadlineDate.toISOString().split('T')[0]
        : undefined
    };

    this.todoService.createTodo(request).subscribe({
      next: savedTodo => {
        console.log('To-do successfully saved: ', savedTodo);
        this.router.navigate(['/']);
      },
      error: error => {
        console.error('Error during saving: ', error);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/todos']);
  }
}
