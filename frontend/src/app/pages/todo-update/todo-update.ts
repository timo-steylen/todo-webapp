import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-todo-update',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCheckbox,
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

}
