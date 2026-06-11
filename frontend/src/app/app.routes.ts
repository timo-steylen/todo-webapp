import { Routes } from '@angular/router';

import {TodoList} from './pages/todo-list/todo-list';
import {TodoCreate} from './pages/todo-create/todo-create';
import {TodoUpdate} from './pages/todo-update/todo-update';

export const routes: Routes = [
  { path: 'create', component: TodoCreate },
  { path: 'overview', component: TodoList },
  { path: 'overview/:todoId', component: TodoUpdate },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: '**', redirectTo: 'overview' }
];
